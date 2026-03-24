import { Controller, Delete, Get, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get('me')
    async getProfile() {
        
    }

    @Patch('me')
    async updateProfile() {
        
    }

    @Delete('me')
    async deleteProfile() {
        
    }
}
