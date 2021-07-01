from django.shortcuts import render
from django.http import HttpResponse
from .models import application


# Create your views here.

def home(request):
    if request.method == 'GET':
        return render(request, "home.html")
    
    else:

        return render(request, "home.html")
        


def index(request):

    if request.method == 'GET':

        return render(request, "index.html")

    else:

        app = application.objects.all()
        return render(request, "index.html",{'app': app})

def register(request):
    if request.method == 'GET':
        return render(request, "register.html")        


def randomGenerate(request): 
    
    all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

    alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    numbers = "0123456789"
    operators = "!@#$%^&*()"

    alphaNumerator = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890"
    alphaOperator = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP!@#$%^&*()"
    numberOperator = "1234567890!@#$%^&*()"

    salphaCheck = request.POST.getlist('checks')


    password = ""



    

    

        
        
        
    




    

