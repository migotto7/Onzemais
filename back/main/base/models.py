from django.db import models


class Empresa(models.Model):
    cnpj = models.CharField(max_length=255, primary_key=True)
    cep = models.CharField(max_length=255)
    bairro_endereco = models.CharField(max_length=255)
    numero_endereco = models.CharField(max_length=255)
    rua_endereco = models.CharField(max_length=255)
    horario_comercial = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    valor_hora = models.IntegerField()


class EspacoEsportivo(models.Model):
    id = models.AutoField(primary_key=True)
    tamanho = models.CharField(max_length=255)
    capacidade = models.IntegerField()
    tipo_espaco = models.CharField(max_length=255)
    valor_hora = models.IntegerField()
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, null=True)


class Colete(models.Model):
    id = models.AutoField(primary_key=True)
    cor = models.CharField(max_length=255)
    valor_quantidade = models.IntegerField()
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, null=True)


class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    senha = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    perfil = models.CharField(max_length=255)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, null=True)


class Locacao(models.Model):
    id = models.AutoField(primary_key=True)
    data_locacao = models.DateField()
    foi_pago = models.BooleanField()
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE, null=True)


class AluguelColete(models.Model):
    id = models.AutoField(primary_key=True)
    colete = models.ForeignKey(Colete, on_delete=models.CASCADE, null=True)
    locacao = models.ForeignKey(Locacao, on_delete=models.CASCADE, null=True)


class Campeonato(models.Model):
    campeonato_id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)


class Partida(models.Model):
    id = models.AutoField(primary_key=True)
    duracao_horas = models.IntegerField()
    locacao = models.ForeignKey(Locacao, on_delete=models.CASCADE, null=True)
    espaco = models.ForeignKey(
        EspacoEsportivo, on_delete=models.CASCADE, null=True)
    campeonato = models.ForeignKey(
        Campeonato, on_delete=models.CASCADE, null=True)
