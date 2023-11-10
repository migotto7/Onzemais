from django.contrib import admin
from .models import Empresa, Campeonato, Locacao, Partida, EspacoEsportivo, Usuario, Colete, AluguelColete

admin.site.register(Empresa)
admin.site.register(Campeonato)
admin.site.register(Locacao)
admin.site.register(Partida)
admin.site.register(EspacoEsportivo)
admin.site.register(Usuario)
admin.site.register(Colete)
admin.site.register(AluguelColete)


# Register your models here.
