import { PrismaService } from '../../prisma/prisma.service';
export declare class AcademiceventsService {
    private prisma;
    constructor(prisma: PrismaService);
    createAcademicEvent(data: any): Promise<{
        idOrganizer: number;
        capacityTotal: number | null;
        idAcademicEvents: number;
        eventsName: string;
        eventsLoc: string;
        eventsJenjang: import(".prisma/client").$Enums.EventJenjang;
        eventsHeld: import(".prisma/client").$Enums.EventHeld;
        eventCategory: string;
        eventsDate: Date;
        registrationDate: Date;
        eventsTheme: string;
        registrationFee: number;
        capacityTersisa: number | null;
        capacityStatus: import(".prisma/client").$Enums.CapacityStatus;
        deskripsiEvent: string;
    }>;
    viewAllAcademicEvents(): Promise<{
        idOrganizer: number;
        capacityTotal: number | null;
        idAcademicEvents: number;
        eventsName: string;
        eventsLoc: string;
        eventsJenjang: import(".prisma/client").$Enums.EventJenjang;
        eventsHeld: import(".prisma/client").$Enums.EventHeld;
        eventCategory: string;
        eventsDate: Date;
        registrationDate: Date;
        eventsTheme: string;
        registrationFee: number;
        capacityTersisa: number | null;
        capacityStatus: import(".prisma/client").$Enums.CapacityStatus;
        deskripsiEvent: string;
    }[]>;
    viewAcademicEventsByJenjang(eventsJenjang: string): Promise<{
        idOrganizer: number;
        capacityTotal: number | null;
        idAcademicEvents: number;
        eventsName: string;
        eventsLoc: string;
        eventsJenjang: import(".prisma/client").$Enums.EventJenjang;
        eventsHeld: import(".prisma/client").$Enums.EventHeld;
        eventCategory: string;
        eventsDate: Date;
        registrationDate: Date;
        eventsTheme: string;
        registrationFee: number;
        capacityTersisa: number | null;
        capacityStatus: import(".prisma/client").$Enums.CapacityStatus;
        deskripsiEvent: string;
    }[] | {
        message: string;
    }>;
    viewAcademicEventsByHeld(eventsHeld: string): Promise<{
        idOrganizer: number;
        capacityTotal: number | null;
        idAcademicEvents: number;
        eventsName: string;
        eventsLoc: string;
        eventsJenjang: import(".prisma/client").$Enums.EventJenjang;
        eventsHeld: import(".prisma/client").$Enums.EventHeld;
        eventCategory: string;
        eventsDate: Date;
        registrationDate: Date;
        eventsTheme: string;
        registrationFee: number;
        capacityTersisa: number | null;
        capacityStatus: import(".prisma/client").$Enums.CapacityStatus;
        deskripsiEvent: string;
    }[] | {
        message: string;
    }>;
    viewAcademicEventsByJenjangHeld(eventsJenjang: string, eventsHeld: string): Promise<{
        idOrganizer: number;
        capacityTotal: number | null;
        idAcademicEvents: number;
        eventsName: string;
        eventsLoc: string;
        eventsJenjang: import(".prisma/client").$Enums.EventJenjang;
        eventsHeld: import(".prisma/client").$Enums.EventHeld;
        eventCategory: string;
        eventsDate: Date;
        registrationDate: Date;
        eventsTheme: string;
        registrationFee: number;
        capacityTersisa: number | null;
        capacityStatus: import(".prisma/client").$Enums.CapacityStatus;
        deskripsiEvent: string;
    }[] | {
        message: string;
    }>;
    joinAcademicEvent({ idUser, idAcademicEvents }: any): Promise<{
        message: string;
        status?: undefined;
    } | {
        status: string;
        message?: undefined;
    }>;
    viewAcademicEventsApplicants(idAcademicEvents: number, idOrganizer: number): Promise<{
        idUser: number;
        fullName: string;
        email: string;
        phoneNumber: string;
    }[] | {
        message: string;
    }>;
    viewAcademicEventsById(idAcademicEvents: number): Promise<{
        idOrganizer: number;
        capacityTotal: number | null;
        idAcademicEvents: number;
        eventsName: string;
        eventsLoc: string;
        eventsJenjang: import(".prisma/client").$Enums.EventJenjang;
        eventsHeld: import(".prisma/client").$Enums.EventHeld;
        eventCategory: string;
        eventsDate: Date;
        registrationDate: Date;
        eventsTheme: string;
        registrationFee: number;
        capacityTersisa: number | null;
        capacityStatus: import(".prisma/client").$Enums.CapacityStatus;
        deskripsiEvent: string;
    }>;
    updateAcademicEvent(idAcademicEvents: number, idOrganizer: number, data: any): Promise<{
        idOrganizer: number;
        capacityTotal: number | null;
        idAcademicEvents: number;
        eventsName: string;
        eventsLoc: string;
        eventsJenjang: import(".prisma/client").$Enums.EventJenjang;
        eventsHeld: import(".prisma/client").$Enums.EventHeld;
        eventCategory: string;
        eventsDate: Date;
        registrationDate: Date;
        eventsTheme: string;
        registrationFee: number;
        capacityTersisa: number | null;
        capacityStatus: import(".prisma/client").$Enums.CapacityStatus;
        deskripsiEvent: string;
    }>;
    deleteAcademicEvent(idAcademicEvents: number, idOrganizer: number): Promise<{
        message: string;
    }>;
}
