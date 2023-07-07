/* eslint-disable prettier/prettier */
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { findComicByIdService } from "../services/findComicById.service";
import { Controller, Get, Param } from "@nestjs/common";

@ApiTags('comics')
@Controller('comics')
export class findComicByIdController {
    constructor(private readonly comicService: findComicByIdService) {}

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Comic Listed Successfully!'})
    @ApiResponse({ status: 404, description: 'Comic does not exist.'})
    @ApiResponse({ status: 500, description: 'Internal server error.'})

    async delete (@Param('id') id: number) {
        return this.comicService.findComicById(id)
  }
}