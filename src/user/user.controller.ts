import { Controller, Post, Body, Get, Param, HttpCode, UsePipes, ValidationPipe, HttpException, HttpStatus, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { JwtAuthGuard } from "src/auth/passport/jwt-auth.guard";

@Controller('users')
@UsePipes(new ValidationPipe())
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post()
  @HttpCode(204)
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    const usernameExists = await this.userService.getByUsername(createUserDTO.username);
    if (usernameExists) {
      throw new HttpException('The username has been taken', HttpStatus.CONFLICT);
    }

    const emailExists = await this.userService.getByEmail(createUserDTO.email);
    console.log(emailExists);
    if (emailExists) {
      throw new HttpException('This email is already registered', HttpStatus.CONFLICT);
    }

    await this.userService.create(createUserDTO);
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async get(@Param('id') id: number) {
    const user = await this.userService.get(id);
    if (!user) {
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }
    // Remove password
    const { password, ...response } = user; 
    return response;
  }
}