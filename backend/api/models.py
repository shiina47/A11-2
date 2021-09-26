from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
# from django.conf import settings


# def upload_avatar_path(instance, filename):
#     ext = filename.split('.')[-1]
#     return '/'.join(['avatars', str(instance.userProfile.id)+str(instance.nickName)+str(".")+str(ext)])

# def upload_post_path(instance, filename):
#     ext = filename.split('.')[-1]
#     return '/'.join(['posts', str(instance.userPost.id)+str(instance.title)+str(".")+str(ext)])

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
    pass
