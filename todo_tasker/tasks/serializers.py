from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    """Serialize Tasks into JSON"""
    class Meta(object):
        """Setup the serializer"""
        model = Task
        fields = ('id', 'title', 'description', 'is_favorite', 'is_finished')
