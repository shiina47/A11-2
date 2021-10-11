from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from api.views import CreateUserView, RecipeViewSet, ProcessViewSet, MaterialViewSet, MyPageViewSet, MyProfileView

app_name = 'user'

router = DefaultRouter()
router.register('recipe', RecipeViewSet, basename='recipe')
router.register('process', ProcessViewSet, basename='process')
router.register('material', MaterialViewSet, basename='material')
router.register('mypage', MyPageViewSet, basename='mypage')


urlpatterns = [
    path('myself/', MyProfileView.as_view(), name="myself"),
    path('register/', views.CreateUserView.as_view(), name='register'),
    path('', include(router.urls)),
]
