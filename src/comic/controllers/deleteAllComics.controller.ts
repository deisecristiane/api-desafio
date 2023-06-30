import { Controller, Delete } from '@nestjs/common';
import { deleteComicByIdService } from '../services/deleteComicById.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { deleteAllComicsService } from '../services/deleteAllComics.service';

@ApiTags('comics')
@Controller('comics')
export class deleteAllComicsController {
  constructor(private readonly comicService: deleteAllComicsService) {}

  @Delete()
  @ApiResponse({ status: 201, description: 'The comics has been successfully deleted.'})
  @ApiResponse({ status: 403, description: 'Error'})

  async delete () : Promise<any>{
    return this.comicService.deleteAllComics()
  }
}
