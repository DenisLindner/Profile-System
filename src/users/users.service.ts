import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateUserDTO) {
        return this.prisma.user.create({data: dto})
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({where: {email}})
    }

    async findById(id: number) {
        const user = await this.prisma.user.findUnique({where: {id}, 
            select: {id: true, name: true, email: true, createdAt: true, updatedAt: true}}
        )
        
        if(!user){
            throw new NotFoundException('User not found')
        }
        
        return user;
    }

    async update(id: number, dto: UpdateUserDTO) {
        const user = await this.prisma.user.findUnique({where: {id}})
        
        if(!user){
            throw new NotFoundException('User not found')
        }

        return this.prisma.user.update({where: {id}, data: {name: dto.name}, 
            select: {id: true, name: true, email: true, createdAt: true, updatedAt: true}
        })
    }

    async deleteById(id: number) {
        const user = await this.prisma.user.findUnique({where: {id}})
        
        if(!user){
            throw new NotFoundException('User not found')
        }

        await this.prisma.user.delete({where: {id}})
    }
}
