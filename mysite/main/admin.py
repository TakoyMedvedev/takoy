from django.contrib import admin
from .models import HeroBlock

@admin.register(HeroBlock)
class HeroBlockAdmin(admin.ModelAdmin):
    list_display = ('title',)
