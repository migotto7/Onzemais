import { OmitType } from '@nestjs/mapped-types';
import { CreateAlugueisColeteDto } from './create-alugueis_colete.dto';

export class UpdateAlugueisColeteDto extends OmitType(CreateAlugueisColeteDto, [
  'coleteId',
  'locacaoId',
]) {}
