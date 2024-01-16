"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const object_entity_1 = require("./object.entity");
const object_service_1 = require("./object.service");
const object_controller_1 = require("./object.controller");
const bucket_module_1 = require("../bucket/bucket.module");
let ObjectModule = class ObjectModule {
};
exports.ObjectModule = ObjectModule;
exports.ObjectModule = ObjectModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([object_entity_1.FileObject]),
            bucket_module_1.BucketModule
        ],
        providers: [object_service_1.FileObjectService],
        controllers: [object_controller_1.FileObjectController],
    })
], ObjectModule);
//# sourceMappingURL=object.module.js.map