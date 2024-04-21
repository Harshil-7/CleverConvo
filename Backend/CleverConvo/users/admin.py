from django.contrib import admin
from users.models import UserAccount
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserModelAdmin(BaseUserAdmin):
    list_display=('id','email','first_name','last_name','phone_number','is_active','is_staff','is_superuser','created_at','updated_at')
    list_filter = ('is_superuser',)
    fieldsets = (
        ('User Credentials',{'fields':('email','password')}),
        ('Personal Information',{'fields':('first_name','last_name','phone_number')}),
        ('Permissions',{'fields':('is_active','is_staff','is_superuser')}),
    )

    add_fieldsets = (
        (None,{
            'classes':('wide',),
            'fields':('email','first_name','password1','password2'),
        })
    )

    search_fields = ('email',)
    ordering = ('email','id')
    filter_horizontal = ()


admin.site.register(UserAccount,UserModelAdmin)
