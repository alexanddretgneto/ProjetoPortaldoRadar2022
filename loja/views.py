from django.shortcuts import get_object_or_404, redirect, render
from .models import Carrinho, ItemCarrinho, Produto
from django.db.models import Sum


def listar_produtos(request):
    # Obter todos os produtos do banco de dados
    produtos = Produto.objects.all()
    return render(request, 'loja/produtos/listar_produtos.html', {'produtos': produtos})

def index(request):
    # Obter todos os produtos do banco de dados
    produtos = Produto.objects.all()
    return render(request, 'index.html', {'produtos': produtos})

def detalhes_produto(request, produto_id):
    produto = get_object_or_404(Produto, pk=produto_id)
    return render(request, 'loja/produtos/detalhes_produto.html', {'produto': produto})


def carrinho(request):
    carrinho_obj, created = Carrinho.objects.get_or_create(usuario=request.user)
    itens_carrinho = ItemCarrinho.objects.filter(carrinho=carrinho_obj)

    # Calcular o total das compras
    total_compras = sum(item.produto.preco * item.quantidade for item in itens_carrinho)

    return render(request, 'loja/carrinho.html', {'itens_carrinho': itens_carrinho, 'total_compras': total_compras})


def adicionar_carrinho(request, produto_id):
    produto = get_object_or_404(Produto, pk=produto_id)
    carrinho, created = Carrinho.objects.get_or_create(usuario=request.user)
    
    # Verificar se a ação é aumentar ou diminuir a quantidade
    action = request.POST.get('action')

    if action == 'increase':
        # Aumentar a quantidade do produto no carrinho
        item_carrinho, item_created = ItemCarrinho.objects.get_or_create(carrinho=carrinho, produto=produto)
        item_carrinho.quantidade += 1
        item_carrinho.save()
    elif action == 'decrease':
        # Diminuir a quantidade do produto no carrinho
        item_carrinho = ItemCarrinho.objects.get(carrinho=carrinho, produto=produto)
        if item_carrinho.quantidade > 1:
            item_carrinho.quantidade -= 1
            item_carrinho.save()
        else:
            item_carrinho.delete()
    else:
        # Se a ação não for aumentar nem diminuir, adicione o produto ao carrinho com quantidade 1
        item_carrinho, item_created = ItemCarrinho.objects.get_or_create(carrinho=carrinho, produto=produto)
        if not item_created:
            item_carrinho.quantidade += 1
            item_carrinho.save()

    return redirect('carrinho')
