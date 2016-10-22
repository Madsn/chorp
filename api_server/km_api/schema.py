from graphene import ObjectType, relay
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


class Query(ObjectType):
    user = relay.Node.Field(UserNode)
    users = DjangoFilterConnectionField(UserNode)
    pet_type = relay.Node.Field(PetTypeNode)
    pet_types = DjangoFilterConnectionField(PetTypeNode)
    pet = relay.Node.Field(PetNode)
    pets = DjangoFilterConnectionField(PetNode)
    booking = relay.Node.Field(BookingNode)
    bookings = DjangoFilterConnectionField(BookingNode)
    node = relay.Node.Field()
    debug = graphene.Field(DjangoDebug, name='__debug')


schema = graphene.Schema(query=Query)

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