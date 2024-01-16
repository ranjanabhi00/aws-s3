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
exports.FileObjectController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const object_service_1 = require("./object.service");
const fs_1 = require("fs");
const bucket_service_1 = require("../bucket/bucket.service");
let FileObjectController = class FileObjectController {
    constructor(fileObjectService, bucketService) {
        this.fileObjectService = fileObjectService;
        this.bucketService = bucketService;
    }
    async uploadFile(file, bucketName) {
        const fileId = await this.fileObjectService.uploadFile(file, bucketName);
        return { fileId, bucketName };
    }
    async getFile(fileId, res) {
        const filePath = await this.fileObjectService.getFile(fileId);
        const file = (0, fs_1.createReadStream)(filePath);
        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': `attachment; filename=${fileId}`
        });
        return new common_1.StreamableFile(file);
    }
    deleteFile(id) {
        this.fileObjectService.deleteFile(id);
    }
};
exports.FileObjectController = FileObjectController;
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Query)('bucket')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileObjectController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(':fileId'),
    __param(0, (0, common_1.Param)('fileId')),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FileObjectController.prototype, "getFile", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FileObjectController.prototype, "deleteFile", null);
exports.FileObjectController = FileObjectController = __decorate([
    (0, common_1.Controller)('object'),
    __metadata("design:paramtypes", [object_service_1.FileObjectService,
        bucket_service_1.BucketService])
], FileObjectController);
//# sourceMappingURL=object.controller.js.map