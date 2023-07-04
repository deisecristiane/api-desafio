/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ComicDTO } from '../dtos/Comic.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()

export class findComicByIdService {
  constructor(private prisma: PrismaService) {}

    async findComicById (id:number) {
        
        try {
            const comicId = parseInt(String(id), 10);

            const comicExists = await this.prisma.comic.findUnique({ where: { id: comicId }});

        	if (!comicExists) { throw new Error('Comic does not exist!');};
        
        	return this.prisma.comic.findUnique({ where: { id: comicId }});
			
        } catch (error) {
            throw new HttpException(
                {
                    message:'Failed to delete comic.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}