import { Body, Controller,Param, Put } from "@nestjs/common";
import { ComicDTO } from "../dtos/comic.dto";
import { updateComicByIdService } from "../services/updateComicById.service";

@Controller('comics')
export class updateComicController{
    constructor(private readonly comicService: updateComicByIdService) {}

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: ComicDTO){
        return this.comicService.update(id, data);
    }

}