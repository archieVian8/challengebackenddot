import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signUp(data: any): Promise<{
        message: string;
    }>;
    signIn(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        idUser: number;
        firstName: string;
        lastName: string;
    }>;
    refreshAccessToken(refreshToken: string): Promise<{
        accessToken: string;
    }>;
    getAllUsers(): Promise<{
        idUser: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phoneNumber: string;
        elementarySchool: string;
        juniorHighSchool: string;
        seniorHighSchool: string;
        university: string;
        gender: import(".prisma/client").$Enums.Gender;
        about: string;
        birthdate: Date;
        refreshToken: string | null;
    }[]>;
    viewProfileById(userId: number): Promise<{
        idUser: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phoneNumber: string;
        elementarySchool: string;
        juniorHighSchool: string;
        seniorHighSchool: string;
        university: string;
        gender: import(".prisma/client").$Enums.Gender;
        about: string;
        birthdate: Date;
        refreshToken: string | null;
    }>;
}
