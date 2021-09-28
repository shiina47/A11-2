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

    created_on = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = Recipe
        fields = ('id', 'title', 'minutes', 'image', 'user_id', 'created_at', 'updated_at')
        extra_kwargs = {'user_id': {'read_only': True}}


class ProcessSerializer(serializers.ModelSerializer):

    created_on = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = Process
        fields = ('id', 'order', 'how_to', 'recipe_id')
        extra_kwargs = {'recipe_id': {'read_only': True}}


class MaterialSerializer(serializers.ModelSerializer):

    created_on = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = Material
        fields = ('id', 'name', 'amount', 'recipe_id')
        extra_kwargs = {'recipe_id': {'read_only': True}}
