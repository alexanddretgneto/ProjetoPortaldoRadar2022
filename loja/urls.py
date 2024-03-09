from django.urls import path
from . import views

urlpatterns = [
    path('listar_produtos/', views.listar_produtos, name='listar_produtos'),
    path('<int:produto_id>/', views.detalhes_produto, name='detalhes_produto'),
    path('carrinho/', views.carrinho, name='carrinho'),
    path('adicionar_carrinho/<int:produto_id>/', views.adicionar_carrinho, name='adicionar_carrinho'),
    path('', views.listar_produtos, name='listar_produtos'),
    
]
