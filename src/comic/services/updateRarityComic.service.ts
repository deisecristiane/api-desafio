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

      		const comicExists = await this.prisma.comic.findUnique({ where: { id: comicId}});
			
            if (!comicExists) { throw new Error ('Comic does not exist!');};
            

            const comicUpdate = await this.prisma.comic.update({
                where:{
                    id:id
                },
                data:{
                    rarity: data.rarity
                }
            });

            return comicUpdate
		} catch (error) {
			throw new HttpException(
                {
                    message:'Failed to update comic.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
		}
  
    	
    }
}