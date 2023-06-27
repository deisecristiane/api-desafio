import { Controller, Get } from "@nestjs/common";
import { findAllComicService } from "../services/findAllComic.service";

@Controller('comics')
export class findAllComicController{
    constructor(private readonly comicService: findAllComicService) {}

    @Get()
    async findAll(){
        return this.comicService.findAll();
    }

}