let room_number = "",
    rooms = [],
    numexp = /\d+/,
    check = room_number.match(numexp);

while (!check || check[0] != room_number) {
    room_number = prompt("Enter the number of rooms");
    check = room_number.match(numexp);
}

for(let i = 0; i < room_number; i++) {
    let taken = "A", chair_number = "";
    let xexp = /X+/;

    check = taken.match(xexp);
    while(!check || check[0] != taken) {
        taken = prompt("Enter the number of taken chairs");
        if (taken == "") {
            break;
        }
        check = taken.match(xexp);
    }

    check = chair_number.match(numexp);
    while(!check || check[0] != chair_number) {
        chair_number = prompt("Enter the number of chairs in the current room");
        check = chair_number.match(numexp);
    }
    rooms[i] = [taken.length, chair_number];
    if (rooms[i][0] > rooms[i][1]) {
        rooms[i][0] = rooms[i][1];
    }
}

let chair_needed = "";
check = chair_needed.match(numexp);
while(!check || check[0] != chair_needed) {
    chair_needed = prompt("Enter the number of chairs needed");
    check = chair_needed.match(numexp);
}
if (chair_needed == 0) {
    console.log("Game On");
} else {
    rooms = rooms.map((element) => element[1] - element[0]);
    let total = rooms.reduce((accumulator, element) => accumulator + element);
    if (total >= chair_needed) {
        let res = [];
        for(let i = 0; i < rooms.length; i++) {
            res[i] = (rooms[i] < chair_needed)?rooms[i]:chair_needed;
            chair_needed -= rooms[i];
            if (!chair_needed) {
                break;
            }
        }
        console.log(res);
    } else {
        console.log("Not enough!");
    }

}