from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer, RecipeSerializer, ProcessSerializer, MaterialSerializer, MyPageSerializer
from .models import Recipe, Process, Material, MyPage


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class MyProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    permission_classes = (AllowAny,)
    filter_fields = ('user', 'liked',)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MyPageViewSet(viewsets.ModelViewSet):
    queryset = MyPage.objects.all()
    serializer_class = MyPageSerializer

    def perform_create(self, serializer):
        serializer.save(userPage=self.request.user)


class ProcessViewSet(viewsets.ModelViewSet):
    queryset = Process.objects.all().order_by('order')
    serializer_class = ProcessSerializer


class MaterialViewSet(viewsets.ModelViewSet):
    queryset = Material.objects.all()
    serializer_class = MaterialSerializer
