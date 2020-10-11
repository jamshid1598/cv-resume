from django.shortcuts import render, redirect, HttpResponse, HttpResponseRedirect
from django.views import View
# Create your views here.


class IndexView(View):
    context={}
    template_name = 'base.html'
    def get(self, request, *args, **kwargs):
        return render(
            request,
            self.template_name,
            self.context
        )
