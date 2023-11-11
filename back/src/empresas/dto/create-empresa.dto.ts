import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  bairro_endereco: string;

  @IsString()
  @IsNotEmpty()
  numero_endereco: string;

  @IsString()
  @IsNotEmpty()
  rua_endereco: string;

  @IsString()
  @IsNotEmpty()
  horario_comercial_inicio: string;

  @IsString()
  @IsNotEmpty()
  horario_comercial_final: string;

  @IsString()
  @IsNotEmpty()
  nome: string;
}
