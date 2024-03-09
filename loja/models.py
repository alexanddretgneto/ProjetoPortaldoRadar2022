from django.db import models
from django.contrib.auth.models import User

class Carrinho(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Carrinho de {self.usuario.username}'

    def total_final(self):
        total = sum(item.subtotal() for item in self.itemcarrinho_set.all())
        return total

class ItemCarrinho(models.Model):
    carrinho = models.ForeignKey(Carrinho, on_delete=models.CASCADE)
    produto = models.ForeignKey('Produto', on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField(default=1)

    def subtotal(self):
        return self.produto.preco * self.quantidade

    def __str__(self):
        return f'{self.quantidade}x {self.produto.nome} no carrinho de {self.carrinho.usuario.username}'


class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    estoque = models.PositiveIntegerField(default=0)
    imagem = models.ImageField(upload_to='imagens/', default='sem-imagem.jpg')

    def __str__(self):
        return self.nome
