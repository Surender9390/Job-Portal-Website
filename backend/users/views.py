from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

from users.serializers import (
    RegisterSerializer,
    ProfileSerializer,
    JobSerializer,
    FormSerializer
)

from users.models import Job, ApplicationForms


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class ProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class JobPost(generics.CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]


class JobList(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class JobSingle(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class UpdateJob(generics.UpdateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]


class DeleteJob(generics.DestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticated]


class JobApplicationForm(generics.CreateAPIView):
    queryset = ApplicationForms.objects.all()
    serializer_class = FormSerializer

