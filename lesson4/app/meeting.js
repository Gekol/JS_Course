function meetingMain() {
    let data = getData();
    let rooms = data[0], chairsNeeded = data[1];
    if (chairsNeeded == 0) {
        alert("Game On");
    } else {
        let total = 0, res = [];
        for(let i of rooms) {
            if (chairsNeeded != 0) {
                let chairsTaken = (chairsNeeded>i)?i:chairsNeeded;
                total += chairsTaken;
                chairsNeeded -= chairsTaken;
                res.push(chairsTaken);
            } else {
                break;
            }
        }
        if (chairsNeeded == 0) {
            alert(res);
        }
        else {
            alert("Not enough!");
        }
    }
}

function getPeople(people="a") {
    let peoplexp = /^X*$/;
    while(!people.match(peoplexp)) {
        people = prompt("Enter the number of people");
    }
    return people;
}

function getRooms(number) {
    let rooms = [];
    for(let i = 0; i < number; i++) {
        let people = getPeople();
        let chairs = getInt("Enter the number of chairs in the room");
        rooms[i] = (chairs > people.length)?chairs - people.length:0;
    }
    return rooms;
}

function getData() {
    let roomsNumber = getInt("Enter the number of the rooms");
    let rooms = getRooms(roomsNumber);
    let chairsNeeded = getInt("Enter the number of chairs needed");
    return [rooms, chairsNeeded];
}

meetingMain();