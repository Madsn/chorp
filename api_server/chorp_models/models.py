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


class Task(models.Model):
    status_types = (
        (0, 'Todo'),
        (1, 'Doing'),
        (2, 'Done')
    )

    title = models.CharField(max_length=50, blank=False, null=False)
    description = models.CharField(max_length=500, blank=True)
    status = models.IntegerField(null=False, default=0, choices=status_types)
    assignee = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('due_date', 'created')