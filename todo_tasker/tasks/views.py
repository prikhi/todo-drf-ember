from rest_framework import viewsets

from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """API endpoint allowing tasks to be viewed or edited."""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
