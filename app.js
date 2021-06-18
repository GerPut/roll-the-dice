//Create dice image with a mulitdimensional array. 9 block grid representing dots that we want to color in that represent a color.
const diceImg = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 2, 3, 7, 8, 9]]
//Create a button.
const btn = document.createElement('button');
btn.textContent = "Roll";

//Create a play area.
const playArea = document.createElement('div');
//Add play area to body.
document.body.prepend(playArea);
//Add button to play area.
playArea.append(btn);

//Create container with two areas for dice.
const area1 = document.createElement('div');
const area2 = document.createElement('div');
const container = document.createElement('div');

//Add container to main play area
playArea.append(container)
//Add play areas for dice to the container
container.append(area1);
container.append(area2);

//Add content to areas
area1.textContent = "Dice 1"
area2.textContent = "Dice 2"
addBorders(area1)
addBorders(area2)

//Add event listeners
btn.addEventListener("click", function () {
    roll();
    console.log(area1.val)
    console.log(area2.val)
})

//Creat function that generates dice
function diceGen(val) {
    //construct html that we are returning
    let html = '<div>';
    let tempArray = diceImg[val];
    //loop through our array
    for (let i = 1; i < 10; i++) {
        if (tempArray.includes(i)) {
            html += '<span style="width:33%; display:inline:block">x</span>'
        } else {
            html += '<span style="width:33%; display:inline:block"> </span>'
        }
    }
    //append div element to html
    html += '<div>'
    return val;
}

// Create a function that rolls a value for dice in areas
function roll() {
    area1.val = Math.floor(Math.random() * 6);
    area2.val = Math.floor(Math.random() * 6);
    //Update content of areas
    area1.innerHTML = diceGen(area1.val);
    area2.innerHTML = diceGen(area2.val);
}

//Add borders to areas for dice using a function
function addBorders(element) {
    element.style.border = "2px solid black";
    element.style.padding = "10px";
    element.style.fontsize = "2rem";
    element.style.width = "40%";
    //style float let them be inline with each other
    element.style.float = "left";
    //Height will adjust with the size off the screen
    element.style.height = element.offsetWidth + 'px';

}