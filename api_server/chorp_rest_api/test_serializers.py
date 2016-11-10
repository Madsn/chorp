from django.test import TestCase
from chorp_models.models import Task
from chorp_rest_api.serializers import TaskSerializer


class SerializersTestCase(TestCase):

    def test_task_serializer_contains_all_fields(self):
        serializer = TaskSerializer()
        for f in Task()._meta.fields:
            # chorp_models.Task.id etc.
            field_name = str(f).split('.')[2]
            if field_name not in ['id', 'created']:
                self.assertIsNotNone(serializer.fields[field_name])
