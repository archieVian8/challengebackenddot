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
exports.AcademiceventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const client_1 = require("@prisma/client");
let AcademiceventsService = class AcademiceventsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAcademicEvent(data) {
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
    async viewAcademicEventsByJenjang(eventsJenjang) {
        const jenjangEnum = client_1.EventJenjang[eventsJenjang];
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
    async viewAcademicEventsByHeld(eventsHeld) {
        const heldEnum = client_1.EventHeld[eventsHeld];
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
    async viewAcademicEventsByJenjangHeld(eventsJenjang, eventsHeld) {
        const jenjangEnum = client_1.EventJenjang[eventsJenjang];
        const heldEnum = client_1.EventHeld[eventsHeld];
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
    async joinAcademicEvent({ idUser, idAcademicEvents }) {
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
    async viewAcademicEventsApplicants(idAcademicEvents, idOrganizer) {
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
    async viewAcademicEventsById(idAcademicEvents) {
        return await this.prisma.academicEvents.findUnique({
            where: { idAcademicEvents },
        });
    }
    async updateAcademicEvent(idAcademicEvents, idOrganizer, data) {
        const academicEvent = await this.prisma.academicEvents.findUnique({
            where: { idAcademicEvents },
        });
        if (!academicEvent) {
            throw new Error('Academic Event tidak ditemukan.');
        }
        if (academicEvent.idOrganizer !== idOrganizer) {
            throw new Error('Anda tidak memiliki izin untuk melakukan update Academic Event ini.');
        }
        const updateData = {
            eventsName: data.eventsName,
            eventsLoc: data.eventsLoc,
            eventsJenjang: data.eventsJenjang,
            eventsHeld: data.eventsHeld,
            eventCategory: data.eventCategory,
            eventsDate: data.eventsDate,
            registrationDate: data.registrationDate,
            eventsTheme: data.eventsTheme,
            registrationFee: data.registrationFee,
            capacityTotal: data.capacityTotal,
            deskripsiEvent: data.deskripsiEvent,
        };
        return await this.prisma.academicEvents.update({
            where: { idAcademicEvents },
            data: updateData,
        });
    }
    async deleteAcademicEvent(idAcademicEvents, idOrganizer) {
        const academicEvent = await this.prisma.academicEvents.findUnique({
            where: { idAcademicEvents },
            include: { eventOrganizer: true },
        });
        if (!academicEvent) {
            throw new Error('Academic Event tidak ditemukan.');
        }
        if (academicEvent.idOrganizer !== idOrganizer) {
            throw new Error('Anda tidak memiliki izin untuk melakukan delete Academic Events.');
        }
        await this.prisma.academicEvents.delete({
            where: { idAcademicEvents },
        });
        return { message: 'Berhasil melakukan delete Academic Events.' };
    }
};
exports.AcademiceventsService = AcademiceventsService;
exports.AcademiceventsService = AcademiceventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AcademiceventsService);
//# sourceMappingURL=academicevents.service.js.map