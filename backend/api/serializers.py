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

    class Meta:
        model = MyPage
        fields = ('name', 'image', 'userPage')
        extra_kwargs = {'userPage': {'read_only': True}}


class ProcessSerializer(serializers.ModelSerializer):

    class Meta:
        model = Process
        fields = ('id', 'order', 'how_to', 'recipe')


class MaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Material
        fields = ('id', 'name', 'amount', 'recipe')


class RecipeSerializer(serializers.ModelSerializer):

    created_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)
    updated_at = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    material = serializers.StringRelatedField(many=True)
    process = ProcessSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe

        extra_kwargs = {'user': {'read_only': True}}
        fields = ('id', 'title', 'cost', 'amount', 'minutes', 'image', 'user', 'liked', 'isDisplayed',
                  'created_at', 'updated_at', 'material', 'process')

    def create(self, validated_data):
        processes_data = validated_data.pop('process')
        recipe = Recipe.objects.create(**validated_data)
        for process_data in processes_data:
            Process.objects.create(album=album, **process_data)
        return recipe
