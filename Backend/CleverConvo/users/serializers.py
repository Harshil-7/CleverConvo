from djoser.serializers import UserCreateSerializer
from users.models import UserAccount

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model=UserAccount
        fields=('id','email','first_name','last_name','phone_number','password','profile_pic')