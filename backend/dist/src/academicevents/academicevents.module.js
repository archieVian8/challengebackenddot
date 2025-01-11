"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademiceventsModule = void 0;
const common_1 = require("@nestjs/common");
const academicevents_controller_1 = require("./academicevents.controller");
const academicevents_service_1 = require("./academicevents.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let AcademiceventsModule = class AcademiceventsModule {
};
exports.AcademiceventsModule = AcademiceventsModule;
exports.AcademiceventsModule = AcademiceventsModule = __decorate([
    (0, common_1.Module)({
        controllers: [academicevents_controller_1.AcademiceventsController],
        providers: [academicevents_service_1.AcademiceventsService, prisma_service_1.PrismaService]
    })
], AcademiceventsModule);
//# sourceMappingURL=academicevents.module.js.map