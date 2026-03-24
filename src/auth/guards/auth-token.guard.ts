import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthTokenGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.extractToken(request)

        if(!token) {
            throw new UnauthorizedException('Not logged in')
        }
        
        try {
            const payload = await this.jwtService.verifyAsync(token)
            request['user'] = payload
        } catch {
            throw new UnauthorizedException('Not logged in')
        }

        return true;
    }

    private extractToken(req: Request): string | undefined {
        return req.headers?.authorization?.split(' ')[1]
    }
}