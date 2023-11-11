from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Locacao
from base.models import Empresa
from base.models import Partida
from base.models import Colete
from base.models import AluguelColete
from base.models import EspacoEsportivo
from ..serializers.locacao import LocacaoSerializer
from django.core.exceptions import ObjectDoesNotExist
import statistics


def getLocacaoPartidas(locacaoId):
    try:
        return Partida.objects.filter(locacao=locacaoId)
    except ObjectDoesNotExist:
        return None


def getLocacaoColetes(locacaoId):
    try:
        return AluguelColete.objects.filter(locacao=locacaoId)
    except ObjectDoesNotExist:
        return None


def calcValorPartidas(Partidas):
    result = 0
    if Partidas:
        for partida in Partidas:
            espacoEsportivo = EspacoEsportivo.objects.get(pk=partida.espaco.id)
            result += partida.duracao_horas * espacoEsportivo.valor_hora
    return result


def calcValorLocacaoColetes(AluguelColetes):
    result = 0
    if AluguelColetes:
        for AluguelColete in AluguelColetes:
            colete = Colete.objects.get(pk=AluguelColete.colete.id)
            result += colete.valor_quantidade
    return result


def getFaturamentos(locacoes):
    faturamentos = []
    for locacao in locacoes:
        if locacao.foi_pago:
            partidas = getLocacaoPartidas(locacao.id)
            coletes = getLocacaoColetes(locacao.id)

            faturamento = calcValorPartidas(
                partidas) + calcValorLocacaoColetes(coletes)

            faturamentos.append(faturamento)

    return faturamentos


def getDevedoresAndPagantes(locacoes):
    devedores = 0
    pagantes = 0
    for locacao in locacoes:
        if locacao.foi_pago:
            pagantes += 1
        if not (locacao.foi_pago):
            devedores += 1
    return devedores, pagantes


def porcentagem(total, value):
    return (value / total) * 100


def locacaoExists(empresaId):
    try:
        return Locacao.objects.filter(empresa=empresaId)
    except ObjectDoesNotExist:
        return None


@api_view(['GET'])
def showRelatorio(request, pk):
    try:
        locacoes = locacaoExists(pk)

        if locacoes:

            faturamentos = getFaturamentos(locacoes)
            faturamento_data = {}
            if len(faturamentos) > 1:
                faturamento_data = {
                    'faturamentos': faturamentos,
                    'faturamento_total': sum(faturamentos),
                    'mediana_faturamentos': statistics.median(faturamentos),
                    'media_faturamentos': statistics.mean(faturamentos),
                    'varianca_faturamentos': statistics.variance(faturamentos),
                    'desvio_padrao_faturamentos': statistics.stdev(faturamentos),
                }
            else:
                faturamento_data = {
                    'error': 'Devem haver ao menos dois registros para comparações',
                    'faturamentos': faturamentos,
                }

            devedores, pagantes = getDevedoresAndPagantes(locacoes)
            devedores_data = {
                'porcentagem_pagantes': porcentagem(len(locacoes), pagantes),
                'porcentagem_devedores': porcentagem(len(locacoes), devedores),
            }

            return Response({
                'faturamento': faturamento_data,
                'devedores_pagantes': devedores_data
            }, status=200)

        return Response({'error': 'Did not found any "locacao" associated with this "empresa".'})
    except ObjectDoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)
