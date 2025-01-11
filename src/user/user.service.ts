import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; 
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: any) {
    const emailExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (emailExists) {
      throw new Error('Email sudah terdaftar');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const birthdate = new Date(data.birthdate + 'T00:00:00Z');
    data.password = hashedPassword;
    data.birthdate = birthdate;

    await this.prisma.user.create({
        data,
    });

    return {
        message:'User succesfully created',
    };
  }

  async signIn(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ 
      where: { email } 
    });

    // if (!user || user.password !== password) {
    //   throw new Error('Invalid email or password');
    // }

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid email or password');
    }

    const payload = { idUser: user.idUser, email: user.email };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET, 
      expiresIn: '15m',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET, 
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken,
      idUser: user.idUser,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.verify(refreshToken);  
      const payload = { idUser: decoded.idUser, email: decoded.email };
      const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });  

      return {
        accessToken,  
      };
    } catch (error) {
      throw new Error('Invalid or expired refresh token');
    }
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async viewProfileById(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { idUser: userId } });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
