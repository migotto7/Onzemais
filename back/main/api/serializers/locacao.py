from rest_framework import serializers
from base.models import Locacao


class LocacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Locacao
        fields = '__all__'
