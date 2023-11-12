import { AluguelColete } from '@prisma/client';

export class AlugueisColeteEntity implements AluguelColete {
  id: number;
  coleteId: number;
  locacaoId: number;
  data_inicio_locacao: Date;
  data_final_locacao: Date;
}
