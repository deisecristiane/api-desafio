import { Module } from '@nestjs/common';
import { createComicService } from './services/createComic.service';
import { createComicController } from './controllers/createComic.controller';
import { PrismaService } from 'src/database/PrismaService';
import { findAllComicController } from './controllers/findAllComic.controller';
import { findAllComicService } from './services/findAllComic.service';
import { updateComicByIdService } from './services/updateComicById.service';
import { updateComicController } from './controllers/updateComic.controller';
import { deleteComicController } from './controllers/deleteComic.controller';
import { deleteComicByIdService } from './services/deleteComicById.service';
import { deleteAllComicsService } from './services/deleteAllComics.service';
import { deleteAllComicsController } from './controllers/deleteAllComics.controller';
import { findComicByIdController } from './controllers/findComicById.controller';
import { findComicByIdService } from './services/findComicById.service';
import { updateComicRarityController } from './controllers/updateComicRarity.controller';
import { updateRarityComic } from './services/updateRarityComic.service';

@Module({
	controllers: [createComicController, findAllComicController,findComicByIdController,updateComicController, deleteComicController, deleteAllComicsController, updateComicRarityController],
	providers: [createComicService, findAllComicService,findComicByIdService,updateComicByIdService, deleteAllComicsService, deleteComicByIdService,updateRarityComic, PrismaService]
})
export class ComicModule {}
