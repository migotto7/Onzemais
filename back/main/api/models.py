from django.db import models


class EspacoEsportivo(models.Model):
    espaco_id = models.IntegerField(primary_key=True)
    tipo_espaco = models.CharField(max_length=255)
    tamanho = models.CharField(max_length=255)
    capacidade = models.IntegerField()
    descricao = models.TextField()


class Empresa(models.Model):
    cnpj = models.CharField(max_length=255, primary_key=True)
    cep = models.CharField(max_length=255)
    bairro_endereco = models.CharField(max_length=255)
    numero_endereco = models.CharField(max_length=255)
    rua_endereco = models.CharField(max_length=255)
    horario_comercial = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    espaco = models.ForeignKey(EspacoEsportivo, on_delete=models.CASCADE)


class Cliente(models.Model):
    cliente_id = models.IntegerField(primary_key=True)
    senha = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)


class Locacao(models.Model):
    locacao_id = models.IntegerField(primary_key=True)
    data_locacao = models.DateField()
    valor = models.IntegerField()
    foi_pago = models.BooleanField()
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)


class Campeonato(models.Model):
    campeonato_id = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=255)


class Partida(models.Model):
    partida_id = models.IntegerField(primary_key=True)
    duracao_horas = models.IntegerField()
    locacao = models.ForeignKey(Locacao, on_delete=models.CASCADE)
    espaco = models.ForeignKey(EspacoEsportivo, on_delete=models.CASCADE)
    campeonato = models.ForeignKey(Campeonato, on_delete=models.CASCADE)


class Colete(models.Model):
    colete_id = models.IntegerField(primary_key=True)
    cor = models.CharField(max_length=255)
    quantidade = models.IntegerField()
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)


class LocacaoColete(models.Model):
    locacao_colete_id = models.IntegerField(primary_key=True)
    locacao = models.ForeignKey(Locacao, on_delete=models.CASCADE)
    colete = models.ForeignKey(Colete, on_delete=models.CASCADE)


class Narracao(models.Model):
    narracao_id = models.IntegerField(primary_key=True)
    narradores = models.CharField(max_length=255)
    locacao = models.ForeignKey(Locacao, on_delete=models.CASCADE)
