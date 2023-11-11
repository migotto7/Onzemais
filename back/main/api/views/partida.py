from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Partida
from base.models import Locacao
from ..serializers.partida import PartidaSerializer
from django.core.exceptions import ObjectDoesNotExist


@api_view(['GET'])
def indexPartidas(request):
    Partidas = Partida.objects.all()
    serializer = PartidaSerializer(Partidas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showPartida(request, pk):
    try:
        partida = Partida.objects.get(pk=pk)
        serializer = PartidaSerializer(partida)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return Response({'error': 'Partida not found'}, status=404)


@api_view(['POST'])
def addPartida(request):
    serializer = PartidaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def updatePartida(request, pk):
    try:
        partida = Partida.objects.get(pk=pk)
        serializer = PartidaSerializer(partida, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except ObjectDoesNotExist:
        return Response({'error': 'Partida not found'}, status=404)


@api_view(['DELETE'])
def deletePartida(request, pk):
    try:
        partida = Partida.objects.get(pk=pk)
        partida.delete()
        return Response(status=204)
    except ObjectDoesNotExist:
        return Response({'error': 'Partida not found'}, status=404)
