# app/urls.py
from django.urls import path, include
from .views.espaco_esportivo import *
from .views.empresa import *

urlpatterns = [
    path('espacos/', indexEspacoEsportivos, name='index-EspacoEsportivos'),
    path('espacos/<int:pk>', showEspacoEsportivo, name='show-EspacoEsportivo'),
    path('espacos/add/', addEspacoEsportivo, name='create-EspacoEsportivo'),
    path('espacos/update/<int:pk>/', updateEspacoEsportivo,
         name='update-EspacoEsportivo'),
    path('espacos/delete/<int:pk>/', deleteEspacoEsportivo,
         name='delete-EspacoEsportivo'),

    path('empresas/', indexEmpresas, name='index-empresas'),
    path('empresas/<int:pk>', showEmpresa, name='show-empresa'),
    path('empresas/add/', addEmpresa, name='create-empresa'),
    path('empresas/update/<int:pk>/', updateEmpresa,
         name='update-empresa'),
    path('espacos/delete/<int:pk>/', deleteEmpresa,
         name='delete-empresa'),
]
