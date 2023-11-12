import { Injectable } from '@nestjs/common';
import { CreateColeteDto } from './dto/create-colete.dto';
import { UpdateColeteDto } from './dto/update-colete.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmpresasService } from 'src/empresas/empresas.service';

@Injectable()
export class ColetesService {
  constructor(
    private prisma: PrismaService,
    private readonly empresasService: EmpresasService,
  ) {}

  async create(createColeteDto: CreateColeteDto) {
    await this.empresasService.findOne(createColeteDto.empresa_id);

    return this.prisma.colete.create({ data: createColeteDto });
  }

  findAll() {
    return this.prisma.colete.findMany();
  }

  findOne(id: number) {
    return this.prisma.colete.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updateColeteDto: UpdateColeteDto) {
    await this.findOne(id);

    return this.prisma.colete.update({ where: { id }, data: updateColeteDto });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.colete.delete({ where: { id } });
  }
}
