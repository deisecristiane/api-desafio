import { Controller, Get } from "@nestjs/common";
import { findAllComicService } from "../services/findAllComic.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('comics')
@Controller('comics')
export class findAllComicController{
    constructor(private readonly comicService: findAllComicService) {}

    @Get()
    @ApiResponse({ status: 201, description: 'The comics has been successfully findAll.'})
    @ApiResponse({ status: 403, description: 'Error'})
    async findAll(pageNumber, itemNumber){
        return this.comicService.findAll(pageNumber, itemNumber);
    }

}