import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'; 

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async signUp(data: any) {
    const emailExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (emailExists) {
      throw new Error('Email sudah terdaftar');
    }

    const birthdate = new Date(data.birthdate + 'T00:00:00Z');
    data.birthdate = birthdate;

    await this.prisma.user.create({
        data,
    });

    return {
        message:'User succesfully created',
    };
  }

  async signIn(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    return {
      idUser: user.idUser,
      firstName: user.firstName,
      lastName: user.lastName,
    };
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
