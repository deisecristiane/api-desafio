/* eslint-disable prettier/prettier */
import { Controller, Delete } from '@nestjs/common';
import { deleteComicByIdService } from '../services/deleteComicById.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { deleteAllComicsService } from '../services/deleteAllComics.service';

@ApiTags('comics')
@Controller('comics')
export class deleteAllComicsController {
	constructor(private readonly comicService: deleteAllComicsService) { }

	@Delete()
	@ApiResponse({ status: 200, description: 'All comics deleted successfully!' })
	@ApiResponse({ status: 500, description: 'Failed to delete comics.' })

	async delete(): Promise<any> {
    	return this.comicService.deleteAllComics()
	}
}
