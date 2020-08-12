from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api', ArticleViewSet, basename='articles')
urlpatterns = router.urls

# from django.urls import path

# from .views import (
#     ArticleListView, 
#     ArticleDetailView,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDestroyView,
# )

# urlpatterns = [
    # path('articles/', ArticleListView.as_view()),
    # path('articles/create/', ArticleCreateView.as_view()),
    # path('articles/<pk>', ArticleDetailView.as_view()),
    # path('articles/<pk>/update/', ArticleUpdateView.as_view()),
    # path('articles/<pk>/delete/', ArticleDestroyView.as_view()),
# ]
