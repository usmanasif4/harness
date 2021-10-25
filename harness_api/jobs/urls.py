from django.urls import path
from . import views

urlpatterns = [
    path("jobs", views.JobListApiView.as_view(), name="job_list"),
    path("job/<int:pk>", views.JobApiView.as_view(), name="job"),
    path("create-job", views.JobListApiView.as_view(), name="create_job"),
    path("topskills", views.TopSkillApiView.as_view(), name="top_skills"),
]
