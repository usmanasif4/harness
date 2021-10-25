from django.db import models
from .job import Job
from django.core.exceptions import ValidationError

class Skill(models.Model):
    """
    Schema for Skill
    """
    def validate_all_spaces(value):
        if value.isspace():
            raise ValidationError(f"Value '{value}' is not a valid choice.")

    title = models.CharField(max_length=100)
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="skills")

    def save(self, *args, **kwargs):
        self.full_clean()
        return super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title}"
