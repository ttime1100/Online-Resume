$(document).ready( function() {


$('.navbar').affix({
    offset:{
        top: $('#header').outerHeight(),
        bottom: $('#header').outerHeight() - 200
    }
});

$('#sidemenu').affix({
    offset:{
        top: $('#header').outerHeight(),
        bottom: $('footer').outerHeight() + 50
    }
});


});
