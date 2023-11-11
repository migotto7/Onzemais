import { Module } from '@nestjs/common';
import { PartidasService } from './partidas.service';
import { PartidasController } from './partidas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LocacoesModule } from 'src/locacoes/locacoes.module';
import { EspacosEsportivosModule } from 'src/espacos-esportivos/espacos-esportivos.module';
import { CampeonatosModule } from 'src/campeonatos/campeonatos.module';

@Module({
  imports: [
    PrismaModule,
    LocacoesModule,
    EspacosEsportivosModule,
    CampeonatosModule,
  ],
  controllers: [PartidasController],
  providers: [PartidasService],
})
export class PartidasModule {}
