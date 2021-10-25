from django.contrib import admin
from jobs.models import Job, Skill

models = [Job, Skill]
admin.site.register(models)

