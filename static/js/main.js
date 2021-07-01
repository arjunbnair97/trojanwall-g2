function getValue(length) 
{
    var all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP!@#$%^&*()-+<>1234567890";
    
    var operatorsValue = "!@#$%^&*()-+<>";
    var alphaValue = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP";
    var numeratorsValue = "1234567890";
    
    var alphaNumerator = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890"
    var alphaOperator = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP!@#$%^&*()-+<>"
    var numberOperator = "1234567890!@#$%^&*()-+<>"

    var pass = "";
    
        //All Characters 
        if (document.getElementById('alpha').checked == true) 
        {
            if (document.getElementById('numbers').checked == true )
            {
                if (document.getElementById('operators').checked == true )
                {
                    
                    for (var x = 0; x < length; x++) 
                    {
                        var i = Math.floor(Math.random() * all.length);
                        pass += all.charAt(i);
                
                    }
                    return pass;
                }
            }
        } 




       //None Selected
        if (document.getElementById('alpha').checked != true) 
        {
            if (document.getElementById('numbers').checked != true)
            {
                if (document.getElementById('operators').checked != true)
                {
                    
                   alert("Please select an option.");
                }
            }
        } 


        //Operators Only
        if (document.getElementById('operators').checked == true)
        {
            if (document.getElementById('numbers').checked != true)
            {
                if (document.getElementById('alpha').checked != true)
                {
                    
                    for (var x = 0; x < length; x++) 
                    {
                        var i = Math.floor(Math.random() * operatorsValue.length);
                        pass += operatorsValue.charAt(i);
                
                    }
                    return pass;
                }
            }
        }

        //Alphabets Only
        if (document.getElementById('alpha').checked == true) 
        {
            if (document.getElementById('numbers').checked != true )
            {
                if (document.getElementById('operators').checked != true )
                {
                    
                    for (var x = 0; x < length; x++) 
                    {
                        var i = Math.floor(Math.random() * alphaValue.length);
                        pass += alphaValue.charAt(i);
                
                    }
                    return pass;
                }
            }
        }

        //Numbers Only
        if (document.getElementById('alpha').checked != true) 
        {
            if (document.getElementById('numbers').checked == true )
            {
                if (document.getElementById('operators').checked != true )
                {
                    
                    for (var x = 0; x < length; x++) 
                    {
                        var i = Math.floor(Math.random() * numeratorsValue.length);
                        pass += numeratorsValue.charAt(i);
                
                    }
                    return pass;
                }
            }
        }

        //Alphabets And Numbers
        if (document.getElementById('alpha').checked == true) 
        {
            if (document.getElementById('numbers').checked == true )
            {
                if (document.getElementById('operators').checked != true )
                {
                   
                    for (var x = 0; x < length; x++) 
                    {
                        var i = Math.floor(Math.random() * alphaNumerator.length);
                        pass += alphaNumerator.charAt(i);
                
                    }
                    return pass;
                }
            }
        }

        //Alphabets And Operators
        if (document.getElementById('alpha').checked == true) 
        {
            if (document.getElementById('numbers').checked != true )
            {
                if (document.getElementById('operators').checked == true )
                {
                    
                    for (var x = 0; x < length; x++) 
                    {
                        var i = Math.floor(Math.random() * alphaOperator.length);
                        pass += alphaOperator.charAt(i);
                
                    }
                    return pass;
                }
            }
        }

        //Numbers And Operators
        if (document.getElementById('alpha').checked != true) 
        {
            if (document.getElementById('numbers').checked == true )
            {
                if (document.getElementById('operators').checked == true )
                {
                    
                    for (var x = 0; x < length; x++) 
                    {
                        var i = Math.floor(Math.random() * numberOperator.length);
                        pass += numberOperator.charAt(i);
                
                    }
                    return pass;
                }
            }
        }   


   
}


function generate() 
{
    myform.row_password.value = getValue(myform.length.value);
    
}


$(window).scroll( function()
    {
      $('#testID').each( function(i)
      {
        let bottomElement = $(this).offset().top + $(this).outerHeight();
        let bottomWindow = $(window).scrollTop() + $(window).height();
          
        if( bottomWindow > bottomElement )
        {
          $(this).animate({'opacity':'1'},100);
        }
      }); 
    });