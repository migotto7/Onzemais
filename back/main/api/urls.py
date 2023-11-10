# app/urls.py
from django.urls import path, include
from .views.espaco_esportivo import *
from .views.empresa import *
from .views.usuario import *
from .views.locacao import *
from .views.campeonato import *
from .views.partida import *
from .views.relatorios import *

urlpatterns = [
    path('espacos/', indexEspacoEsportivos, name='index-EspacoEsportivos'),
    path('espacos/<int:pk>', showEspacoEsportivo, name='show-EspacoEsportivo'),
    path('espacos/add/', addEspacoEsportivo, name='create-EspacoEsportivo'),
    path('espacos/update/<int:pk>', updateEspacoEsportivo,
         name='update-EspacoEsportivo'),
    path('espacos/delete/<int:pk>', deleteEspacoEsportivo,
         name='delete-EspacoEsportivo'),

    path('empresas/', indexEmpresas, name='index-empresas'),
    path('empresas/<str:pk>', showEmpresa, name='show-empresa'),
    path('empresas/add/', addEmpresa, name='create-empresa'),
    path('empresas/update/<str:pk>', updateEmpresa,
         name='update-empresa'),
    path('empresas/delete/<str:pk>', deleteEmpresa,
         name='delete-empresa'),

    path('usuarios/', indexUsuarios, name='index-usuarios'),
    path('usuarios/<int:pk>', showUsuario, name='show-usuario'),
    path('usuarios/add/', addUsuario, name='create-usuario'),
    path('usuarios/update/<int:pk>', updateUsuario,
         name='update-usuario'),
    path('usuarios/delete/<int:pk>', deleteUsuario,
         name='delete-usuario'),

    path('locacoes/', indexLocacoes, name='index-locacoes'),
    path('locacoes/<int:pk>', showLocacao, name='show-locacao'),
    path('locacoes/add/', addLocacao, name='create-locacao'),
    path('locacoes/update/<int:pk>', updateLocacao,
         name='update-locacao'),
    path('locacoes/delete/<int:pk>', deleteLocacao,
         name='delete-locacao'),

    path('campeonatos/', indexCampeonatos, name='index-campeonatos'),
    path('campeonatos/<int:pk>', showCampeonato, name='show-campeonato'),
    path('campeonatos/add/', addCampeonato, name='create-campeonato'),
    path('campeonatos/update/<int:pk>', updateCampeonato,
         name='update-campeonato'),
    path('campeonatos/delete/<int:pk>', deleteCampeonato,
         name='delete-campeonato'),

    path('partidas/', indexPartidas, name='index-partidas'),
    path('partidas/<int:pk>', showPartida, name='show-partida'),
    path('partidas/add/', addPartida, name='create-partida'),
    path('partidas/update/<int:pk>', updatePartida,
         name='update-partida'),
    path('partidas/delete/<int:pk>', deletePartida,
         name='delete-partida'),

    path('relatorios/<str:pk>', showRelatorio, name='index-relatios'),

]
