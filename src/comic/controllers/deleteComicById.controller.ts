/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param} from '@nestjs/common';
import { ComicDTO } from '../dtos/Comic.dto';
import { deleteComicByIdService } from '../services/deleteComicById.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comics')
@Controller('comics')
export class deleteComicController {
	constructor(private readonly comicService: deleteComicByIdService) {}

  	@Delete(':id')
  	@ApiResponse({ status: 200, description: 'Comic deleted successfully!'})
  	@ApiResponse({ status: 404, description: 'Failed to delete comic.'})
	
  	async delete (@Param('id') id: number){
    	return this.comicService.delete(id)
  }
}
