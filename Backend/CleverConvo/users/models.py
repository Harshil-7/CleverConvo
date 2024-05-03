from django.db import models
from django.contrib.auth.models import(
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin
)
from django.core.validators import MinLengthValidator, MaxLengthValidator
from cloudinary.models import CloudinaryField


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None,**kwargs):
   
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            email=email,
            **kwargs
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None,**kwargs):
       
        user = self.create_user(
            email,
            password=password,
            **kwargs
        )
        user.is_staff=True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser,PermissionsMixin):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(
        max_length=255,
        unique=True,
    )
    phone_number = models.CharField(
        validators=[
            MinLengthValidator(10, message="Phone number must be 10 digits long."),
            MaxLengthValidator(10, message="Phone number must be 10 digits long.")
        ],
        max_length=10,
    )
    profile_pic = CloudinaryField('image', default=None)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name','phone_number','profile_pic']

    def __str__(self):
        return self.email
