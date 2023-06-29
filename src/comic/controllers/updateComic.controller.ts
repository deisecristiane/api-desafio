import { Body, Controller,Param, Put } from "@nestjs/common";
import { ComicDTO } from "../dtos/comic.dto";
import { updateComicByIdService } from "../services/updateComicById.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('comics')
@Controller('comics')
export class updateComicController{
    constructor(private readonly comicService: updateComicByIdService) {}

    @Put(':id')
    @ApiResponse({ status: 201, description: 'The comic has been successfully updated.'})
    @ApiResponse({ status: 403, description: 'Error'})
    async update(@Param('id') id: number, @Body() data: ComicDTO){
        return this.comicService.update(id, data);
    }

}