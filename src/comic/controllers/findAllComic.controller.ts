import { Controller, Get } from "@nestjs/common";
import { findAllComicService } from "../services/findAllComic.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('comics')
@Controller('comics')
export class findAllComicController{
    constructor(private readonly comicService: findAllComicService) {}

    @Get()
    @ApiResponse({ status: 201, description: 'The comic has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Error'})
    async findAll(){
        return this.comicService.findAll();
    }

}