import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCampeonatoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
