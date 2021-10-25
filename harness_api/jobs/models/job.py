from django.db import models
from django.core.exceptions import ValidationError


class Job(models.Model):
    """
    Schema for jobs
    """

    def validate_all_spaces(value):
        if value.isspace():
            raise ValidationError(f"Value '{value}' is not a valid choice.")

    title = models.CharField(max_length=100)
    description = models.TextField()

    def save(self, *args, **kwargs):
        self.full_clean()
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.title
