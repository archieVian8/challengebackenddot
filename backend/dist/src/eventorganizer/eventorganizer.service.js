"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrganizerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let EventOrganizerService = class EventOrganizerService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async signUp(data) {
        const emailExists = await this.prisma.eventOrganizer.findUnique({
            where: { email: data.email },
        });
        if (emailExists) {
            throw new Error('Email sudah terdaftar');
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        await this.prisma.eventOrganizer.create({
            data,
        });
        return {
            message: 'eventOrganizer succesfully created',
        };
    }
    async signIn(email, password) {
        const organizer = await this.prisma.eventOrganizer.findUnique({
            where: { email },
        });
        if (!organizer || !(await bcrypt.compare(password, organizer.password))) {
            throw new Error('Invalid email or password');
        }
        const payload = { idOrganizer: organizer.idOrganizer, email: organizer.email };
        const OrganizerAccessToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '15m',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '7d',
        });
        return {
            OrganizerAccessToken,
            refreshToken,
            idOrganizer: organizer.idOrganizer,
            organizerName: organizer.organizerName,
            organizerInstitution: organizer.organizerInstitution,
        };
    }
    async refreshAccessToken(refreshToken) {
        try {
            const decoded = this.jwtService.verify(refreshToken);
            const payload = { idOrganizer: decoded.idOrganizer, email: decoded.email };
            const OrganizerAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
            return {
                OrganizerAccessToken,
            };
        }
        catch (error) {
            throw new Error('Invalid or expired refresh token');
        }
    }
    async getAllEventOrganizers() {
        return this.prisma.eventOrganizer.findMany();
    }
    async viewProfileEventOrganizerById(organizerId) {
        const organizer = await this.prisma.eventOrganizer.findUnique({ where: { idOrganizer: organizerId }, });
        if (organizer) {
            return organizer;
        }
        else {
            throw new Error('Event Organizer not found');
        }
    }
};
exports.EventOrganizerService = EventOrganizerService;
exports.EventOrganizerService = EventOrganizerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], EventOrganizerService);
//# sourceMappingURL=eventorganizer.service.js.map