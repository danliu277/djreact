from django.urls import path

from .views import (
    ArticleListView, 
    ArticleDetailView,
    ArticleCreateView
)

urlpatterns = [
    path('articles/', ArticleListView.as_view()),
    path('articles/create/', ArticleCreateView.as_view()),
    path('articles/<pk>', ArticleDetailView.as_view()),
]
