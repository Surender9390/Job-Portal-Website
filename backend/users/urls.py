from django.urls import path
from users.views import (
    RegisterView,
    ProfileView,
    JobPost,
    JobList,
    JobSingle,
    UpdateJob,
    DeleteJob,
    JobApplicationForm,
)

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("profile/", ProfileView.as_view()),

    path("jobs/", JobList.as_view()),
    path("jobs/create/", JobPost.as_view()),
    path("jobs/<int:pk>/", JobSingle.as_view()),
    path("jobs/update/<int:pk>/", UpdateJob.as_view()),
    path("jobs/delete/<int:pk>/", DeleteJob.as_view()),

    path("apply/", JobApplicationForm.as_view()),
]
