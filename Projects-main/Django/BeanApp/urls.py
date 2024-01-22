from django.urls import path
from BeanApp.views import *

app_name = "BeanApp"

urlpatterns = [
    path("", index, name ="index")
]