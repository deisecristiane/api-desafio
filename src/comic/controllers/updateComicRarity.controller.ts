/* eslint-disable prettier/prettier */
import { Body, Controller,Param, Put, Patch } from "@nestjs/common";
import { ComicDTO } from "../dtos/Comic.dto";
import { updateComicByIdService } from "../services/updateComicById.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ComicRarityDTO } from "../dtos/ComicRarity.dto";

@ApiTags('comics')
@Controller('comics')
export class updateComicRarityController{
	constructor(private readonly comicService: updateComicByIdService) {}

    @Patch(':id')
  
    async update(@Param('id') id: number, @Body() rarity: ComicDTO){
        return this.comicService.update(id, rarity);

        
    }
}