import { Module } from '@nestjs/common';
import { ColetesService } from './coletes.service';
import { ColetesController } from './coletes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EmpresasModule } from 'src/empresas/empresas.module';

@Module({
  imports: [PrismaModule, EmpresasModule],
  controllers: [ColetesController],
  providers: [ColetesService],
  exports: [ColetesService],
})
export class ColetesModule {}
