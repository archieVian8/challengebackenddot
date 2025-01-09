import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EventOrganizerService {
  constructor(private prisma: PrismaService) {}

  async signUp(data: any) {
    const emailExists = await this.prisma.eventOrganizer.findUnique({
      where: { email: data.email },
    });

    if (emailExists) {
      throw new Error('Email sudah terdaftar');
    }

    return this.prisma.eventOrganizer.create({
      data: {
        email: data.email,
        password: data.password,
        organizerName: data.organizerName,
        organizerInstitution: data.organizerInstitution,
        organizerAddress: data.organizerAddress,
        phoneNumber: data.phoneNumber,
      },
    });
  }

  async signIn(data: any) {
    const organizer = await this.prisma.eventOrganizer.findUnique({
      where: { email: data.email },
    });

    if (organizer && organizer.password === data.password) {
      return {
        status: 'Success',
        idOrganizer: organizer.idOrganizer,
        organizerName: organizer.organizerName,
      };
    }

    throw new Error('Invalid email or password');
  }

  async getAllEventOrganizers() {
    return this.prisma.eventOrganizer.findMany();
  }

  async viewProfileEventOrganizerById(userId: number) {
    const organizer = await this.prisma.eventOrganizer.findUnique({
      where: { idOrganizer: userId },
    });

    if (organizer) {
      return organizer;
    } else {
      throw new Error('Event Organizer not found');
    }
  }
}
