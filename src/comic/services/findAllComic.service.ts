import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class findAllComicService{

    constructor(private prisma:PrismaService){}

    async findAll(pageNumber, itemNumber){
        const skip = (pageNumber - 1) * itemNumber;
        const take = itemNumber;
        return this.prisma.comic.findMany({
            skip,
            take,
        });
    }
}