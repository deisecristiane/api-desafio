import { Module } from '@nestjs/common';
import { createComicService } from './comic/services/createComic.service';
import { createComicController } from './comic/controllers/createComic.controller';
import { PrismaService } from 'src/database/PrismaService';
import { findAllComicController } from './comic/controllers/findAllComic.controller';
import { findAllComicService } from './comic/services/findAllComic.service';
import { updateComicByIdService } from './comic/services/updateComicById.service';
import { updateComicController } from './comic/controllers/updateComicById.controller';
import { deleteComicController } from './comic/controllers/deleteComicById.controller';
import { deleteComicByIdService } from './comic/services/deleteComicById.service';
import { deleteAllComicsService } from './comic/services/deleteAllComics.service';
import { deleteAllComicsController } from './comic/controllers/deleteAllComics.controller';
import { findComicByIdController } from './comic/controllers/findComicById.controller';
import { findComicByIdService } from './comic/services/findComicById.service';
import { updateComicRarityController } from './comic/controllers/updateComicRarity.controller';
import { updateRarityComic } from './comic/services/updateRarityComic.service';

@Module({
	controllers: [createComicController, findAllComicController,findComicByIdController,updateComicController, deleteComicController, deleteAllComicsController, updateComicRarityController],
	providers: [createComicService, findAllComicService,findComicByIdService,updateComicByIdService, deleteAllComicsService, deleteComicByIdService,updateRarityComic, PrismaService]
})
export class ComicModule {}
