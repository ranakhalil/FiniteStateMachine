// Sample test file for the state machine class
// Implements a simple draggable div which changes color when pressed.
// Record the location where the div was clicked.
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
//function generates random colors with in the RGB colors range (255)
function randomColor(num)
 {
    return Math.floor(Math.random() * num);
}

//function that generates the random colors and applies them to the attached Element
function flick_color(e, attachedElement)
 {
    var color = "rgb(" + randomColor(255) + "," + randomColor(255) + "," + randomColor(255) + ")";
    console.log(color);
    attachedElement.style.backgroundColor = color;
}

//this function moves the attached element by changing its left and top positions
function move_icon(e, attachedElement) {
    console.log("move icon: " + e.clientX + ", " + e.clientY);
    attachedElement.style.left = (attachedElement.origLeft + (e.clientX - attachedElement.downX)) + "px";
    attachedElement.style.top = (attachedElement.origTop + (e.clientY - attachedElement.downY)) + "px";
}

//this is the state machine generated by the stateMachine function
function stateMachine()
 {
  // This is the Div element that we will get from the html document.
    var myDiv = document.getElementById("myDiv");
	//this is the state table description that will be used to create the table
    var sampleDescription = {
        states: [
        {
            name: "start",
            transitions: [
            {
                input: "mouseDown",
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
	//this is the state machine object
    var stateMachine = new StateMachine(sampleDescription, myDiv);
}

//this function draws the different colored squres using the rgba coloring codes to generate the big colored square
function draw() {
	//start by getting the canvas element from the html document
    var canvas = document.getElementById("canvas");
	//setting the context to 2d
    var context = canvas.getContext("2d");

	//creating the first square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect(0, 0, 100, 100);

	//creating the second square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(60, 179, 113, 0.5)";
    context.fillRect(100, 0, 100, 100);

	//creating the third square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(148, 0, 211, 0.5)";
    context.fillRect(200, 0, 100, 100);
	
	//creating the fourth square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(188, 143, 143, 0.5)";
    context.fillRect(0, 100, 100, 100);

	//creating the fifth square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(220, 20, 60, 0.5)";
    context.fillRect(100, 100, 100, 100);
	
	//creating the sixth square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(79, 148, 205, 0.5)";
    context.fillRect(200, 100, 100, 100);

	//creating the seventh square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(0, 245, 255, 0.5)";
    context.fillRect(0, 200, 100, 100);

	//creating the eight square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(227, 207, 87, 0.5)";
    context.fillRect(200, 200, 100, 100);

	//creating the ninth square by making the fillStyle and then filling up the rectangle and setting up the x and y positions from the fillRect.
    context.fillStyle = "rgba(255, 193, 193, 0.5)";
    context.fillRect(100, 200, 100, 100);

	//this is the text to be drawn to explain the theme of the doodle
    var content = " Life Techno Colors";
	//this is the fill style for the text.
    context.fillStyle = "black";
	//font type and size
    context.font = "20pt Arial";
	//filling the text in the right x and y position
    context.fillText(content, 20, 350);

}

// Provides the state machine description and creates a new state machine attached to myDiv
window.onload = function() {
	//onloading the canvas draw function then the state machine
    draw();
    stateMachine();
};
