import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { ComicDTO } from "../dtos/comic.dto";

@Injectable()
export class deleteComicByIdService{
    constructor(private prisma:PrismaService){}

    async delete(id: number){
        const comicId = parseInt(String(id), 10);

        const comicExists = await this.prisma.comic.findUnique({
            where: {
              id: comicId,
            },
          });

        if (!comicExists) {
            throw new Error('Comic does not exist!');
          };
    
        return await this.prisma.comic.delete({
            where: {
              id: comicId,
            },
          });
    }
}