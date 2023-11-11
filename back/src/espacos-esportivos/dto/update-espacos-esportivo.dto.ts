import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateEspacosEsportivoDto } from './create-espacos-esportivo.dto';

export class UpdateEspacosEsportivoDto extends PartialType(
  OmitType(CreateEspacosEsportivoDto, ['empresa_id']),
) {}
