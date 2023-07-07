/* eslint-disable prettier/prettier */
import { Body, Controller,Param, Put, Patch } from "@nestjs/common";
import { ComicDTO } from "../dtos/Comic.dto";
import { updateComicByIdService } from "../services/updateComicById.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";


@ApiTags('comics')
@Controller('comics')
export class updateComicRarityController{
	constructor(private readonly comicService: updateComicByIdService) {}

    @Patch(':id')

    @ApiResponse({ status: 201, description: 'Updated comic rarity!'})
    @ApiResponse({ status: 400, description: 'Failed to update rarity comic.'})
    @ApiResponse({ status: 404, description: 'Comic does not exist.'})
    @ApiResponse({ status: 500, description: 'Internal server error.'})

    async update(@Param('id') id: number, @Body() rarity: ComicDTO){
        return this.comicService.update(id, rarity);

        
    }
}