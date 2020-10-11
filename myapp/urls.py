from django.urls import path, include

from .views import (
    IndexView,
)

app_name = 'MyCV'

urlpatterns = [
    path('', IndexView.as_view(), name='home'),
]
