import { AcademiceventsService } from './academicevents.service';
export declare class AcademiceventsController {
    private readonly academiceventsService;
    constructor(academiceventsService: AcademiceventsService);
    createAcademicEvent(body: any): Promise<{
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
    joinAcademicEvent(body: any): Promise<{
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
    viewAcademicEventsById(id: number): Promise<{
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
    updateAcademicEvent(idAcademicEvents: number, idOrganizer: number, body: any): Promise<{
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
