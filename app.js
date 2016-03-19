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
            var col = $(this).attr('value');
            console.log(col);
            if(boardArr[0][col] !== '.'){
                return;
            }else if(boardArr[5][col] === '.'){
                boardArr[5][col] = 'r';
            }
        renderBoard();
    });
});

var boardArr = [
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.']
];

function renderBoard(){
    boardArr.forEach(function(row, ind1){
        row.forEach(function (val, ind2){
            console.log(boardArr[ind1][ind2]);
            var idString = '#cell' + ind1.toString() + ind2.toString();
            if(val === 'r'){
                console.log($(idString));
                $(idString).css('background-color', 'red');
            }
        });
    });
}