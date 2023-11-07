# app/urls.py
from django.urls import path, include
from .views.espaco_esportivo import *

urlpatterns = [
    path('espacos/', indexEspacoEsportivos, name='index-EspacoEsportivos'),
    path('espacos/<int:pk>', showEspacoEsportivo, name='show-EspacoEsportivo'),
    path('espacos/add/', addEspacoEsportivo, name='create-EspacoEsportivo'),
    path('espacos/update/<int:pk>/', updateEspacoEsportivo,
         name='update-EspacoEsportivo'),
    path('espacos/delete/<int:pk>/', deleteEspacoEsportivo,
         name='delete-EspacoEsportivo'),
]
