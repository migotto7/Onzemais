from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Empresa
from ..serializers.empresa import EmpresaSerializer


@api_view(['GET'])
def indexEmpresas(request):
    Empresas = Empresa.objects.all()
    serializer = EmpresaSerializer(Empresas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showEmpresa(request, pk):
    try:
        Empresa = Empresa.objects.get(pk=pk)
    except Empresa.DoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)

    serializer = EmpresaSerializer(Empresa)
    return Response(serializer.data)


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
        Empresa = Empresa.objects.get(pk=pk)
    except Empresa.DoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)

    serializer = EmpresaSerializer(Empresa, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def deleteEmpresa(request, pk):
    try:
        Empresa = Empresa.objects.get(pk=pk)
    except Empresa.DoesNotExist:
        return Response({'error': 'Empresa not found'}, status=404)

    Empresa.delete()
    return Response(status=204)
