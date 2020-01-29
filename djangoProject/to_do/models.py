from django.db import models
# from djangotoolbox.
# Create your models here.
class Entry(models.Model):
    class Meta:
        verbose_name_plural = "Entries"
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title