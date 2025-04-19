from django.shortcuts import render
from django.views import View
from blog.models import Post
from .models import HeroBlock

def home(request):
    posts = Post.objects.all()
    hero = HeroBlock.objects.first()

    context = {
        'posts': posts,
        'HeroBlock': hero
    }

    


    return render(request, 'main/index.html', context)

def blog(request):
    return render(request, 'main/blog.html')

class PostDetail(View):
    def get(self, request, pk):
        post = Post.objects.get(id=pk)
        return render(request, 'main/blog_detail.html', {'post': post})



