"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaulterClientModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const defaulterclient_schema_1 = require("../schemas/defaulterclient.schema");
const defaulterclient_controller_1 = require("./defaulterclient/controller/defaulterclient.controller");
const defaulterclient_service_1 = require("./defaulterclient/service/defaulterclient.service");
let DefaulterClientModule = class DefaulterClientModule {
};
DefaulterClientModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: defaulterclient_schema_1.DefaulterClient.name, schema: defaulterclient_schema_1.DefaulterClientSchema }])],
        controllers: [defaulterclient_controller_1.DefaulterClientController],
        providers: [defaulterclient_service_1.DefaulterClientService],
    })
], DefaulterClientModule);
exports.DefaulterClientModule = DefaulterClientModule;
//# sourceMappingURL=defaulterclient.module.js.map