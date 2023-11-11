import { Injectable } from '@nestjs/common';
import { CreateAlugueisColeteDto } from './dto/create-alugueis_colete.dto';
import { UpdateAlugueisColeteDto } from './dto/update-alugueis_colete.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ColetesService } from 'src/coletes/coletes.service';
import { LocacoesService } from 'src/locacoes/locacoes.service';

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
