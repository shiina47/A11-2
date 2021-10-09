from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from api.views import CreateUserView, RecipeViewSet, ProcessViewSet, MaterialViewSet, MyPageViewSet

app_name = 'user'

router = DefaultRouter()
router.register('recipe', RecipeViewSet, basename='recipe')
router.register('process', ProcessViewSet, basename='process')
router.register('material', MaterialViewSet, basename='material')
router.register('mypage', MyPageViewSet, basename='mypage')


urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='register'),
    path('', include(router.urls)),
]
