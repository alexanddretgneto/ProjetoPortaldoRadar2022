from django.shortcuts import render
from googleapiclient.discovery import build

from django.views.decorators.cache import cache_page

class YouTubeService:
    def __init__(self, api_key):
        self.api_key = api_key
        self.youtube = build('youtube', 'v3', developerKey=api_key)

    def get_channel_videos(self, channel_id, max_results=12, page_token=None):
        request = self.youtube.search().list(
            part='snippet',
            channelId=channel_id,
            maxResults=max_results,
            pageToken=page_token
        )
        response = request.execute()
        return response
    
@cache_page(60 * 15)
def video_list(request):
    api_key = 'AIzaSyD6-0KLwBlxfdxnKAzO7ktq2OMFzSwKoe8'
    channel_id = 'UC2aWDKKJwycJ6x7Ow4uhmoA'

    youtube_service = YouTubeService(api_key)
    page_token = request.GET.get('page_token')
    videos_response = youtube_service.get_channel_videos(channel_id, page_token=page_token)
    
    videos = videos_response.get('items', [])
    next_page_token = videos_response.get('nextPageToken')
    prev_page_token = videos_response.get('prevPageToken')

    videos_grouped = [videos[i:i+3] for i in range(0, len(videos), 3)]

    # Calcular o número total de páginas
    num_pages = (len(videos) + 2) // 3  # Arredonda para cima

    context = {
        'videos_grouped': videos_grouped,
        'next_page_token': next_page_token,
        'prev_page_token': prev_page_token,
    }

    return render(request, 'videos_youtube/videos.html', context)

@cache_page(60 * 15)
def video_detail(request, video_id):
    context = {
        'video_id': video_id,
    }
    return render(request, 'videos_youtube/video_detail.html', context)
