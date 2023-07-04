import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class findAllComicService{

    constructor(private prisma:PrismaService){}

    async findAll(pageNumber: number, itemNumber: number){
        try {
            const skip = (pageNumber - 1) * itemNumber;
            const take = itemNumber;
    
            return this.prisma.comic.findMany({
                skip,
                take,
            });
        } catch (error) {
            throw new HttpException(
                {
                    message:'"Failed to get comics.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}