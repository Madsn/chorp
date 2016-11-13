from django.test import TestCase
from chorp_models.models import Task
from chorp_rest_api.serializers import TaskSerializer


def get_model_fields(model):
    return model._meta.fields


def get_name_from_serializer_field(field):
    return str(field).split('.')[2]


class SerializersTestCase(TestCase):

    def test_task_serializer_contains_all_fields(self):
        serializer = TaskSerializer()
        for field in get_model_fields(Task()):
            # chorp_models.Task.id etc.
            field_name = get_name_from_serializer_field(field)
            # if field_name not in ['id', 'created']:
            self.assertIsNotNone(serializer.fields[field_name])
