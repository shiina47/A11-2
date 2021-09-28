from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.conf import settings


# def upload_avatar_path(instance, filename):
#     ext = filename.split('.')[-1]
#     return '/'.join(['avatars', str(instance.userProfile.id)+str(instance.nickName)+str(".")+str(ext)])

# def upload_post_path(instance, filename):
#     ext = filename.split('.')[-1]
#     return '/'.join(['posts', str(instance.userPost.id)+str(instance.title)+str(".")+str(ext)])

def upload_recipe_path(instance, filename):
    ext = filename.split('.')[-1]
    return '/'.join('resipe', str(instance.user_id.id)+str(instance.title)+str(".")+str(ext))


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('email is must')

        user = self.model(email=self.normalize_email(email))  # emailの正規化
        user.set_password(password)  # passwordのハッシュ化
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using= self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email

class Recipe(models.Model):

    title = models.CharField(max_length=50)
    cost = models.CharField(max_length=30)
    minutes = models.PositiveIntegerField()
    image = models.ImageField(blank=True, null=True, upload_to=upload_recipe_path)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Process(models.Model):

    order = models.PositiveIntegerField()
    how_to = models.TextField(max_length=400)
    recipe_id = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return self.order

class Material(models.Model):

    name = models.CharField(max_length=50)
    amount = models.CharField(max_length=20)
    recipe_id = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return self.name