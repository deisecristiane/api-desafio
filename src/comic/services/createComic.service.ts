import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ComicDTO } from '../dtos/comic.dto';
import { PrismaService } from 'src/database/PrismaService';


@Injectable()
export class createComicService {
    
    //Conexão com banco de dados
    constructor(private prisma:PrismaService){}

    async create(data: ComicDTO){
        try {
            const comicExists = await this.prisma.comic.findFirst({
                where:{
                    codComic:data.codComic,
                }
            });
    
            if(comicExists){
                throw new Error('Comic already exists');
            };

            const comic = await this.prisma.comic.create({
                data:{
                    codComic: data.codComic,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    rarity: data.rarity,
                    quantity: data.quantity,
                    likes: data.likes
                }
            });
            return {
                mensagem:'Comic successfully created!',
                data: comic
            };
    
        } catch (error) {
            throw new HttpException(
                {
                    message:'An error occurred while creating',
                    detals:error.message

                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        

    

        

    }
}
