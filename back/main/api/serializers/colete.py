from rest_framework import serializers
from base.models import Colete


class ColeteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colete
        fields = '__all__'
