from django.views.decorators.csrf import csrf_exempt
from chorp_models.models import Task, Account, AccountTransaction
from rest_framework import viewsets
from .serializers import TaskSerializer, AccountSerializer, AccountTransactionSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super(TaskViewSet, self).dispatch(request)


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super(AccountViewSet, self).dispatch(request)


class AccountTransactionViewSet(viewsets.ModelViewSet):
    queryset = AccountTransaction.objects.all()
    serializer_class = AccountTransactionSerializer

    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super(AccountTransactionViewSet, self).dispatch(request)
