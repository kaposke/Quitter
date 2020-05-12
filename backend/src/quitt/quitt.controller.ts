import { Controller, Post, Body, ValidationPipe, UsePipes, UseGuards, Request, Get, Param } from '@nestjs/common';
import { CreateQuittDTO } from './dto/create-quitt.dto';
import { JwtAuthGuard } from 'src/auth/passport/jwt-auth.guard';
import { QuittService } from './quitt.service';
import { UserService } from 'src/user/user.service';

@Controller('quitts')
@UsePipes(new ValidationPipe())
export class QuittController {
    constructor(
        private readonly quittService: QuittService,
        private readonly userService: UserService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async createQuitt(@Request() req, @Body() quittDTO: CreateQuittDTO) {
        const user = await this.userService.get(req.user.userId);
        await this.quittService.create(user, quittDTO.post);
    }

    @Get()
    async getAll() {
        return await this.quittService.getAll();
    }

    @Get(':id')
    async getFromUser(@Param('id') id: number) {
        return await this.quittService.getFromUser(id);
    }
}
