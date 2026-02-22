from django.contrib import admin


from django.contrib import admin
from users.models import Profile,Job,ApplicationForms

# Register your models here.

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display=('user',)
    
@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display=("title","company_name","location","job_type","created_at")
    list_filter=("job_type","location")
    search_fields=("title","company_name","location")

@admin.register(ApplicationForms)
class ApplicationFormAdmin(admin.ModelAdmin):
    list_display=("fullname","email","graduation","applied_at")
    search_fields=("fullname","email","collage_name")

