from django.db import models


class Pet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50, blank=False, default='No-name')

    class Meta:
        ordering = ('name','created',)
