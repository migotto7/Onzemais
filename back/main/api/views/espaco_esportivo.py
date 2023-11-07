from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..models import EspacoEsportivo
from ..serializers.espaco_esportivo import EspacoEsportivoSerializer


@api_view(['GET'])
def indexEspacoEsportivos(request):
    EspacoEsportivos = EspacoEsportivo.objects.all()
    serializer = EspacoEsportivoSerializer(EspacoEsportivos, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showEspacoEsportivo(request, pk):
    try:
        EspacoEsportivo = EspacoEsportivo.objects.get(pk=pk)
    except EspacoEsportivo.DoesNotExist:
        return Response({'error': 'EspacoEsportivo not found'}, status=404)

    serializer = EspacoEsportivoSerializer(EspacoEsportivo)
    return Response(serializer.data)


@api_view(['POST'])
def addEspacoEsportivo(request):
    serializer = EspacoEsportivoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def updateEspacoEsportivo(request, pk):
    try:
        EspacoEsportivo = EspacoEsportivo.objects.get(pk=pk)
    except EspacoEsportivo.DoesNotExist:
        return Response({'error': 'EspacoEsportivo not found'}, status=404)

    serializer = EspacoEsportivoSerializer(EspacoEsportivo, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def deleteEspacoEsportivo(request, pk):
    try:
        EspacoEsportivo = EspacoEsportivo.objects.get(pk=pk)
    except EspacoEsportivo.DoesNotExist:
        return Response({'error': 'EspacoEsportivo not found'}, status=404)

    EspacoEsportivo.delete()
    return Response(status=204)
