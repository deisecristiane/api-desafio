import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ComicDTO } from '../dtos/Comic.dto';
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
    
            if(comicExists){ throw new Error('Comic already exist.');};

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
            
            return { sucess: false, mensagem:'Comic successfully created!', comic: comic };
    
        } catch (error) {
            throw new HttpException(
                {
                    sucess: false,
                    message:'Error creating comic.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        

    

        

    }
}
