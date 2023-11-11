import { Injectable } from '@nestjs/common';
import { CreateEspacosEsportivoDto } from './dto/create-espacos-esportivo.dto';
import { UpdateEspacosEsportivoDto } from './dto/update-espacos-esportivo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmpresasService } from 'src/empresas/empresas.service';

@Injectable()
export class EspacosEsportivosService {
  constructor(
    private prisma: PrismaService,
    private readonly empresasService: EmpresasService,
  ) {}

  async create(createEspacosEsportivoDto: CreateEspacosEsportivoDto) {
    await this.empresasService.findOne(createEspacosEsportivoDto.empresa_id);

    return this.prisma.espacoEsportivo.create({
      data: createEspacosEsportivoDto,
    });
  }

  findAll() {
    return this.prisma.espacoEsportivo.findMany();
  }

  findOne(id: number) {
    return this.prisma.espacoEsportivo.findUniqueOrThrow({ where: { id } });
  }

  async update(
    id: number,
    updateEspacosEsportivoDto: UpdateEspacosEsportivoDto,
  ) {
    await this.findOne(id);

    return this.prisma.espacoEsportivo.update({
      where: { id },
      data: updateEspacosEsportivoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.espacoEsportivo.delete({
      where: { id },
    });
  }
}
