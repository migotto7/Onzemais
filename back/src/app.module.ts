import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EmpresasModule } from './empresas/empresas.module';
import { EspacosEsportivosModule } from './espacos-esportivos/espacos-esportivos.module';
import { ColetesModule } from './coletes/coletes.module';
import { LocacoesModule } from './locacoes/locacoes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AlugueisColetesModule } from './alugueis_coletes/alugueis_coletes.module';
import { CampeonatosModule } from './campeonatos/campeonatos.module';
import { PartidasModule } from './partidas/partidas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, EmpresasModule, EspacosEsportivosModule, ColetesModule, LocacoesModule, UsuariosModule, AlugueisColetesModule, CampeonatosModule, PartidasModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
