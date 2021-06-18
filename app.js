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