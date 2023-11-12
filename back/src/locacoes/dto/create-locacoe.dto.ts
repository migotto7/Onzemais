import { IsBoolean, IsNumber } from 'class-validator';

export class CreateLocacoeDto {
  @IsBoolean()
  foi_pago: boolean;

  @IsNumber()
  usuarioId: number;

  @IsNumber()
  empresa_id: number;
}
