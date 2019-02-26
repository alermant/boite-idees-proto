import { Controller, Post, UseInterceptors, FileInterceptor, UploadedFile } from '@nestjs/common';
import { ApiResponseModelProperty } from '@nestjs/swagger';

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
        return Buffer.from(file.buffer).toString('utf8').split("\n");
    }
}
