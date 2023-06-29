import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";


@Injectable()
export class deleteAllComicsService{
    constructor(private prisma:PrismaService){}

    async delete(){
        return await this.prisma.comic.deleteMany({});
    }
}