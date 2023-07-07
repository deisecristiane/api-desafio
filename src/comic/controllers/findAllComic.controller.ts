/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from "@nestjs/common";
import { findAllComicService } from "../services/findAllComic.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('comics')
@Controller('comics')
export class findAllComicController {
    constructor(private readonly comicService: findAllComicService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Comics Listed Successfully!' })
    @ApiResponse({ status: 404, description: 'Comics not listed.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    
    async findAll(@Query('pageNumber') pageNumber = 1, @Query('itemNUmber') itemNumber = 10) {
		return this.comicService.findAll(pageNumber, itemNumber);
    }
}