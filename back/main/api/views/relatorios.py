from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Locacao
from base.models import Empresa
from ..serializers.locacao import LocacaoSerializer
from django.core.exceptions import ObjectDoesNotExist


def locacaoExists(empresaId):
    return Locacao.objects.filter(empresa_id=empresaId)


@api_view(['GET'])
def showRelatorio(request, pk):
    try:
        empresa = Empresa.objects.get(pk=pk)
        locacoes = locacaoExists(pk)

        if locacoes:
            locacoesSerializer = LocacaoSerializer(locacoes, many=True)
            return Response(locacoesSerializer.data, status=200)

        return Response({'error': 'Did not found any "locacao" associated with this "empresa" '})
    except ObjectDoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)
