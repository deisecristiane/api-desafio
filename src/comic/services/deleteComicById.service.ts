import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { ComicDTO } from "../dtos/comic.dto";

@Injectable()
export class deleteComicByIdService{
    constructor(private prisma:PrismaService){}

    async delete(id: number){

      try {
        const comicId = parseInt(String(id), 10);

        const comicExists = await this.prisma.comic.findUnique({
            where: {
              id: comicId,
            },
        });

        if (!comicExists) {
            throw new Error('Comic does not exist!');
        };
    
        await this.prisma.comic.delete({
            where: {
              id: comicId,
            },
        });

        return { success: true, message: "Comic deleted successfully." };

      } catch (error) {
        throw new HttpException(
            {
                message:'"Failed to delete comic.',
                detals:error.message

            },
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
        
    }
}