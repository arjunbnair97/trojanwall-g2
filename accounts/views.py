from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages


# Create your views here

def login(request):
    if request.method == 'POST':

        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username,password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('index')
        else:
            messages.info(request, 'Username or Passowrd incorrect.')
            return redirect('login')

    else:
        return render(request, "login.html") 




def register(request):

    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1==password2:
            if User.objects.filter(username=username).exists():
                #return render_to_response('register.html', message='Username already exists!')
                messages.info(request, 'Username already exists!')
                return redirect('register')
            
            elif User.objects.filter(email=email).exists():
                #return render_to_response('register.html', message='Email ID already exists!')
                messages.info(request, 'Email ID already exists!')
                return redirect('register')
            else:
                user = User.objects.create_user(username=username, first_name=first_name, last_name=last_name, password=password1, email=email)
                user.save();    
                print('User Created')
                return redirect('home')
        else:
            #return render_to_response('register.html', message='Passowrds not matching!')
            messages.info(request, 'Passowrds not matching!')
            return redirect('register')

        return redirect('home')
    
    else:
        return render(request, 'register.html')

def logout(request):
    auth.logout(request)
    return redirect('login')