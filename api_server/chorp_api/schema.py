from graphene import ObjectType, relay, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from django.contrib.auth.models import User
import graphene
from .models import Booking, Pet, PetType
from graphene_django.debug import DjangoDebug


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        interfaces = (relay.Node,)
        filter_fields = ['id', 'username']


class BookingNode(DjangoObjectType):
    class Meta:
        model = Booking
        interfaces = (relay.Node, )


class PetNode(DjangoObjectType):
    class Meta:
        model = Pet
        interfaces = (relay.Node, )


class PetTypeNode(DjangoObjectType):
    class Meta:
        model = PetType
        interfaces = (relay.Node, )
        filter_fields = ['name']
        filter_order_by = ['name']


class UserQueries(AbstractType):
    user = relay.Node.Field(UserNode)
    users = DjangoFilterConnectionField(UserNode)

    @staticmethod
    def resolve_users(self, args, context, info):
        if not context.user.is_authenticated():
            return User.objects.none()
        elif context.user.has_perm('chorp.admin'):
            return User.objects.all()
        else:
            return User.objects.filter(id=context.user.id)


class PetQueries(AbstractType):
    pet_type = relay.Node.Field(PetTypeNode)
    pet_types = DjangoFilterConnectionField(PetTypeNode)

    pet = relay.Node.Field(PetNode)
    pets = DjangoFilterConnectionField(PetNode)


class BookingQueries(AbstractType):
    booking = relay.Node.Field(BookingNode)
    bookings = DjangoFilterConnectionField(BookingNode)


class Queries(UserQueries, PetQueries, BookingQueries, ObjectType):
    node = relay.Node.Field()
    debug = graphene.Field(DjangoDebug, name='__debug')


schema = graphene.Schema(query=Queries)

'''
Sample queries.

- Query
{
  petTypes {
    edges {
      node {
        id
        name
      }
    }
  }
}
- Result
{
  "data": {
    "petTypes": {
      "edges": [
        {
          "node": {
            "id": "UGV0VHlwZU5vZGU6Mg==",
            "name": "Cat"
          }
        },
        {
          "node": {
            "id": "UGV0VHlwZU5vZGU6MQ==",
            "name": "Dog"
          }
        }
      ]
    }
  }
}

- Query
{
  petType(id: "UGV0VHlwZU5vZGU6Mg==") {
    name
  }
}
- Result
{
  "data": {
    "petType": {
      "name": "Cat"
    }
  }
}
'''
