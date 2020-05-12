import { IsString, IsNotEmpty, Length } from "class-validator";

export class CreateQuittDTO {
    @IsNotEmpty()
    @IsString()
    @Length(1, 255)
    post: string;
}