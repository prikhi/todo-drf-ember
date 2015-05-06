from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    favorite = models.BooleanField(default=False)

    def __unicode__(self):
        return '{} {}'.format(self.title, self.description)
