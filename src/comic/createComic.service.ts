import { Injectable } from '@nestjs/common';
import { ComicDTO } from './comic.dto';
import { PrismaService } from 'src/database/PrismaService';


@Injectable()
export class createComicService {
    findAll() {
        throw new Error("Method not implemented.");
    }
    //Conexão com banco de dados
    constructor(private prisma:PrismaService){}

    async create(data: ComicDTO){
        const comicExists = await this.prisma.comic.findFirst({
            where:{
                id:data.id,
            }
        })

        if(comicExists){
            throw new Error('Comic already exists');
        }

        const comic = await this.prisma.comic.create({
            data:{
                name: data.name,
                description: data.description,
                price: data.price,
                rarity: data.rarity,
                quantity: data.quantity,
                likes: data.likes
            }
        });
        console.log(comic)

        
        return comic;
    }
}
