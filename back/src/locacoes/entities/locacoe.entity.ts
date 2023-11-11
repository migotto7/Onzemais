import { Locacao } from '@prisma/client';

export class LocacaoEntity implements Locacao {
  id: number;
  foi_pago: boolean;
  usuarioId: number;
  empresa_id: number;
}
