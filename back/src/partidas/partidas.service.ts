import { Injectable } from '@nestjs/common';
import { CreatePartidaDto } from './dto/create-partida.dto';
import { UpdatePartidaDto } from './dto/update-partida.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LocacoesService } from 'src/locacoes/locacoes.service';
import { EspacosEsportivosService } from 'src/espacos-esportivos/espacos-esportivos.service';
import { CampeonatosService } from 'src/campeonatos/campeonatos.service';
import DateUtil from 'src/utils/date';

@Injectable()
export class PartidasService {
  constructor(
    private prisma: PrismaService,
    private readonly locacoesSerice: LocacoesService,
    private readonly espacosEsportivosService: EspacosEsportivosService,
    private readonly campeonatosService: CampeonatosService,
  ) {}

  async create(createPartidaDto: CreatePartidaDto) {
    await this.locacoesSerice.findOne(createPartidaDto.locacaoId);
    const espacoEsportivo = await this.espacosEsportivosService.findOne(
      createPartidaDto.espacoId,
    );

    if (createPartidaDto?.campeonatoId) {
      await this.campeonatosService.findOne(createPartidaDto.campeonatoId);
    }

    const duracao_horas = DateUtil.calculateHourDifference(
      createPartidaDto.data_final_locacao,
      createPartidaDto.data_inicio_locacao,
    );
    const valor = espacoEsportivo.valor_hora * duracao_horas;

    return this.prisma.partida.create({
      data: { ...createPartidaDto, duracao_horas, valor },
    });
  }

  findAll() {
    return this.prisma.partida.findMany();
  }

  findOne(id: number) {
    return this.prisma.partida.findUniqueOrThrow({ where: { id } });
  }

  async update(id: number, updatePartidaDto: UpdatePartidaDto) {
    const partida = await this.findOne(id);

    const espacoEsportivo = await this.espacosEsportivosService.findOne(
      partida.espacoId,
    );

    const duracao_horas = DateUtil.calculateHourDifference(
      updatePartidaDto.data_final_locacao,
      updatePartidaDto.data_inicio_locacao,
    );
    const valor = espacoEsportivo.valor_hora * duracao_horas;

    return this.prisma.partida.update({
      where: { id },
      data: { ...updatePartidaDto, duracao_horas, valor },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.partida.delete({ where: { id } });
  }
}
