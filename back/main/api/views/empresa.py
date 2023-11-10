from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Empresa
from ..serializers.empresa import EmpresaSerializer
from django.core.exceptions import ObjectDoesNotExist


@api_view(['GET'])
def indexEmpresas(request):
    Empresas = Empresa.objects.all()
    serializer = EmpresaSerializer(Empresas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showEmpresa(request, pk):
    try:
        empresa = Empresa.objects.get(pk=pk)
        serializer = EmpresaSerializer(empresa)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)


@api_view(['POST'])
def addEmpresa(request):
    serializer = EmpresaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def updateEmpresa(request, pk):
    try:
        empresa = Empresa.objects.get(pk=pk)
        serializer = EmpresaSerializer(empresa, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except ObjectDoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)


@api_view(['DELETE'])
def deleteEmpresa(request, pk):
    try:
        empresa = Empresa.objects.get(pk=pk)
        empresa.delete()
        return Response(status=204)
    except ObjectDoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)
