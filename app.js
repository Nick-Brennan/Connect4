$(function(){
    //get ready to drop piece
    console.log('jquery');
    $('.moveCell').hover(function(){
            $(this).css('background-color', 'red');
        },function(){
            $(this).css('background-color', 'white');
        }
    );
    
    //get index of column where piece was dropped
    $('.moveCell').click(function(){
            console.log($(this).attr('value'));
        }
    );
});