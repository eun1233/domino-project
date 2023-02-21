$(document).ready(function(){


// header

$('#mo_btn').click(function(){

    $('#tab').animate({

        right: 0,

    });

});

$('#close_btn').click(function(){

    $('#tab').animate({

        right: -610,

    });

});



// section01

var w = $('.banner').width();


$('#right').click(function(){

    $('#banner').animate({
        left: -w*2,
    },1000,function(){

        $('#banner').css({

            left:-w,

        }).find('.banner').first().appendTo('#banner');


    });

});

$('#left').click(function(){

    $('#banner').animate({
        left: 0,
    },1000,function(){

        $('#banner').css({

            left:-w,

        }).find('.banner').last().prependTo('#banner');

    });  


});





$('#circle li').each(function(index){
    $(this).attr('data-index',index);
});


$('#circle li').click(function(){

    i = $(this).attr('data-index');

    $('#tab_banner').animate({
        left : -760 * i,
    });

    $('#circle li').removeClass('cir');
    $('#circle li').eq(i).addClass('cir');

    
});




// section04
var bg = ['#B8BA59','#FAF2DD','#3376AA','#B6E1F2']

$('.event_wrap').css({

    backgroundColor: function(index){
        return bg[index];
    }

});


$(window).scroll(function(){

    sct = $(window).scrollTop();

});


// console.log(sct);

$(window).scroll(function(){

    console.log(sct);

    if(sct>1982){
        $('.event:nth-child(1)').css('opacity', 0);

    }else{
        $('.event:nth-child(1)').css('opacity', 1);

    }

    
    if(sct>2462){
        $('.event:nth-child(2)').css('opacity', 0);

    }else{
        $('.event:nth-child(2)').css('opacity', 1);

    }

    
    if(sct>2933){
        $('.event:nth-child(3)').css('opacity', 0);

    }else{
        $('.event:nth-child(3)').css('opacity', 1);

    }

    
    if(sct>3500){
        $('.event:nth-child(4)').css('opacity', 0);

    }else{
        $('.event:nth-child(4)').css('opacity', 1);

    } 


});    




// mo_event
var bg = ['#B8BA59','#FAF2DD','#3376AA','#B6E1F2']

$('.event_wrap02').css({

    backgroundColor: function(index){
        return bg[index];
    }

});


$(window).scroll(function(){

    sct = $(window).scrollTop();

});


// console.log(sct);

$(window).scroll(function(){

    console.log(sct);

    if(sct>2200){
        $('.event02:nth-child(1)').css('opacity', 0);

    }else{
        $('.event02:nth-child(1)').css('opacity', 1);

    }

    
    if(sct>3000){
        $('.event02:nth-child(2)').css('opacity', 0);

    }else{
        $('.event02:nth-child(2)').css('opacity', 1);

    }

    
    if(sct>3800){
        $('.event02:nth-child(3)').css('opacity', 0);

    }else{
        $('.event02:nth-child(3)').css('opacity', 1);

    }

    
    if(sct>4500){
        $('.event02:nth-child(4)').css('opacity', 0);

    }else{
        $('.event02:nth-child(4)').css('opacity', 1);

    }
    


});  




// top_btn

$('#top_btn').click(function(){

    $('html,body').animate({

        scrollTop:0,

    },500);

});

















});//end