# pylint: disable=too-few-public-methods
from rest_framework import serializers
from jobs.models import Job, Skill
from .skill_serializer import SkillSerializer


class JobSerializer(serializers.ModelSerializer):
    """
    This class serializes Post model.
    """
    skill = SkillSerializer(many=True, source="skills")

    class Meta:
        model = Job
        fields = ("id", "title", "description", "skill")

    def create(self, validated_data):
        title = validated_data.get("title")
        description = validated_data.get("description")
        return Job.objects.create(title=title, description=description)
