import { Controller, Get } from "@nestjs/common";
import { createComicService } from "./createComic.service";

@Controller('comic')
export class findAllComicController{
    constructor(private readonly comicService: createComicService) {}

    @Get()
    async findAll(){
        return this.comicService.findAll();
    }

}