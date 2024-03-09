from django.http import HttpResponse
from django.shortcuts import render
from gtts import gTTS
import pygame
from io import BytesIO

def text_to_speech_view(request):
    if request.method == 'POST':
        texto = request.POST.get('texto')

        # Verifica se o texto foi fornecido
        if texto:
            # Criar um objeto gTTS
            tts = gTTS(text=texto, lang='pt-br')  # 'pt-br' para português do Brasil
            
            # Salvar o áudio em um objeto BytesIO
            audio_bytes = BytesIO()
            tts.write_to_fp(audio_bytes)
            audio_bytes.seek(0)

            # Inicializar o mixer do pygame
            pygame.mixer.init()

            # Carregar o áudio no mixer do pygame
            pygame.mixer.music.load(audio_bytes)

            # Reproduzir o áudio
            pygame.mixer.music.play()

            # Esperar até que a reprodução do áudio seja concluída
            while pygame.mixer.music.get_busy():
                pygame.time.Clock().tick(10)

            return HttpResponse("Áudio reproduzido com sucesso!")

    return render(request, 'text_to_speech.html')
