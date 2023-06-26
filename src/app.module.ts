import { Module } from '@nestjs/common';
import { ComicModule } from './comic/comic.module';


@Module({
  imports: [ComicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
