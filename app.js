var playerColor = 'red'
var chip = 'r'
$(function(){
    //get ready to drop piece
    console.log('jquery');
    $('.moveCell').hover(function(){
            $(this).css('background-color', playerColor);
        },function(){
            $(this).css('background-color', 'white');
        }
    );
    
    //get index of column where piece was dropped
    //and fill the last available slot beneith
    $('.moveCell').click(function(){
            var col = $(this).attr('value');
            console.log(col);
            if(boardArr[0][col] !== '.'){
                return;
            }else if(boardArr[5][col] === '.'){
                boardArr[5][col] = chip;
            }else if(boardArr[4][col] === '.'){
                boardArr[4][col] = chip;
            }else if(boardArr[3][col] === '.'){
                boardArr[3][col] = chip;
            }else if(boardArr[2][col] === '.'){
                boardArr[2][col] = chip;
            }else if(boardArr[2][col] === '.'){
                boardArr[2][col] = chip;
            }else if(boardArr[1][col] === '.'){
                boardArr[1][col] = chip;
            }else if(boardArr[0][col] === '.'){
                boardArr[0][col] = chip;
            }
            
            playerColor = (playerColor === 'red') ? 'black' : 'red';
            chip = (chip === 'r') ? 'b' : 'r';
            $(this).css('background-color', playerColor);
        
            renderBoard();
            checkForWin();
    });
    
    $('#alertBox').on('click', function(){
        if($(this).text){
            $(this).css('display', 'none');
            $(this).text('');
        }
    });
});

//data structure to represent the board programatically
var boardArr = [
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.'],
    ['.','.','.','.','.','.','.']
];


//redraw the board after each move  TODO: animate the droped piece
function renderBoard(){
    boardArr.forEach(function(row, ind1){
        row.forEach(function (val, ind2){
            console.log(boardArr[ind1][ind2]);
            var idString = '#cell' + ind1.toString() + ind2.toString();
            if(val === 'r'){
                console.log($(idString));
                $(idString).css('background-color', 'red');
            }else if(val === 'b'){
                console.log($(idString));
                $(idString).css('background-color', 'black');
            }else{
                $(idString).css('background-color', 'white');
            }         
        });
    });
}

function checkRow(arr, x){
    return (arr[0] === x && arr[1] === x && arr[2] === x && arr[3] === x ||
            arr[1] === x && arr[2] === x && arr[3] === x && arr[4] === x ||
            arr[2] === x && arr[3] === x && arr[4] === x && arr[5] === x ||
            arr[3] === x && arr[4] === x && arr[5] === x && arr[6] === x);
}
            
function checkRows(x){
    return (checkRow(boardArr[0], x) ||
            checkRow(boardArr[1], x) ||
            checkRow(boardArr[2], x) ||
            checkRow(boardArr[3], x) ||
            checkRow(boardArr[4], x) ||
            checkRow(boardArr[5], x));
}

function checkColumn(index, x){
    return (boardArr[5][index] === x && boardArr[4][index] === x && boardArr[3][index] === x && boardArr[2][index] === x ||
            boardArr[4][index] === x && boardArr[3][index] === x && boardArr[2][index] === x && boardArr[1][index] === x ||
            boardArr[3][index] === x && boardArr[2][index] === x && boardArr[1][index] === x && boardArr[0][index] === x );
}

function checkColumns(x){
    return (checkColumn(0, x) ||
            checkColumn(1, x) ||
            checkColumn(2, x) ||
            checkColumn(3, x) ||
            checkColumn(4, x) ||
            checkColumn(5, x) ||
            checkColumn(6, x)); 
}

function checkForwardDiag(x){
    res = false
    for(var i = 5; i >= 0; i--){
        for(var j = 0; j < 4; j++){
            console.log('checking diag');
            if(boardArr[i][j] === x && boardArr[i-1][j+1] === x && boardArr[i-2][j+2] === x && boardArr[i-3][j+3] === x){
                res = true;
            }
        }
    }
    return res;
}

function checkBackwardDiag(x){
    res = false
    for(var i = 5; i >= 0; i--){
        for(var j = 6; j >= 0; j--){
            console.log('checking diag');
            if(boardArr[i][j] === x && boardArr[i-1][j-1] === x && boardArr[i-2][j-2] === x && boardArr[i-3][j-3] === x){
                res = true;
            }
        }
    }
    return res;
}
            
function checkForWin(){
    if(checkRows('r')){
        $('#alertBox').text('Red Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }else if(checkRows('b')){
        $('#alertBox').text('Black Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }else if(checkColumns('r')){
        $('#alertBox').text('Red Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }else if(checkColumns('b')){
        $('#alertBox').text('Black Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }else if(checkForwardDiag('r')){
        $('#alertBox').text('Red Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }else if(checkForwardDiag('b')){
        $('#alertBox').text('Black Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }else if(checkBackwardDiag('r')){
        $('#alertBox').text('Red Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }else if(checkBackwardDiag('b')){
        $('#alertBox').text('black Wins');
        $('#alertBox').css('display', 'inline');
        boardReset();
        renderBoard();
    }        
} 

function boardReset(){
    boardArr = [
        ['.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.'],
        ['.','.','.','.','.','.','.']
    ];
}