import { Module } from '@nestjs/common';
import { EspacosEsportivosService } from './espacos-esportivos.service';
import { EspacosEsportivosController } from './espacos-esportivos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmpresasModule } from 'src/empresas/empresas.module';

@Module({
  imports: [PrismaModule, EmpresasModule],
  controllers: [EspacosEsportivosController],
  providers: [EspacosEsportivosService],
  exports: [EspacosEsportivosService],
})
export class EspacosEsportivosModule {}
