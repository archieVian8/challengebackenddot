import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(body: any): Promise<{
        message: string;
    }>;
    signIn(body: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
        idUser: number;
        firstName: string;
        lastName: string;
    }>;
    refreshToken(body: {
        refreshToken: string;
    }): Promise<{
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
    viewProfileById(userId: string): Promise<{
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
