from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Recipe, Process, Material


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = get_user_model().objects.create_user(**validated_data)
        return user


class RecipeSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = Recipe
        fields = '__all__'
        extra_kwargs = {'user_id': {'read_only': True}}


class ProcessSerializer(serializers.ModelSerializer):

    class Meta:
        model = Process
        fields = ('id', 'order', 'how_to', 'recipe_id')
        extra_kwargs = {'recipe_id': {'read_only': True}}


class MaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Material
        fields = ('id', 'name', 'amount', 'recipe_id')
        extra_kwargs = {'recipe_id': {'read_only': True}}
