from django import forms

class KMLForm(forms.Form):
    kml_file = forms.FileField(label='Upload KML File')

