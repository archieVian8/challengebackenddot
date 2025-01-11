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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademiceventsController = void 0;
const common_1 = require("@nestjs/common");
const academicevents_service_1 = require("./academicevents.service");
let AcademiceventsController = class AcademiceventsController {
    constructor(academiceventsService) {
        this.academiceventsService = academiceventsService;
    }
    async createAcademicEvent(body) {
        try {
            return await this.academiceventsService.createAcademicEvent(body);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async viewAllAcademicEvents() {
        return await this.academiceventsService.viewAllAcademicEvents();
    }
    async viewAcademicEventsByJenjang(eventsJenjang) {
        try {
            const result = await this.academiceventsService.viewAcademicEventsByJenjang(eventsJenjang);
            if (Array.isArray(result) && result.length === 0) {
                return { message: 'Academic events belum tersedia' };
            }
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async viewAcademicEventsByHeld(eventsHeld) {
        try {
            const result = await this.academiceventsService.viewAcademicEventsByHeld(eventsHeld);
            if (Array.isArray(result) && result.length === 0) {
                return { message: 'Academic events belum tersedia' };
            }
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async viewAcademicEventsByJenjangHeld(eventsJenjang, eventsHeld) {
        try {
            const result = await this.academiceventsService.viewAcademicEventsByJenjangHeld(eventsJenjang, eventsHeld);
            if (Array.isArray(result) && result.length === 0) {
                return { message: 'Academic events belum tersedia' };
            }
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async joinAcademicEvent(body) {
        return await this.academiceventsService.joinAcademicEvent(body);
    }
    async viewAcademicEventsApplicants(idAcademicEvents, idOrganizer) {
        return this.academiceventsService.viewAcademicEventsApplicants(Number(idAcademicEvents), Number(idOrganizer));
    }
    async viewAcademicEventsById(id) {
        return await this.academiceventsService.viewAcademicEventsById(Number(id));
    }
    async updateAcademicEvent(idAcademicEvents, idOrganizer, body) {
        try {
            return await this.academiceventsService.updateAcademicEvent(Number(idAcademicEvents), Number(idOrganizer), body);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteAcademicEvent(idAcademicEvents, idOrganizer) {
        try {
            return await this.academiceventsService.deleteAcademicEvent(Number(idAcademicEvents), Number(idOrganizer));
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.AcademiceventsController = AcademiceventsController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "createAcademicEvent", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "viewAllAcademicEvents", null);
__decorate([
    (0, common_1.Get)('jenjang'),
    __param(0, (0, common_1.Query)('eventsJenjang')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "viewAcademicEventsByJenjang", null);
__decorate([
    (0, common_1.Get)('held'),
    __param(0, (0, common_1.Query)('eventsHeld')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "viewAcademicEventsByHeld", null);
__decorate([
    (0, common_1.Get)('by-jenjang-held'),
    __param(0, (0, common_1.Query)('eventsJenjang')),
    __param(1, (0, common_1.Query)('eventsHeld')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "viewAcademicEventsByJenjangHeld", null);
__decorate([
    (0, common_1.Post)('join'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "joinAcademicEvent", null);
__decorate([
    (0, common_1.Get)('applicants-id/:idAcademicEvents'),
    __param(0, (0, common_1.Param)('idAcademicEvents')),
    __param(1, (0, common_1.Query)('idOrganizer')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "viewAcademicEventsApplicants", null);
__decorate([
    (0, common_1.Get)('academicevents-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "viewAcademicEventsById", null);
__decorate([
    (0, common_1.Put)('update/:idAcademicEvents'),
    __param(0, (0, common_1.Param)('idAcademicEvents')),
    __param(1, (0, common_1.Query)('idOrganizer')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "updateAcademicEvent", null);
__decorate([
    (0, common_1.Delete)('delete/:idAcademicEvents'),
    __param(0, (0, common_1.Param)('idAcademicEvents')),
    __param(1, (0, common_1.Query)('idOrganizer')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AcademiceventsController.prototype, "deleteAcademicEvent", null);
exports.AcademiceventsController = AcademiceventsController = __decorate([
    (0, common_1.Controller)('academicevents'),
    __metadata("design:paramtypes", [academicevents_service_1.AcademiceventsService])
], AcademiceventsController);
//# sourceMappingURL=academicevents.controller.js.map