import { Module } from '@nestjs/common';
import { LocacoesService } from './locacoes.service';
import { LocacoesController } from './locacoes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmpresasModule } from 'src/empresas/empresas.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [PrismaModule, EmpresasModule, UsuariosModule],
  controllers: [LocacoesController],
  providers: [LocacoesService],
  exports: [LocacoesService],
})
export class LocacoesModule {}
