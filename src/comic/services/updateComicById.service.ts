import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { ComicDTO } from "../dtos/Comic.dto";


@Injectable()
export class updateComicByIdService{
    constructor(private prisma:PrismaService){}

    async update(id: number, data:ComicDTO){
		try {
			const comicId = parseInt(String(id), 10);

      		const comicExists = await this.prisma.comic.findUnique({ where: { id: comicId}});

			if (!comicExists) { throw new HttpException('Comic does not exist!', 404);};
			
      		const updatedComic = await this.prisma.comic.update({
				data:{
				codComic: data.codComic,
				name: data.name,
				description: data.description,
				price: data.price,
				rarity: data.rarity,
				quantity: data.quantity,
				likes: data.likes
				},
        		where: {id: comicId},
      		});

			return { success: true, message: 'Comic updated Successfully.', updatedComic: updatedComic };

		} catch (error) {
			throw new HttpException(
                {
					sucess: false,
                    message:'Failed to update comic.',
                    detals:error.message
                },
                HttpStatus.CONFLICT,
            );
		}
  
    	
    }
}