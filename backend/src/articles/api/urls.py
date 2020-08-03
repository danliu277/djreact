from django.urls import path

from .views import ArticlesListView, ArticleDetailView

urlpatterns = [
    path('', ArticlesListView.as_view()),
    path('<pk>', ArticleDetailView.as_view())
]
