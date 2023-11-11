import { OmitType } from '@nestjs/mapped-types';
import { CreatePartidaDto } from './create-partida.dto';

export class UpdatePartidaDto extends OmitType(CreatePartidaDto, [
  'locacaoId',
  'espacoId',
  'campeonatoId',
]) {}
