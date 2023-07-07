import { Body, Controller, Post } from '@nestjs/common';
import { createComicService } from '../services/createComic.service';
import { ComicDTO } from '../dtos/Comic.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comics')
@Controller('comics')
export class createComicController {
	constructor(private readonly comicService: createComicService){}

	@Post()
	@ApiResponse({ status: 201, description: 'Comic successfully created!' })
	@ApiResponse({ status: 409, description: 'Error creating comic.' })
	@ApiResponse({ status: 500, description: 'Internal server error.' })

	async create(@Body() data: ComicDTO) {
    	return this.comicService.create(data)
	}
}
