from django.db import models
from django.contrib.auth.models import User
import datetime


def date_str(o):
    DATE_FORMAT = "%Y-%m-%d"
    TIME_FORMAT = "%H:%M:%S"

    if isinstance(o, datetime.date):
        return o.strftime(DATE_FORMAT)
    elif isinstance(o, datetime.time):
        return o.strftime(TIME_FORMAT)
    elif isinstance(o, datetime.datetime):
        return o.strftime("%s %s" % (DATE_FORMAT, TIME_FORMAT))


class PetType(models.Model):
    name = models.CharField(max_length=30, blank=False, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)


class Pet(models.Model):
    name = models.CharField(max_length=50, blank=False, default='No-name')
    owner = models.ForeignKey
    type = models.ForeignKey(PetType, null=True, on_delete=models.SET_NULL)
    created = models.DateTimeField()

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)


class Booking(models.Model):
    pets = models.ManyToManyField(Pet)
    pet_owner = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    details = models.CharField(max_length=500, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    checkin_date = models.DateField(auto_now_add=True)
    checkout_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return ''.join([self.pet_owner.username, ': ',
                        date_str(self.checkin_date), ' - ', date_str(self.checkout_date)])

    class Meta:
        ordering = ('checkin_date', 'checkout_date',)

