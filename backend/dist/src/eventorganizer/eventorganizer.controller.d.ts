import { EventOrganizerService } from './eventorganizer.service';
export declare class EventOrganizerController {
    private readonly eventOrganizerService;
    constructor(eventOrganizerService: EventOrganizerService);
    signUp(data: any): Promise<{
        message: string;
    }>;
    signIn(body: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
        idOrganizer: number;
        organizerName: string;
        organizerInstitution: string;
    }>;
    refreshToken(body: {
        refreshToken: string;
    }): Promise<{
        accessToken: string;
    }>;
    getAllEventOrganizers(): Promise<{
        email: string;
        password: string;
        phoneNumber: string;
        idOrganizer: number;
        organizerName: string;
        organizerInstitution: string;
        organizerAddress: string;
    }[]>;
    viewProfileEventOrganizerById(userId: string): Promise<{
        email: string;
        password: string;
        phoneNumber: string;
        idOrganizer: number;
        organizerName: string;
        organizerInstitution: string;
        organizerAddress: string;
    }>;
}
