from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000, blank=True)
    is_favorite = models.BooleanField(default=False)
    is_finished = models.BooleanField(default=False)

    def __unicode__(self):
        return '{} {}'.format(self.title, self.description)
