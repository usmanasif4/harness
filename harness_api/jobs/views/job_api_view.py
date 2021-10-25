# pylint: disable=no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from jobs.models import Job
from jobs.serializers import JobSerializer


class JobApiView(APIView):
    """
    This class handles the actions about jobs
    """

    def get(self, request, **kwargs):
        """
        This method returns the job details
        """
        job_id = kwargs["pk"]
        if job_id:
            try:
                job = Job.objects.get(id=job_id)
                serialzed_job = JobSerializer(job)

                return Response(serialzed_job.data)
            except Job.DoesNotExist:
                return Response({"message": "no Job againt given id"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"message": "Please enter an ID to proceed"}, status=status.HTTP_400_BAD_REQUEST)
