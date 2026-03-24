import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string
}