import { EspacoEsportivo } from '@prisma/client';

export class EspacosEsportivoEntity implements EspacoEsportivo {
  id: number;
  tamanho: string;
  capacidade: number;
  tipo_espaco: string;
  valor_hora: number;
  empresa_id: number;
}
