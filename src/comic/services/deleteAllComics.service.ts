/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";



@Injectable()
export class deleteAllComicsService{
    constructor(private prisma:PrismaService){}

    async deleteAllComics(){
        try {

            const comics = await this.prisma.comic.findMany();

            if(comics.length == 0 ){ throw new Error ('No comic records.');}

            await this.prisma.comic.deleteMany({});

            return { success: true, message: 'All comics deleted successfully!'};

        } catch (error) {
            throw new HttpException(
                {
                    sucess: false,
                    message:'Failed to delete comics.',
                    detals:error.message
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}