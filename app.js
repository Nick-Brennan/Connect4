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
});

//data structure to represent the board progarmatically
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
            
function checkForWin(){
    if(checkRows('r')){
        alert('red wins');
        location.reload();
    }else if(checkRows('b')){
        alert('black wins');
        location.reload();
    }        
}            