from chorp_models.models import Task, Account, AccountTransaction
from rest_framework import serializers


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'description', 'status', 'assignee', 'due_date', 'created')


class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ('id', 'balance', 'owner')


class AccountTransactionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AccountTransaction
        fields = ('id', 'account', 'transaction_time', 'amount')

