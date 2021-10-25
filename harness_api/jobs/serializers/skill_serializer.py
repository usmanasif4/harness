# pylint: disable=too-few-public-methods
from rest_framework import serializers
from jobs.models import Skill


class SkillSerializer(serializers.ModelSerializer):
    """
    This class serializes Post model.
    """

    class Meta:
        model = Skill
        fields = ("title", )

    def create(self, validated_data):
        return Skill.objects.create(job=validated_data.get("job"), title="skill")
