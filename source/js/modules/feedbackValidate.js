// ++++++++++++++++++++++++++++ V A L I D A T E - 1 ++++++++++++++++++++++++

var validate = function(){

    var validateForm = $('#autorizeForm');

    validateForm.each(function(){
    
        var validateForm = $(this);
        var validate = {};
        var validateThis = $(this).find('formField');
        var validatingLength = $(this).find('formField').length;
        var submitBtn = $(this).find('.submit');

    
        for(var i = 1; i <= validatingLength; i++){
      
            validate['input'+i] = false;
        }

        $('.formField').blur(function(){
            var index =  $(this).prevAll().length+1;
            var validateThisVal = $(this).val();
            var validateThisType = $(this).attr('type');

            if(validateThisType === "email"){

        
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
                if(!validateThisVal.match(re)){
                    $(this).parent().addClass('not-valid');
                    $(this).parent().removeClass('is-valid');
                    return validate['input'+index] = false;
                } else{
                    $(this).parent().addClass('is-valid');
                    $(this).parent().removeClass('not-valid');
                    return validate['input'+index] = true;
                }
            } else {
        
                if(validateThisVal == ""){
                    $(this).parent().addClass('not-valid');
                    $(this).parent().removeClass('is-valid');
                    return validate['input'+index] = false;
                } else{
                    $(this).parent().addClass('is-valid');
                    $(this).parent().removeClass('not-valid');
                    return validate['input'+ index] = true;
                }
            }
        });

    
        validateForm.on('submit', function(e){
            e.preventDefault();

     
            var falseCtn = 0;
            for(var i = 1; i <= validatingLength; i++){
                if(validate['input'+i] == false){
                falseCtn++;
                }
            }

            if(falseCtn > 0){
                $(this).unbind('submit').submit();
                $(this).click();
            }

        });


    });
};

validate();