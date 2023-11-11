import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateColeteDto } from './create-colete.dto';

export class UpdateColeteDto extends PartialType(
  OmitType(CreateColeteDto, ['empresa_id']),
) {}
