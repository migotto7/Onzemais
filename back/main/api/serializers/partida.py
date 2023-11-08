from rest_framework import serializers
from base.models import Partida


class PartidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partida
        fields = '__all__'
