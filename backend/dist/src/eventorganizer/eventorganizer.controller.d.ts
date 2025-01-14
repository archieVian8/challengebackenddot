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
        OrganizerAccessToken: string;
        refreshToken: string;
        idOrganizer: number;
        organizerName: string;
        organizerInstitution: string;
    }>;
    refreshToken(body: {
        refreshToken: string;
    }): Promise<{
        OrganizerAccessToken: string;
    }>;
    getAllEventOrganizers(): Promise<{
        idOrganizer: number;
        email: string;
        password: string;
        organizerName: string;
        organizerInstitution: string;
        organizerAddress: string;
        phoneNumber: string;
    }[]>;
    viewProfileEventOrganizerById(organizerId: string): Promise<{
        idOrganizer: number;
        email: string;
        password: string;
        organizerName: string;
        organizerInstitution: string;
        organizerAddress: string;
        phoneNumber: string;
    }>;
}
