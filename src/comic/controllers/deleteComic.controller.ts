import { Body, Controller, Delete, Param} from '@nestjs/common';
import { ComicDTO } from '../dtos/comic.dto';
import { deleteComicByIdService } from '../services/deleteComicById.service';

@Controller('comics')
export class deleteComicController {
  constructor(private readonly comicService: deleteComicByIdService) {}

  @Delete(':id')
  async delete (@Param('id') id: number){
    return this.comicService.delete(id)
  }
}
