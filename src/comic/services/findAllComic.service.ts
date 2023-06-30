import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class findAllComicService{

    constructor(private prisma:PrismaService){}

    async findAll(pageNumber: number, itemNumber: number){
        const skip = (pageNumber - 1) * itemNumber;
        const take = itemNumber;
        console.log(skip)
        console.log(take)
        return this.prisma.comic.findMany({
            skip,
            take,
        });
    }
}