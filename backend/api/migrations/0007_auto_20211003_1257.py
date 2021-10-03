# Generated by Django 3.2.7 on 2021-10-03 03:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_mypage'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='amount',
            field=models.PositiveIntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='material',
            name='recipe',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='material', to='api.recipe'),
        ),
        migrations.AlterField(
            model_name='process',
            name='recipe',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='process', to='api.recipe'),
        ),
    ]