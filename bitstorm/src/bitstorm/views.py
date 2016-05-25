from django.views import generic


class HomePage(generic.TemplateView):
    template_name = "home.html"


class AboutPage(generic.TemplateView):
    template_name = "about.html"

class VisualizePage(generic.TemplateView):
    template_name = "visualize.html"
