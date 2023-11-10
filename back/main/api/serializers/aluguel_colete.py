from rest_framework import serializers
from base.models import AluguelColete


class AluguelColeteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AluguelColete
        fields = '__all__'
