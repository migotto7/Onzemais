import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateLocacoeDto } from './create-locacoe.dto';

export class UpdateLocacoeDto extends PartialType(
  OmitType(CreateLocacoeDto, ['empresa_id', 'usuarioId']),
) {}
