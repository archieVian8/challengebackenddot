"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrganizerModule = void 0;
const common_1 = require("@nestjs/common");
const eventorganizer_controller_1 = require("./eventorganizer.controller");
const eventorganizer_service_1 = require("./eventorganizer.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const jwt_module_1 = require("../../auth/jwt.module");
let EventOrganizerModule = class EventOrganizerModule {
};
exports.EventOrganizerModule = EventOrganizerModule;
exports.EventOrganizerModule = EventOrganizerModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_module_1.JwtModule],
        controllers: [eventorganizer_controller_1.EventOrganizerController],
        providers: [eventorganizer_service_1.EventOrganizerService, prisma_service_1.PrismaService],
    })
], EventOrganizerModule);
//# sourceMappingURL=eventorganizer.module.js.map