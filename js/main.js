$(document).ready(function(){

    $('#hotel-form').show()
    $('#ticket-form').hide()
    $('#place-form').hide()
    
    
    $('#hotel-btn span').addClass('line');
    
    
    $('#ticket-btn').click(function(){

        $('#hotel-form').hide()
        $('#ticket-form').show()
        $('#place-form').hide()
        
        
      
        
        });

        $('#place-btn').click(function(){

            $('#hotel-form').hide()
            $('#ticket-form').hide()
            $('#place-form').show()
            
            
          
            
            });
            $('#hotel-btn').click(function(){

                $('#hotel-form').show()
                $('#ticket-form').hide()
                $('#place-form').hide()
                
                
              
                
                });
    });



    // owl carosol link

   