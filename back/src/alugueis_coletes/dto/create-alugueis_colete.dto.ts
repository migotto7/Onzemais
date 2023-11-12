import { IsDateString, IsNumber } from 'class-validator';

export class CreateAlugueisColeteDto {
  @IsNumber()
  coleteId: number;

  @IsNumber()
  locacaoId: number;

  @IsDateString()
  data_inicio_locacao: Date;

  @IsDateString()
  data_final_locacao: Date;
}
