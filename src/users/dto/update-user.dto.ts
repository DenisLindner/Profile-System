import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDTO {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string
}