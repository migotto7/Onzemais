from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Usuario
from ..serializers.usuario import UsuarioSerializer
from django.core.exceptions import ObjectDoesNotExist


@api_view(['GET'])
def indexUsuarios(request):
    Usuarios = Usuario.objects.all()
    serializer = UsuarioSerializer(Usuarios, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showUsuario(request, pk):
    try:
        usuario = Usuario.objects.get(pk=pk)
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)
    except ObjectDoesNotExist:
        return Response({'error': 'Usuario not found'}, status=404)


@api_view(['POST'])
def addUsuario(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['PUT'])
def updateUsuario(request, pk):
    try:
        usuario = Usuario.objects.get(pk=pk)
        serializer = UsuarioSerializer(usuario, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except ObjectDoesNotExist:
        return Response({'error': 'Usuario not found'}, status=404)


@api_view(['DELETE'])
def deleteUsuario(request, pk):
    try:
        usuario = Usuario.objects.get(pk=pk)
        usuario.delete()
        return Response(status=204)
    except ObjectDoesNotExist:
        return Response({'error': 'Usuario not found'}, status=404)
