from django.views.decorators.csrf import csrf_exempt
from chorp_models.models import Task
from rest_framework import viewsets
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super(TaskViewSet, self).dispatch(request)

