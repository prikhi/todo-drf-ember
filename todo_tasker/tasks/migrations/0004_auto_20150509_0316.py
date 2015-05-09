# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_task_is_finished'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='favorite',
            new_name='is_favorite',
        ),
    ]
