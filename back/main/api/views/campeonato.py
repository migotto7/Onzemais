from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Campeonato
from ..serializers.campeonato import CampeonatoSerializer


@api_view(['GET'])
def indexCampeonatos(request):
    Campeonatos = Campeonato.objects.all()
    serializer = CampeonatoSerializer(Campeonatos, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showCampeonato(request, pk):
    try:
        Campeonato = Campeonato.objects.get(pk=pk)
    except Campeonato.DoesNotExist:
        return Response({'error': 'Campeonato not found'}, status=404)

    serializer = CampeonatoSerializer(Campeonato)
    return Response(serializer.data)


@api_view(['POST'])
def addCampeonato(request):
    serializer = CampeonatoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def updateCampeonato(request, pk):
    try:
        Campeonato = Campeonato.objects.get(pk=pk)
    except Campeonato.DoesNotExist:
        return Response({'error': 'Campeonato not found'}, status=404)

    serializer = CampeonatoSerializer(Campeonato, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def deleteCampeonato(request, pk):
    try:
        Campeonato = Campeonato.objects.get(pk=pk)
    except Campeonato.DoesNotExist:
        return Response({'error': 'Campeonato not found'}, status=404)

    Campeonato.delete()
    return Response(status=204)
