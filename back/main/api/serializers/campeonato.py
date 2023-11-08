from rest_framework import serializers
from base.models import Campeonato


class CampeonatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campeonato
        fields = '__all__'
