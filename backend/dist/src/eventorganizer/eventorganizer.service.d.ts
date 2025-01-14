import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class EventOrganizerService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signUp(data: any): Promise<{
        message: string;
    }>;
    signIn(email: string, password: string): Promise<{
        OrganizerAccessToken: string;
        refreshToken: string;
        idOrganizer: number;
        organizerName: string;
        organizerInstitution: string;
    }>;
    refreshAccessToken(refreshToken: string): Promise<{
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
    viewProfileEventOrganizerById(organizerId: number): Promise<{
        idOrganizer: number;
        email: string;
        password: string;
        organizerName: string;
        organizerInstitution: string;
        organizerAddress: string;
        phoneNumber: string;
    }>;
}
