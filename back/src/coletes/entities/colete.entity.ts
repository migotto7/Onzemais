import { Colete } from '@prisma/client';

export class ColeteEntity implements Colete {
  id: number;
  cor: string;
  valor_quantidade: number;
  empresa_id: number;
}
