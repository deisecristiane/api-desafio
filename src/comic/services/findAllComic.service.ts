import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Injectable()
export class findAllComicService{

    constructor(private prisma:PrismaService){}

    async findAll(){
        return this.prisma.comic.findMany();
    }
}