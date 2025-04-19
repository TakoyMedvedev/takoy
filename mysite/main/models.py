from django.db import models

class HeroBlock(models.Model):
    '''Модель Hero'''
    title = models.CharField('Заголовок блока', max_length=300)
    description = models.TextField('Текст Заголовка')
    img = models.ImageField('Изображение', upload_to='static/img/')

    def __str__(self):
        return f'{self.title}'
    
    class Meta:
        
        verbose_name_plural = 'Главный блок'
        

