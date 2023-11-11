import { Campeonato } from '@prisma/client';

export class CampeonatoEntity implements Campeonato {
  id: number;
  nome: string;
}
