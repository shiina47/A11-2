from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, RecipeSerializer, ProcessSerializer, MaterialSerializer, MyPageSerializer
from .models import Recipe, Process, Material, MyPage


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    permission_classes = (AllowAny,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class MyPageViewSet(viewsets.ModelViewSet):
    queryset = MyPage.objects.all()
    serializer_class = MyPageSerializer

    def perform_create(self, serializer):
        serializer.save(userPage=self.request.user)

class ProcessViewSet(viewsets.ModelViewSet):
    queryset = Process.objects.all()
    serializer_class = ProcessSerializer

class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
