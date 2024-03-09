from django.urls import path
from . import views

urlpatterns = [
    path('', views.video_list, name='video_list'),
    path('<str:video_id>/', views.video_detail, name='video_detail'),

    # Other URL patterns
]
