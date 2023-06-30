/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";


@Injectable()
export class deleteAllComicsService{
    constructor(private prisma:PrismaService){}

    async deleteAllComics(){
        try {
            await this.prisma.comic.deleteMany({});
            return { success: true, message: "All comics deleted successfully." };
        } catch (error) {
            throw new HttpException(
                {
                    message:'Failed to delete comics.',
                    detals:error.message
    
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}