from django.contrib import admin
from .models import Task, Account, AccountTransaction


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    pass


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    pass


@admin.register(AccountTransaction)
class AccountTransactionAdmin(admin.ModelAdmin):
    pass

