import { Body, Controller, Delete, Get, HttpCode, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUserDecorator } from 'src/auth/decorators/current-user.decorator';
import type { UserPayload } from './dto/user-payload.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get('me')
    async getProfile(@CurrentUserDecorator() user: UserPayload) {
        return this.service.findById(user.sub);
    }

    @Patch('me')
    async updateProfile(@CurrentUserDecorator() user: UserPayload, @Body() dto: UpdateUserDTO) {
        return this.service.update(user.sub, dto)
    }

    @Delete('me')
    @HttpCode(204)
    async deleteProfile(@CurrentUserDecorator() user: UserPayload) {
        await this.service.deleteById(user.sub)
    }
}
