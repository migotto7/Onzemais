import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateColeteDto {
  @IsString()
  @IsNotEmpty()
  cor: string;

  @IsNumber()
  valor_quantidade: number;

  @IsNumber()
  empresa_id: number;
}
