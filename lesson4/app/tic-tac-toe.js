let board = [[], [], []];

let game_unfinished = false;

function check_rows(board, player) {
    let row1 = board[0].filter(elem => elem == player);
    let row2 = board[1].filter(elem => elem == player);
    let row3 = board[2].filter(elem => elem == player);
    return row1.length == 3 || row2.length == 3 || row3.length == 3;
}

function check_cols(board, player) {
    let col1 = board.map((elem, i, link) => link[i][0]).filter(elem => elem == player);
    let col2 = board.map((elem, i, link) => link[i][1]).filter(elem => elem == player);
    let col3 = board.map((elem, i, link) => link[i][2]).filter(elem => elem == player);
    return col1.length == 3 || col2.length == 3 || col3.length == 3;
}

function check_diagonals(board, player) {
    let diag1 = board.map((elem, i, link) => link[i][i]).filter(elem => elem == player);
    let diag2 = board.map((elem, i, link) => link[i][2 - i]).filter(elem => elem == player);
    return diag1.length == 3 || diag2.length == 3;
}

function check_victory(board, player) {
    return check_rows(board, player) || check_cols(board, player) || check_diagonals(board, player);
}

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        let current = "";
        while (current != "0" && current != "1" && current != "2") {
            current = prompt("Enter the value(0/1/2)");
        }
        board[i][j] = current;
        game_unfinished = game_unfinished || current == "0";
    }
}

if (game_unfinished) {
    console.log(-1);
} else {
    switch(true) {
        case check_victory(board, 1): {
            console.log(1);
            break;
        }
        case check_victory(board, 2): {
            console.log(2);
            break;
        }
        default: {
            console.log(0);
            break;
        }
    }
}