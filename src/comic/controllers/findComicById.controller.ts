/* eslint-disable prettier/prettier */
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { findComicByIdService } from "../services/findComicById.service";
import { Controller, Get, Param } from "@nestjs/common";

@ApiTags('comics')
@Controller('comics')
export class findComicByIdController {
    constructor(private readonly comicService: findComicByIdService) {}

    @Get(':id')
    @ApiResponse({ status: 200, description: 'The comics has been successfully deleted.'})
    @ApiResponse({ status: 403, description: 'Error'})

    async delete (@Param('id') id: number) {
        return this.comicService.findComicById(id)
  }
}