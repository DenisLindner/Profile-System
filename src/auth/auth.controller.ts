import { Controller } from '@nestjs/common';
import { IsPublic } from './decorators/is-public.decorator';

@Controller('auth')
@IsPublic()
export class AuthController {}
