import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './stratagies/local.stratagies';
import { JwtStrategyAccess } from './stratagies/accessToken.stratagies';
import { MeTokenStrategy } from './stratagies/meToken.stratagies';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsuariosModule,
    PassportModule,
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategyAccess, MeTokenStrategy],
})
export class AuthModule {}
