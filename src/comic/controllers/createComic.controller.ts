import { Body, Controller, Post } from '@nestjs/common';
import { createComicService } from '../services/createComic.service';
import { ComicDTO } from '../dtos/comic.dto';

@Controller('comics')
export class createComicController {
  constructor(private readonly comicService: createComicService) {}

  @Post()
  async create (@Body() data: ComicDTO){
    return this.comicService.create(data)
  }
}
