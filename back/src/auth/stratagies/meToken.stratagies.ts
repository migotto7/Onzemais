import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MeTokenStrategy extends PassportStrategy(Strategy, 'jwt-me') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_SECRET,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  validate(req: any) {
    return {
      accessToken: req.get('Authorization').replace('Bearer', '').trim(),
    };
  }
}
