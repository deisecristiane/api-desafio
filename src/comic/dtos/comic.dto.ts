import { ApiProperty } from "@nestjs/swagger";
import { RarityEnum } from "../enums/rarity.enum";

export class ComicDTO {
    
    @ApiProperty({
        description:'O id será usado para referenciar quadrinhos, e o mesmo será usado tanto para atualizar quanto para deletar quadrinho.',
        example:1
    })
    id?: number;

    @ApiProperty({
        description:'O código é utilizado para identificar cada quadrinho criado.',
        example:'comic1'
    })
    codComic: string;

    @ApiProperty({
        description:'O nome é utilizado identificar o personagem do quadrinho.',
        example:'Homem Aranha'
    })
    name: string;

    @ApiProperty({
        description:'A descrição é utilizada para descrever quadrinho.',
        example:'Quadrinho:  Homem Aranha no arranhaverso'
    })
    description: string;

    @ApiProperty({
        description:'O preço é utilizado para definir o preço do quadrinho.',
        example:45.25
    })
    price: number;

    @ApiProperty({
        description:'A raridade será usada para definir se o quadrinho é raro ou não.',
        example:true
    })
    rarity: RarityEnum;

    @ApiProperty({
        description:'A quantidade será usada para definir a quantidade de quadrinhos.',
        example:10
    })
    quantity: number;

    @ApiProperty({
        description:'Likes definir a quantidade de likes de um determinado quadrinho',
        example:25
    })
    likes: number;

    @ApiProperty({
        description:'O createdAt define quando o quadrinho foi criado.',
        example:'14/05/23'
    })
    createdAt?: Date;

    @ApiProperty({
        description:'O updateAt define quando o quadrinho foi atualizado.',
        example:'15/06/23'
    })
    updatedAt?: string;
    

}