function ticketMain() {
    let ticket = validateInt("Enter the number of the ticket");
    let nums = ticket.split("");
    let middleIndex = Math.floor(nums.length / 2),
        first = nums.slice(0, middleIndex).reduce((accumulator, elem) => accumulator + (+elem), 0),
        second = nums.slice(middleIndex).reduce((accumulator, elem) => accumulator + (+elem), 0);
    alert((first == second)?"Lucky ticket!!!":"Unlucky ticket!!!");
    
}

ticketMain();