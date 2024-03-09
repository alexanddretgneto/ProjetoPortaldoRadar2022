# forms.py

from django import forms
from .models import Resposta

class RespostaForm(forms.ModelForm):
    class Meta:
        model = Resposta
        fields = ['nome', 'telefone', 'endereco']
