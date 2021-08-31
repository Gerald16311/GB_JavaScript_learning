const blackItem = document.createElement("div");
blackItem.className = "blockblack";
const whiteItem = document.createElement("div");
whiteItem.className = "blockwhite";
let textItem = document.createElement("div");
textItem.className = "blockText";
//Первый вариант(каждый блок отрисовывается по очереди)
/*
        document.getElementById('board').insertAdjacentHTML("beforeend", textItem.outerHTML);
 
        for (let i = 1; i < 9; i++) {
            textItem.innerHTML = String.fromCharCode(64 + i);
            document.getElementById('board').insertAdjacentHTML("beforeend", textItem.outerHTML);
        }
        for (let i = 1; i < 9; i++) {
            textItem.innerHTML = i;
            document.getElementById('board').insertAdjacentHTML("beforeend", textItem.outerHTML);
            for (let y = 1; y < 9; y++) {
                if (i % 2 == 0 && y % 2 == 0) {
                    document.getElementById('board').insertAdjacentHTML("beforeend", blackItem.outerHTML);
                } else if (i % 2 == 0 && y % 2 != 0) {
                    document.getElementById('board').insertAdjacentHTML("beforeend", whiteItem.outerHTML);
                } else if (i % 2 != 0 && y % 2 == 0) {
                    document.getElementById('board').insertAdjacentHTML("beforeend", whiteItem.outerHTML);
                } else if (i % 2 != 0 && y % 2 != 0) {
                    document.getElementById('board').insertAdjacentHTML("beforeend", blackItem.outerHTML);
                }
            }
        }
*/
// второй вариант, все отрисовывается за 1 раз
let board_2 = document.createElement("div");
board_2.className = "board";
board_2.id = 'board';
board_2.insertAdjacentHTML("beforeend", textItem.outerHTML);

for (let i = 1; i < 9; i++) {
    //textItem.innerHTML = String.fromCharCode(64 + i);
    textItem.insertAdjacentHTML("beforeend", String.fromCharCode(64 + i));
    board_2.insertAdjacentHTML("beforeend", textItem.outerHTML);
    textItem.innerHTML = ''
}
for (let i = 1; i < 9; i++) {
    //textItem.innerHTML = i;
    textItem.insertAdjacentHTML("beforeend", i);
    board_2.insertAdjacentHTML("beforeend", textItem.outerHTML);
    textItem.innerHTML = ''
    for (let y = 1; y < 9; y++) {
        if (i % 2 == 0 && y % 2 == 0) {
            board_2.insertAdjacentHTML("beforeend", blackItem.outerHTML);
        } else if (i % 2 == 0 && y % 2 != 0) {
            board_2.insertAdjacentHTML("beforeend", whiteItem.outerHTML);
        } else if (i % 2 != 0 && y % 2 == 0) {
            board_2.insertAdjacentHTML("beforeend", whiteItem.outerHTML);
        } else if (i % 2 != 0 && y % 2 != 0) {
            board_2.insertAdjacentHTML("beforeend", blackItem.outerHTML);
        }
    }
}
document.getElementById('board').replaceWith(board_2)