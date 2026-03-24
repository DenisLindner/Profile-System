import { Injectable } from '@nestjs/common';
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
        return this.prisma.user.findUnique({where: {id}, 
            select: {id: true, name: true, email: true, password: false, createdAt: true, updatedAt: true}
        })
    }

    async update(id: number, dto: UpdateUserDTO) {
        return this.prisma.user.update({where: {id}, data: {name: dto.name}, 
            select: {id: true, name: true, email: true, password: false, createdAt: true, updatedAt: true}
        })
    }

    async deleteById(id: number) {
        return this.prisma.user.delete({where: {id}, select: {id: true, name: true, email: true, password: false}})
    }
}
