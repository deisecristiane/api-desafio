/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { createComicService } from '../services/createComic.service';
import { ComicDTO } from '../dtos/Comic.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comics')
@Controller('comics')
export class createComicController {
	constructor(private readonly comicService: createComicService){}

	@Post()
	@ApiResponse({ status: 201, description: 'The comic has been successfully created.' })
	@ApiResponse({ status: 403, description: 'Error' })

	async create(@Body() data: ComicDTO) {
    	return this.comicService.create(data)
	}
}
