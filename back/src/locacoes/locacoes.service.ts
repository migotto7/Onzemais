import { Injectable } from '@nestjs/common';
import { CreateLocacoeDto } from './dto/create-locacoe.dto';
import { UpdateLocacoeDto } from './dto/update-locacoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmpresasService } from 'src/empresas/empresas.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class LocacoesService {
  constructor(
    private prisma: PrismaService,
    private readonly empresasService: EmpresasService,
    private readonly usuariosService: UsuariosService,
  ) {}

  async create(createLocacoeDto: CreateLocacoeDto) {
    await this.empresasService.findOne(createLocacoeDto.empresa_id);
    await this.usuariosService.findOne(createLocacoeDto.usuarioId);

    return this.prisma.locacao.create({ data: createLocacoeDto });
  }

  findAll() {
    return this.prisma.locacao.findMany();
  }

  findOne(id: number) {
    return this.prisma.locacao.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updateLocacoeDto: UpdateLocacoeDto) {
    await this.findOne(id);

    return this.prisma.locacao.update({
      where: { id },
      data: updateLocacoeDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.locacao.delete({ where: { id } });
  }
}
