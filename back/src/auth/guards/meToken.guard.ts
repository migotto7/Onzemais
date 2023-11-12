import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class MeTokenGuard extends AuthGuard('jwt-me') {}
