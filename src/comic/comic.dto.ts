import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { type} from "os";

export type ComicDTO = {
    id?: string;
    name: string;
    description: string;
    price: Decimal;
    rarity: boolean;
    quantity: number;
    likes: number;
    createdAt?: Date;
    updatedAt?: Date;

}