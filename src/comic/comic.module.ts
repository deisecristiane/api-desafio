import { Module } from '@nestjs/common';
import { createComicService } from './createComic.service';
import { createComicController } from './createComic.controller';
import { PrismaService } from 'src/database/PrismaService';
import { findAllComicController } from './findAllComic.controller';

@Module({
  controllers: [createComicController, findAllComicController],
  providers: [createComicService, findAllComicController, PrismaService]
})
export class ComicModule {}
