import { Partida } from '@prisma/client';

export class PartidaEntity implements Partida {
  id: number;
  data_inicio_locacao: Date;
  data_final_locacao: Date;
  duracao_horas: number;
  locacaoId: number;
  valor: number;
  espacoId: number;
  campeonatoId: number;
}
