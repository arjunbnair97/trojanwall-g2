from django.db import models

# Create your models here.

class application(models.Model):
    year = models.CharField(max_length=100)
    version = models.CharField(max_length=100)
 