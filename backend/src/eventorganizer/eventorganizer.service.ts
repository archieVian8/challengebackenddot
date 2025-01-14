import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EventOrganizerService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: any) {
    const emailExists = await this.prisma.eventOrganizer.findUnique({
      where: { email: data.email },
    });

    if (emailExists) {
      throw new Error('Email sudah terdaftar');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    await this.prisma.eventOrganizer.create({
      data,
    });

    return {
        message:'eventOrganizer succesfully created',
    };

  }

  async signIn(email: string, password: string) {
    const organizer = await this.prisma.eventOrganizer.findUnique({
      where: { email },
    });

    if (!organizer || !(await bcrypt.compare(password, organizer.password))) {
      throw new Error('Invalid email or password');
    }
  
    const payload = { idOrganizer: organizer.idOrganizer, email: organizer.email };
    
    const OrganizerAccessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET, 
      expiresIn: '15m',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET, 
      expiresIn: '7d',
    });

    return {
      OrganizerAccessToken,
      refreshToken,
      idOrganizer: organizer.idOrganizer,
      organizerName: organizer.organizerName,
      organizerInstitution: organizer.organizerInstitution,
    };
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const decoded = this.jwtService.verify(refreshToken);  
      const payload = { idOrganizer: decoded.idOrganizer, email: decoded.email }; 
      const OrganizerAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });  

      return {
        OrganizerAccessToken,  
      };
    } catch (error) {
      throw new Error('Invalid or expired refresh token');
    }
  }

  async getAllEventOrganizers() {
    return this.prisma.eventOrganizer.findMany();
  }

  async viewProfileEventOrganizerById(organizerId: number) {
    const organizer = await this.prisma.eventOrganizer.findUnique({where: { idOrganizer: organizerId },});

    if (organizer) {
      return organizer;
    } else {
      throw new Error('Event Organizer not found');
    }
  }
}
