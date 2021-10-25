from jobs.models import Skill
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Count

class TopSkillApiView(APIView):
    """
    This class handles the request for top 5 skills by times.
    """

    def get(self, request):
        """
        This method returns the top skills list
        """
        topskills = Skill.objects.values('title').annotate(count=Count('title')).order_by('-count')[:5]
        if topskills:
            return Response(topskills)
        return Response({"message": "No jobs to show yet"})
