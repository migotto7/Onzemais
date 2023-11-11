import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateAlugueisColeteDto } from './create-alugueis_colete.dto';

export class UpdateAlugueisColeteDto extends PartialType(
  OmitType(CreateAlugueisColeteDto, ['coleteId', 'locacaoId']),
) {}
