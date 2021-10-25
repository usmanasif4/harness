from django.core.exceptions import ValidationError
from django.http import JsonResponse
from jobs.models import Job, Skill
from jobs.serializers import JobSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class JobListApiView(APIView):
    """
    This class handles the request for jobs list
    """

    def get(self, request):
        """
        This method returns the jobs list
        """
        jobs = Job.objects.all()
        if jobs:
            serialized_jobs = JobSerializer(jobs, many=True)
            return Response({"jobs": serialized_jobs.data})
        return Response({"messsage": "No jobs to show"})

    def post(self, request):
        """
        This method handles the functionality of creating new job
        """

        skills = request.data.get("skill")
        job_serializer = JobSerializer(data=request.data)
        if not job_serializer.is_valid():
            return Response(job_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        job = job_serializer.save()
        try:
            for skill in skills:
                Skill.objects.create(job=job, title=skill.get("title").title())
        except ValidationError as err:
            return JsonResponse({"validation errors": err.message_dict}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "Job created successfully", "job": job_serializer.data}, status=status.HTTP_201_CREATED)
