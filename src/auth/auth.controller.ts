import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { IsPublic } from './decorators/is-public.decorator';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
@IsPublic()
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('register')
    async register(@Body() dto: CreateUserDTO) {
        return this.service.register(dto)
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() dto: LoginDTO) {
        return this.service.login(dto)
    }
}
