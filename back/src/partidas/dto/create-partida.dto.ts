import { IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreatePartidaDto {
  @IsDateString()
  data_inicio_locacao: Date;

  @IsDateString()
  data_final_locacao: Date;

  @IsNumber()
  locacaoId: number;

  @IsNumber()
  espacoId: number;

  @IsNumber()
  @IsOptional()
  campeonatoId?: number;
}
