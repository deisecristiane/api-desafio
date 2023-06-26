import { Controller, Get } from "@nestjs/common";
import { findAllComicService } from "./findAllComic.service";

@Controller('comic')
export class findAllComicController{
    constructor(private readonly comicService: findAllComicService) {}

    @Get()
    async findAll(){
        return this.comicService.findAll();
    }

}