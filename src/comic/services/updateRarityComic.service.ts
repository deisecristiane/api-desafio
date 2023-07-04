import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { RarityEnum } from "../enums/rarity.enum";
import { ComicDTO } from "../dtos/Comic.dto";

@Injectable()
export class updateRarityComic{
    constructor(private prisma:PrismaService){}

    async update(id: number, data: ComicDTO){
		try {
			const comicId = parseInt(String(id), 10);

      		const comic = await this.prisma.comic.findUnique({ where: { id: comicId}});
			
            if (!comic) { throw new HttpException('Comic does not exist.', 404);};

            const comicUpdate = await this.prisma.comic.update({
                where:{
                    id:id
                },
                data:{
                    rarity: data.rarity
                }
            });

            return { success: true, message: 'Updated comic rarity!', comic: comicUpdate };

		} catch (error) {
			throw new HttpException(
                {
                    sucess: false,
                    message:'Failed to update rarity comic.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
		}
  
    	
    }
}