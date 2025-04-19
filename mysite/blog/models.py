from django.db import models

class Post(models.Model):
    '''Модель статьи'''
    title = models.CharField('Заголовок статьи', max_length=150)
    description = models.TextField('Текст статьи')
    author = models.CharField('Автор', max_length=150)
    data = models.DateField('Дата публикации')
    img = models.ImageField('Изображение', upload_to='static/img/')

    def __str__(self):
        return f'{self.title} {self.author}'
    
    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
