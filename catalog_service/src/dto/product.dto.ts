import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Length, Min } from "class-validator";


export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    @Length(2, 50)
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    @IsPositive()
    @Min(1)
    price: number;

    @IsNumber()
    @IsPositive()
    @Min(1)
    stock: number;
}


export class UpdateProductDto {

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @Length(10, 50)
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    price?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    stock?: number;

}