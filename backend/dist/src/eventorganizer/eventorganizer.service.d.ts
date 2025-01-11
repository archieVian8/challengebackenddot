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
        accessToken: string;
        refreshToken: string;
        idOrganizer: number;
        organizerName: string;
        organizerInstitution: string;
    }>;
    refreshAccessToken(refreshToken: string): Promise<{
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
    viewProfileEventOrganizerById(userId: number): Promise<{
        email: string;
        password: string;
        phoneNumber: string;
        idOrganizer: number;
        organizerName: string;
        organizerInstitution: string;
        organizerAddress: string;
    }>;
}
