import { IsString, Length, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  username: string;
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(6, 30)
  password: string;
}