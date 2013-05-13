// Sample test file for the state machine class
// Implements a simple draggable div which changes color when pressed.
// Record the location where the div was clicked.
//Created By : Rana Khalil
function record_down_location(e, attachedElement) {
    console.log("record down location: " + e.clientX + ", " + e.clientY);
    attachedElement.downX = e.clientX;
    attachedElement.downY = e.clientY;
    attachedElement.origLeft = parseInt(attachedElement.style.left) || 0;
    attachedElement.origTop = parseInt(attachedElement.style.top) || 0;
    attachedElement.style.backgroundColor = "blue";
}

// When the div is released, make its background color red again.
function letGo(attachedElement) {
    attachedElement.style.backgroundColor = "white";
}

// Log that the div was dropped and change color
function do_drop(e, attachedElement) {
    console.log("do drop: " + e.clientX + ", " + e.clientY);
    letGo(attachedElement);
}

// When mouse moves outside of region, log this.
function move_out(e, attachedElement) {
    console.log("move out: " + e.clientX + ", " + e.clientY);
    letGo(attachedElement);
}

//function to generate random numbers for colors
function randomColor(num)
 {
    return Math.floor(Math.random() * num);
}

//function that takes random numbers and generates random colors
function flick_color(e, attachedElement)
 {
    var color = "rgb(" + randomColor(255) + "," + randomColor(255) + "," + randomColor(255) + ")";
    console.log(color);
    attachedElement.style.backgroundColor = color;
}


//function that moves the attached element by changing left and top positions
function move_icon(e, attachedElement) {
    console.log("move icon: " + e.clientX + ", " + e.clientY);
    attachedElement.style.left = (attachedElement.origLeft + (e.clientX - attachedElement.downX)) + "px";
    attachedElement.style.top = (attachedElement.origTop + (e.clientY - attachedElement.downY)) + "px";
}

//the state machine function that creates the state maching object to the element
function stateMachine()
 {
  //getting the element from the html document
    var myDiv = document.getElementById("myDiv");

  	// Stating the state Table description
    var sampleDescription = {
        states: [
        {
            name: "start",
            transitions: [
            {
                input: "keyPress",
                action: record_down_location,
                endState: "down"
            }]
        },
        {
            name: "down",
            transitions: [
            {
                input: "TimerTick30Ms",
                action: flick_color,
                endState: "down"
            },
            {
                input: "mouseMove",
                action: move_icon,
                endState: "down"
            },
            {
                input: "mouseOut",
                action: move_out,
                endState: "start"
            },
            {
                input: "mouseUp",
                action: move_out,
                endState: "start"
            }

            ]
        }
        ]
    };
	//the state machine object that will create the state table attached to the element passed
    var stateMachine = new StateMachine(sampleDescription, myDiv);
}

// draw function to draw the pumpkin using the canvas html element
function draw() {
	// get the canvas element from the html document
    var canvas = document.getElementById("canvas");
	//set the contenxt
    var context = canvas.getContext("2d");
	//create new image object
    var image = new Image();
	//set the image source
    image.src = 'pumpkin.png';
	//draw the image with the right x and y position
    context.drawImage(image, -3, -3);

	//write the content of the instructions at the stated position
    var content = " Press key to set pumpkin on fire";
    context.fillStyle = "orange";
    context.font = "20pt Arial";
    context.fillText(content, -10, 350);


}


window.onload = function() {
	//load the draw funtion and the state machine
    draw();
    stateMachine();
};
