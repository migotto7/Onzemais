from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Colete
from ..serializers.colete import ColeteSerializer
from django.core.exceptions import ObjectDoesNotExist


@api_view(['GET'])
def indexColetes(request):
    Coletes = Colete.objects.all()
    serializer = ColeteSerializer(Coletes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showColete(request, pk):
    try:
        colete = Colete.objects.get(pk=pk)
        serializer = ColeteSerializer(colete)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return Response({'error': 'Colete not found'}, status=404)


@api_view(['POST'])
def addColete(request):
    serializer = ColeteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def updateColete(request, pk):
    try:
        colete = Colete.objects.get(pk=pk)
        serializer = ColeteSerializer(colete, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except Colete.DoesNotExist:
        return Response({'error': 'Colete not found'}, status=404)


@api_view(['DELETE'])
def deleteColete(request, pk):
    try:
        colete = Colete.objects.get(pk=pk)
        colete.delete()
        return Response(status=204)
    except Colete.DoesNotExist:
        return Response({'error': 'Colete not found'}, status=404)
