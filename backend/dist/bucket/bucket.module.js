"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BucketModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bucket_entity_1 = require("./bucket.entity");
const bucket_service_1 = require("./bucket.service");
const bucket_controller_1 = require("./bucket.controller");
let BucketModule = class BucketModule {
};
exports.BucketModule = BucketModule;
exports.BucketModule = BucketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bucket_entity_1.Bucket])
        ],
        providers: [bucket_service_1.BucketService],
        controllers: [bucket_controller_1.BucketController],
        exports: [bucket_service_1.BucketService]
    })
], BucketModule);
//# sourceMappingURL=bucket.module.js.map