from django.shortcuts import render, redirect
from twilio.rest import Client

# Create your views here.


def twilio(request):

    account_sid = 'AC3567728214ed3f09c1ed886ca1180f7a'
    auth_token = 'e35baceca20f572a017a2f16b198ecae'
    my_twilio = '+12019924270'
    my_cell = '+919526213171' 
    
    if request.method == 'POST':

        
        twilioMessage = request.POST['twilio-text']

        client = Client(account_sid, auth_token) 
        my_message = twilioMessage

        message = client.messages.create( 

            from_=my_twilio,
            to=my_cell,
            body=my_message
        )
        
        print(message.sid)
        return redirect('home')

    else:
        return redirect('home')




    