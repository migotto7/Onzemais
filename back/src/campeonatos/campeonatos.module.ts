import { Module } from '@nestjs/common';
import { CampeonatosService } from './campeonatos.service';
import { CampeonatosController } from './campeonatos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CampeonatosController],
  providers: [CampeonatosService],
  exports: [CampeonatosService],
})
export class CampeonatosModule {}
