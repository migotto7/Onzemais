import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { MeTokenGuard } from './guards/meToken.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  signin(@Req() req: any) {
    return this.authService.token(req.user);
  }

  @UseGuards(MeTokenGuard)
  @Post('me')
  me(@Req() req: any) {
    return this.authService.me(req.user);
  }
}
