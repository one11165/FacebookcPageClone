$(document).ready(function(){
    $("#sign-upform").validate({
        rules:{
        fname:{
            required: true,
            minlength: 4
        },
        sname:{
            required:true,
            minlength: 4
        },
        mobileno:{
            required:true,
            email:true
        },
        pass:{
            minlength:6,
        },
        dates:{
            required:true

        },
        gender:{
            required:true
        }

    },
    messages:{
        fname:{
            required:"Enter first name",
            minlength:"enter 4 char"
        }
    }

    })
})