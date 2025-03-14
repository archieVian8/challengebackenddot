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
exports.EventOrganizerController = void 0;
const common_1 = require("@nestjs/common");
const eventorganizer_service_1 = require("./eventorganizer.service");
const jwt_auth_guard_1 = require("../../auth/jwt.auth.guard");
let EventOrganizerController = class EventOrganizerController {
    constructor(eventOrganizerService) {
        this.eventOrganizerService = eventOrganizerService;
    }
    async signUp(data) {
        try {
            await this.eventOrganizerService.signUp(data);
            return { message: 'Event Organizer successfully created' };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async signIn(body) {
        try {
            return await this.eventOrganizerService.signIn(body.email, body.password);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async refreshToken(body) {
        try {
            return await this.eventOrganizerService.refreshAccessToken(body.refreshToken);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async getAllEventOrganizers() {
        try {
            return await this.eventOrganizerService.getAllEventOrganizers();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async viewProfileEventOrganizerById(organizerId) {
        try {
            const organizer = await this.eventOrganizerService.viewProfileEventOrganizerById(Number(organizerId));
            return organizer;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.EventOrganizerController = EventOrganizerController;
__decorate([
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventOrganizerController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventOrganizerController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('refresh-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventOrganizerController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)('all-eventorganizers'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventOrganizerController.prototype, "getAllEventOrganizers", null);
__decorate([
    (0, common_1.Get)('profile-id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Query)('organizerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventOrganizerController.prototype, "viewProfileEventOrganizerById", null);
exports.EventOrganizerController = EventOrganizerController = __decorate([
    (0, common_1.Controller)('eventorganizer'),
    __metadata("design:paramtypes", [eventorganizer_service_1.EventOrganizerService])
], EventOrganizerController);
//# sourceMappingURL=eventorganizer.controller.js.map