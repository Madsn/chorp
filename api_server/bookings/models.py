from django.db import models


class Booking(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    checkin_date = models.DateField()

    class Meta:
        ordering = ('checkin_date','created',)
