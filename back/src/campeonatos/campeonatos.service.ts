import { Injectable } from '@nestjs/common';
import { CreateCampeonatoDto } from './dto/create-campeonato.dto';
import { UpdateCampeonatoDto } from './dto/update-campeonato.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CampeonatosService {
  constructor(private prisma: PrismaService) {}

  create(createCampeonatoDto: CreateCampeonatoDto) {
    return this.prisma.campeonato.create({ data: createCampeonatoDto });
  }

  findAll() {
    return this.prisma.campeonato.findMany();
  }

  findOne(id: number) {
    return this.prisma.campeonato.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updateCampeonatoDto: UpdateCampeonatoDto) {
    await this.findOne(id);

    return this.prisma.campeonato.update({
      where: { id },
      data: updateCampeonatoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.campeonato.delete({ where: { id } });
  }
}
