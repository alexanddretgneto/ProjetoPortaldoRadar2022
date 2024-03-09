from django.urls import path
from .views import notebook_view, voila_view, prova_view, sucesso

urlpatterns = [
    path('v/', voila_view, name='voila_view'),
    path('n/', notebook_view, name='notebook_view'),
    path('', prova_view, name='prova_view'),
    path('sucesso/', sucesso, name='sucesso'),
    
]
