"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_auth_guard_1 = require("./jwt.auth.guard");
let JwtModule = class JwtModule {
};
exports.JwtModule = JwtModule;
exports.JwtModule = JwtModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'defaultSecretKey',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        providers: [jwt_auth_guard_1.JwtAuthGuard],
        exports: [jwt_1.JwtModule, jwt_auth_guard_1.JwtAuthGuard],
    })
], JwtModule);
//# sourceMappingURL=jwt.module.js.map