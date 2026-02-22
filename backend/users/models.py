from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username
    
    
class Job(models.Model):
    job_choices=(
        ("FullTime","FullTime"),
        ("Hybrid","Hybrid"),
        ("WFH","WFH")   
    )
    title=models.CharField(max_length=100,null=True,blank=True)
    description=models.TextField()
    logo = models.ImageField(upload_to="job_logos/")
    created_at=models.DateTimeField(auto_now_add=True)
    company_name=models.TextField()
    location=models.TextField()
    salary=models.CharField(max_length=100,null=True,blank=True)
    job_type=models.CharField(max_length=100,default="FullTime",choices=job_choices)
    
    
    def __str__(self):
        return self.title
    
class ApplicationForms(models.Model):
    fullname=models.CharField(max_length=100)
    graduation=models.CharField(max_length=100,null=True,blank=True)
    passed_out_year=models.CharField(max_length=100,null=True,blank=True)
    phone=models.CharField(max_length=100,null=True,blank=True)
    email=models.EmailField(unique=True)
    resume = models.FileField(upload_to="resumes/")
    collage_name=models.TextField(null=True,blank=True)
    fresher_experience=models.CharField(max_length=100,null=True,blank=True)
    image = models.ImageField(upload_to="applicant_images/")
    applied_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.fullname