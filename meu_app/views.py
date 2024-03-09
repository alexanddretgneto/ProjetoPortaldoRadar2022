
import os
from django.shortcuts import render



def voila_view(request):
    return render(request, 'Untitled.html')


# views.py
from django.shortcuts import render, redirect
from .forms import RespostaForm

def prova_view(request):
    if request.method == 'POST':
        form = RespostaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('sucesso')
    else:
        form = RespostaForm()
    return render(request, 'prova.html', {'form': form})

def sucesso(request):
    return render(request, 'sucesso.html') 

def notebook_view(request):
    # Caminho para o arquivo HTML do notebook
    notebook_path = os.path.join(os.path.dirname(__file__), 'templates/lab2_jupyter_r_basics (10).html')

    # Lendo o conteúdo do arquivo HTML
    with open(notebook_path, 'r') as f:
        notebook_content = f.read()

    # Renderizando o HTML do notebook
    return render(request, 'lab2_jupyter_r_basics (10).html', {'notebook_content': notebook_content})


