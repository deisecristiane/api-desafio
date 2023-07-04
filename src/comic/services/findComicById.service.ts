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

            const comic = await this.prisma.comic.findUnique({ where: { id: comicId }});

        	if (!comic) { throw new HttpException('Comic does not exist.', 404);};
        
        	return { success: true, message: 'Comic Listed Successfully!', comic: comic };
			
        } catch (error) {
            throw new HttpException(
                {
                    sucess: false,
                    message:'Comic not listed.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}