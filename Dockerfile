# Use uma imagem base que inclua Python
FROM python:3.10

# Instale as dependências do sistema necessárias para o PulseAudio e o mpg321
RUN apt-get update && apt-get install -y \
    pulseaudio \
    alsa-utils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Instale as dependências Python do seu projeto Django
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Instale o módulo pykml
RUN pip install --no-cache-dir pykml

# Instale o módulo gtts (Google Text-to-Speech)
RUN pip install --no-cache-dir gtts

# Copie o código do seu projeto Django para o contêiner
COPY . /app/

# Exponha a porta que o seu aplicativo Django usa para acessar o PulseAudio
EXPOSE 4713

# Comando para iniciar o servidor PulseAudio e o seu aplicativo Django
CMD pulseaudio --start && python manage.py runserver 0.0.0.0:8000
