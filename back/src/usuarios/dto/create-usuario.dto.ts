import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { RegExHelper } from 'src/helpers/regex.helper';

export class CreateUsuarioDto {
  @Matches(RegExHelper.password)
  senha: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  perfil: string;

  @IsNumber()
  @IsOptional()
  empresa_id?: number;
}
