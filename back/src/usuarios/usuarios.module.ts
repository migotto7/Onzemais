import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmpresasModule } from 'src/empresas/empresas.module';

@Module({
  imports: [PrismaModule, EmpresasModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
