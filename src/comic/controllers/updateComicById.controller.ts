/* eslint-disable prettier/prettier */
import { Body, Controller,Param, Put } from "@nestjs/common";
import { ComicDTO } from "../dtos/Comic.dto";
import { updateComicByIdService } from "../services/updateComicById.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('comics')
@Controller('comics')
export class updateComicController{
	constructor(private readonly comicService: updateComicByIdService) {}

    @Put(':id')
    @ApiResponse({ status: 201, description: 'Comic updated Successfully.'})
    @ApiResponse({ status: 400, description: 'Failed to update comic.'})
    @ApiResponse({ status: 404, description: 'Comic does not exist!'})
    @ApiResponse({ status: 500, description: 'Internal server error.'})

    async update(@Param('id') id: number, @Body() data: ComicDTO){
        return this.comicService.update(id, data);
    }
}