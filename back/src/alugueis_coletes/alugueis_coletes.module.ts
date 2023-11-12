import { Module } from '@nestjs/common';
import { AlugueisColetesService } from './alugueis_coletes.service';
import { AlugueisColetesController } from './alugueis_coletes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ColetesModule } from 'src/coletes/coletes.module';
import { LocacoesModule } from 'src/locacoes/locacoes.module';

@Module({
  imports: [PrismaModule, ColetesModule, LocacoesModule],
  controllers: [AlugueisColetesController],
  providers: [AlugueisColetesService],
})
export class AlugueisColetesModule {}
