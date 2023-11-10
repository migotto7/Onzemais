from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Locacao
from base.models import Empresa
from ..serializers.locacao import LocacaoSerializer
from django.core.exceptions import ObjectDoesNotExist
import statistics


def getFaturamentos(locacoes):
    faturamentos = []
    for locacao in locacoes:
        if locacao.foi_pago:
            faturamentos.append(locacao.valor)
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
    return Locacao.objects.filter(empresa_id=empresaId)


@api_view(['GET'])
def showRelatorio(request, pk):
    try:
        locacoes = locacaoExists(pk)

        if locacoes:

            faturamentos = getFaturamentos(locacoes)
            faturamento_data = {
                'faturamentos': faturamentos,
                'faturamento_total': sum(faturamentos),
                'mediana_faturamentos': statistics.median(faturamentos),
                'media_faturamentos': statistics.mean(faturamentos),
                'varianca_faturamentos': statistics.variance(faturamentos),
                'desvio_padrao_faturamentos': statistics.stdev(faturamentos),
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
