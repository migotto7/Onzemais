import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RelatoriosService {
  constructor(private prisma: PrismaService) {}

  calculatePartidaTotalValue(locacao) {
    let total = 0;
    for (const partida of locacao.Partida) {
      console.log(partida);
      total += partida.valor;
    }
    return total;
  }

  calculateAluguelColeteTotalValue(locacao) {
    let total = 0;
    for (const aluguelColete of locacao.AluguelColete) {
      total += aluguelColete.valor_quantidade;
    }
    console.log(total);
    return total;
  }

  async test(id: number) {
    const locacoesPagas = [];
    const locacoesNaoPagas = [];
    let faturamentoTotal = 0;
    const faturamentos = [];
    const result = {};
    const empresa = await this.prisma.empresa.findUniqueOrThrow({
      where: { id },
      include: {
        Usuario: true,
        Colete: true,
        EspacoEsportivo: true,
        Locacao: {
          include: {
            Partida: true,
            AluguelColete: true,
          },
        },
        _count: true,
      },
    });

    for (const locacao of empresa.Locacao) {
      if (locacao.foi_pago) {
        const totalPartida = this.calculatePartidaTotalValue(locacao);
        const totalAluguelColete =
          this.calculateAluguelColeteTotalValue(locacao);
        const total = totalPartida + totalAluguelColete;
        faturamentoTotal += total;
        faturamentos.push(total);
        locacao['total'] = total;
        locacoesPagas.push(locacao);
      } else {
        locacoesNaoPagas.push(locacao);
      }
    }

    if (faturamentoTotal > 0) {
      result['faturamentoTotal'] = faturamentoTotal;
      result['medianaFaturamento'] =
        faturamentos[Math.floor(faturamentos.length / 2)];
      result['desvioPadraoFaturamento'] = Math.sqrt(
        faturamentos.reduce((acc, cur) => acc + cur, 0) / faturamentos.length,
      );
      result['faturamentos'] = faturamentos;
      result['mediaFaturamento'] =
        faturamentos.reduce((acc, cur) => acc + cur, 0) / faturamentos.length;
    }

    if (locacoesPagas.length > 0) {
      result['locacoesPagas'] = locacoesPagas;
    }
    if (locacoesNaoPagas.length > 0) {
      result['locacoesNaoPagas'] = locacoesNaoPagas;
    }

    result['porcentagemLocacoesPagas'] =
      (locacoesPagas.length / empresa._count.Locacao) * 100;
    result['porcentagemLocacoesNaoPagas'] =
      (locacoesNaoPagas.length / empresa._count.Locacao) * 100;

    return result;
  }
}
