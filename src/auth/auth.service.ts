import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { HashingService } from './hashing/hashing.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly hashService: HashingService, private readonly jwtService: JwtService) {}

    async register(dto: CreateUserDTO): Promise<{accessToken: string}> {
        const user = await this.usersService.findByEmail(dto.email)

        if(user) {
            throw new ConflictException('User already exists with this email')
        }

        const passwordHash = await this.hashService.hash(dto.password)
        const newUser = await this.usersService.create({...dto, password: passwordHash})
        const accessToken = await this.generateToken(newUser.id, newUser.email)

        return {
            accessToken,
        }
    }

    async login(dto: LoginDTO): Promise<{accessToken: string}> {
        const user = await this.usersService.findByEmail(dto.email)

        if(!user) {
            throw new UnauthorizedException('Incorrect email or password')
        }
        
        const compare = await this.hashService.compare(dto.password, user.password)
        
        if(!compare) {
            throw new UnauthorizedException('Incorrect email or password')
        }

        const accessToken = await this.generateToken(user.id, user.email)

        return {
            accessToken,
        }
    }

    private async generateToken(id: number, email: string): Promise<string> {
        return this.jwtService.signAsync({
            sub: id,
            email: email,
        })
    }
}
