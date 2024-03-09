from django.db import models

class KMLData(models.Model):
    kml_file = models.FileField(upload_to='kml_files/')




class KMLFile(models.Model):
    file_url = models.URLField()
