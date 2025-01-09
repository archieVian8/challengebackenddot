import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { EventJenjang, EventHeld } from '@prisma/client';

@Injectable()
export class AcademiceventsService {
  constructor(private prisma: PrismaService) {}

  async createAcademicEvent(data: any) {
    const { capacityTotal, ...rest } = data;

    return await this.prisma.academicEvents.create({
      data: {
        ...rest,
        capacityTotal,
        capacityTersisa: capacityTotal,
        capacityStatus: 'available',
      },
    });
  }

  async viewAllAcademicEvents() {
    return await this.prisma.academicEvents.findMany();
  }

  async viewAcademicEventsByJenjang(eventsJenjang: string) {
    const jenjangEnum = EventJenjang[eventsJenjang as keyof typeof EventJenjang];
  
    if (!jenjangEnum) {
      throw new Error('Jenjang tidak valid');
    }
  
    const events = await this.prisma.academicEvents.findMany({
      where: { eventsJenjang: jenjangEnum },
    });
  
    if (events.length === 0) {
      return { message: 'Academic events belum tersedia' }; 
    }
  
    return events;
  }

  async viewAcademicEventsByHeld(eventsHeld: string) {
    const heldEnum = EventHeld[eventsHeld as keyof typeof EventHeld];
    if (!heldEnum) {
        throw new Error('Held tidak valid');
      }
    
      const events = await this.prisma.academicEvents.findMany({
        where: { eventsHeld: heldEnum },
      });
    
      if (events.length === 0) {
        return { message: 'Academic events belum tersedia' }; 
      }
  
    return events;
  }
  

  async viewAcademicEventsByJenjangHeld(eventsJenjang: string, eventsHeld: string) {
    const jenjangEnum = EventJenjang[eventsJenjang as keyof typeof EventJenjang];
    const heldEnum = EventHeld[eventsHeld as keyof typeof EventHeld];
  
    if (!jenjangEnum) {
      throw new Error('Jenjang tidak valid');
    }
    if (!heldEnum) {
      throw new Error('Held tidak valid');
    }
  
    const events = await this.prisma.academicEvents.findMany({
      where: {
        eventsJenjang: jenjangEnum,
        eventsHeld: heldEnum,
      },
    });
  
    if (events.length === 0) {
      return { message: 'Academic events belum tersedia' };
    }
  
    return events;
  }
  
  async joinAcademicEvent({ idUser, idAcademicEvents }: any) {
    const academicEvent = await this.prisma.academicEvents.findUnique({
      where: { idAcademicEvents },
    });

    if (!academicEvent || academicEvent.capacityTersisa === 0) {
      return { message: 'Kapasitas Penuh' };
    }

    const isJoined = await this.prisma.userJoinAcademicEvents.findFirst({
      where: { idUser, idAcademicEvents },
    });

    if (isJoined) {
      return { message: 'Anda sudah mengikuti Academic Event ini' };
    }

    await this.prisma.userJoinAcademicEvents.create({
      data: { idUser, idAcademicEvents },
    });

    await this.prisma.academicEvents.update({
      where: { idAcademicEvents },
      data: {
        capacityTersisa: academicEvent.capacityTersisa - 1,
        capacityStatus: academicEvent.capacityTersisa - 1 === 0 ? 'full' : 'available',
      },
    });

    return { status: 'Success' };
  }

  async viewAcademicEventsApplicants(idAcademicEvents: number, idOrganizer: number) {
    const academicEvent = await this.prisma.academicEvents.findUnique({
      where: { idAcademicEvents },
      include: { eventOrganizer: true },
    });
  
    if (!academicEvent) {
      return { message: 'Academic Event tidak ditemukan.' };
    }
  
    if (academicEvent.idOrganizer !== idOrganizer) {
      return { message: 'Anda tidak memiliki izin untuk melihat pendaftar Academic Events.' };
    }
  
    const applicants = await this.prisma.userJoinAcademicEvents.findMany({
      where: { idAcademicEvents },
      include: {
        user: {
          select: {
            idUser: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    });
  
    if (applicants.length === 0) {
      return { message: 'Belum ada pendaftar untuk event ini.' };
    }
  
    return applicants.map((applicant) => ({
      idUser: applicant.user.idUser,
      fullName: `${applicant.user.firstName} ${applicant.user.lastName}`,
      email: applicant.user.email,
      phoneNumber: applicant.user.phoneNumber,
    }));
  }
  
  async viewAcademicEventsById(idAcademicEvents: number) {
    return await this.prisma.academicEvents.findUnique({
      where: { idAcademicEvents },
    });
  }
}
