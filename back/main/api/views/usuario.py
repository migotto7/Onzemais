from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Usuario
from ..serializers.usuario import UsuarioSerializer


@api_view(['GET'])
def indexUsuarios(request):
    Usuarios = Usuario.objects.all()
    serializer = UsuarioSerializer(Usuarios, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def showUsuario(request, pk):
    try:
        Usuario = Usuario.objects.get(pk=pk)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario not found'}, status=404)

    serializer = UsuarioSerializer(Usuario)
    return Response(serializer.data)


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
        Usuario = Usuario.objects.get(pk=pk)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario not found'}, status=404)

    serializer = UsuarioSerializer(Usuario, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def deleteUsuario(request, pk):
    try:
        Usuario = Usuario.objects.get(pk=pk)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario not found'}, status=404)

    Usuario.delete()
    return Response(status=204)
