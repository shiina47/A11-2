from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from api.views import CreateUserView, RecipeViewSet

app_name = 'user'

router = DefaultRouter()
router.register('recipe', RecipeViewSet, basename='recipe')

urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='register'),
    path('', include(router.urls)),
]
