import { Body, Controller, Delete, Param} from '@nestjs/common';
import { ComicDTO } from '../dtos/comic.dto';
import { deleteComicByIdService } from '../services/deleteComicById.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('comics')
@Controller('comics')
export class deleteComicController {
  constructor(private readonly comicService: deleteComicByIdService) {}

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'The comic has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Error'})
  async delete (@Param('id') id: number){
    return this.comicService.delete(id)
  }
}
