import { Body, Controller, Post } from '@nestjs/common';
import { createComicService } from './createComic.service';
import { ComicDTO } from './comic.dto';

@Controller('comic')
export class createComicController {
  constructor(private readonly comicService: createComicService) {}

  @Post()
  async create (@Body() data: ComicDTO){
    return this.comicService.create(data)
  }
}
