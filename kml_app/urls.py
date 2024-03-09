from django.urls import path
from . import views

urlpatterns = [
     path('', views.kml_viewer, name='kml_viewer'),
     
]
