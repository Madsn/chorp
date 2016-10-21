from graphene_django import DjangoObjectType
from graphene_django.debug import DjangoDebug
import graphene

class User(DjangoObjectType):
    class Meta:
        model = UserModel

class Query(graphene.ObjectType):
    users = graphene.List(User)

    @graphene.resolve_only_args
    def resolve_users(self):
        return UserModel.objects.all()

schema = graphene.Schema(query=Query)