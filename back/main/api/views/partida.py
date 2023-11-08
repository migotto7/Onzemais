from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Partida
from ..serializers.partida import PartidaSerializer


@api_view(['GET'])
def indexPartidas(request):
    Partidas = Partida.objects.all()
    serializer = PartidaSerializer(Partidas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showPartida(request, pk):
    try:
        Partida = Partida.objects.get(pk=pk)
    except Partida.DoesNotExist:
        return Response({'error': 'Partida not found'}, status=404)

    serializer = PartidaSerializer(Partida)
    return Response(serializer.data)


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
        Partida = Partida.objects.get(pk=pk)
    except Partida.DoesNotExist:
        return Response({'error': 'Partida not found'}, status=404)

    serializer = PartidaSerializer(Partida, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def deletePartida(request, pk):
    try:
        Partida = Partida.objects.get(pk=pk)
    except Partida.DoesNotExist:
        return Response({'error': 'Partida not found'}, status=404)

    Partida.delete()
    return Response(status=204)
