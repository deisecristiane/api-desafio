import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";

@Controller('comic')
export class findAllComicService{

    constructor(private prisma:PrismaService){}

    async findAll(){
        return this.prisma.comic.findMany();
    }
}