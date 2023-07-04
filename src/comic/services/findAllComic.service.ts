import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class findAllComicService{

    constructor(private prisma:PrismaService){}

    async findAll(pageNumber: number, itemNumber: number){
        try {
            const skip = (pageNumber - 1) * itemNumber;
            const take = itemNumber;
    
            const comics = await this.prisma.comic.findMany({
                skip,
                take,
            });

            return { success: true, message: 'Comics Listed Successfully!', items: itemNumber, comics: comics };

        } catch (error) {
            throw new HttpException(
                {
                    sucess: false,
                    message:'Comics not listed.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}