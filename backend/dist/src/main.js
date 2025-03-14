"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: 'http://localhost:9000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
        credentials: true,
    });
    app.listen(3000, () => {
        console.log(`Server running on port ${configService.get('PORT') || 3000}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map