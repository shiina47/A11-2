from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Recipe, Process, Material, MyPage


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        return user

class MyPageSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = MyPage
        fields = '__all__'
        extra_kwargs = {'userPage': {'read_only': True}}

class RecipeSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)
    user = UserSerializer()

    class Meta:
        model = Recipe
        fields = '__all__'
        extra_kwargs = {'user': {'read_only': True}}


class ProcessSerializer(serializers.ModelSerializer):

    recipe = RecipeSerializer()

    class Meta:
        model = Process
        fields = ('id', 'order', 'how_to', 'recipe')


class MaterialSerializer(serializers.ModelSerializer):

    recipe = RecipeSerializer()

    class Meta:
        model = Material
        fields = ('id', 'name', 'amount', 'recipe')
