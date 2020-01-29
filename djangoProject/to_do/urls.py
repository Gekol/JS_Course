from django.urls import path
from . import views
urlpatterns = [
    path("entries", views.EntryView.as_view()),
    path("entries/<int:pk>", views.EntryView.as_view()),

]