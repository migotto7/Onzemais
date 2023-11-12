import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlugueisColeteDto } from './dto/create-alugueis_colete.dto';
import { UpdateAlugueisColeteDto } from './dto/update-alugueis_colete.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ColetesService } from 'src/coletes/coletes.service';
import { LocacoesService } from 'src/locacoes/locacoes.service';
import ValidationUtil from 'src/utils/validation';

@Injectable()
export class AlugueisColetesService {
  constructor(
    private prisma: PrismaService,
    private readonly coletesService: ColetesService,
    private readonly locacoesService: LocacoesService,
  ) {}

  async create(createAlugueisColeteDto: CreateAlugueisColeteDto) {
    await this.coletesService.findOne(createAlugueisColeteDto.coleteId);
    await this.locacoesService.findOne(createAlugueisColeteDto.locacaoId);

    if (
      !ValidationUtil.isFutureDate(createAlugueisColeteDto.data_inicio_locacao)
    ) {
      throw new BadRequestException(
        'Data Inicio não é maior que a data de hoje!',
      );
    }

    if (
      !ValidationUtil.isCompareDate(
        createAlugueisColeteDto.data_inicio_locacao,
        createAlugueisColeteDto.data_final_locacao,
      )
    ) {
      throw new BadRequestException(
        'Data Final deve ser maior que a data inicial!',
      );
    }

    return this.prisma.aluguelColete.create({
      data: createAlugueisColeteDto,
    });
  }

  findAll() {
    return this.prisma.aluguelColete.findMany();
  }

  findOne(id: number) {
    return this.prisma.aluguelColete.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updateAlugueisColeteDto: UpdateAlugueisColeteDto) {
    await this.findOne(id);

    if (
      !ValidationUtil.isFutureDate(updateAlugueisColeteDto.data_inicio_locacao)
    ) {
      throw new BadRequestException(
        'Data Inicio não é maior que a data de hoje!',
      );
    }

    if (
      !ValidationUtil.isCompareDate(
        updateAlugueisColeteDto.data_inicio_locacao,
        updateAlugueisColeteDto.data_final_locacao,
      )
    ) {
      throw new BadRequestException(
        'Data Final deve ser maior que a data inicial!',
      );
    }

    return this.prisma.aluguelColete.update({
      where: { id },
      data: updateAlugueisColeteDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.aluguelColete.delete({ where: { id } });
  }
}
