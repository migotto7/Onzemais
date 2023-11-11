import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEspacosEsportivoDto {
  @IsString()
  @IsNotEmpty()
  tamanho: string;

  @IsNumber()
  capacidade: number;

  @IsString()
  @IsNotEmpty()
  tipo_espaco: string;

  @IsNumber()
  valor_hora: number;

  @IsNumber()
  empresa_id: number;
}
