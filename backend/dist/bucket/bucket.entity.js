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
exports.Bucket = void 0;
const object_entity_1 = require("../object/object.entity");
const typeorm_1 = require("typeorm");
let Bucket = class Bucket {
};
exports.Bucket = Bucket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bucket.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bucket.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => object_entity_1.FileObject, (fileObject) => fileObject.bucket),
    __metadata("design:type", Array)
], Bucket.prototype, "fileObjects", void 0);
exports.Bucket = Bucket = __decorate([
    (0, typeorm_1.Entity)()
], Bucket);
//# sourceMappingURL=bucket.entity.js.map