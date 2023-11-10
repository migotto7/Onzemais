from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import AluguelColete
from ..serializers.aluguel_colete import AluguelColeteSerializer
from django.core.exceptions import ObjectDoesNotExist


@api_view(['GET'])
def indexAluguelColetes(request):
    AluguelColetes = AluguelColete.objects.all()
    serializer = AluguelColeteSerializer(AluguelColetes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showAluguelColete(request, pk):
    try:
        aluguelColete = AluguelColete.objects.get(pk=pk)
        serializer = AluguelColeteSerializer(aluguelColete)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return Response({'error': 'AluguelColete not found'}, status=404)


@api_view(['POST'])
def addAluguelColete(request):
    serializer = AluguelColeteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def updateAluguelColete(request, pk):
    try:
        aluguelColete = AluguelColete.objects.get(pk=pk)
        serializer = AluguelColeteSerializer(aluguelColete, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except AluguelColete.DoesNotExist:
        return Response({'error': 'AluguelColete not found'}, status=404)


@api_view(['DELETE'])
def deleteAluguelColete(request, pk):
    try:
        aluguelColete = AluguelColete.objects.get(pk=pk)
        aluguelColete.delete()
        return Response(status=204)
    except AluguelColete.DoesNotExist:
        return Response({'error': 'AluguelColete not found'}, status=404)
