from rest_framework import serializers
from ..models import EspacoEsportivo


class EspacoEsportivoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EspacoEsportivo
        fields = '__all__'
