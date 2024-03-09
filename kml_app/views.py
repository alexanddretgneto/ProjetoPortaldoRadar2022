from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import KMLForm
from pykml import parser


def parse_kml(kml_file):
    placemarks = []
    doc = parser.parse(kml_file)
    for placemark in doc.findall('.//{http://www.opengis.net/kml/2.2}Placemark'):
        placemarks.append(placemark.name.text)
    return placemarks


def kml_viewer(request):
    if request.method == 'POST':
        kml_file = request.FILES['kml_file']
        placemarks = parse_kml(kml_file)
        return render(request, 'kml_app/kml_viewer.html', {'placemarks': placemarks})
    return render(request, 'kml_app/kml_form.html')
