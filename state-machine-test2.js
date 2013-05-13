// Sample test file for the state machine class
// Implements a simple draggable div which changes color when pressed.
// Record the location where the div was clicked.
function record_down_location(e, attachedElement) {
    console.log("record down location: " + e.clientX + ", " + e.clientY);
    attachedElement.downX = e.clientX;
    attachedElement.downY = e.clientY;
    attachedElement.origLeft = parseInt(attachedElement.style.left) || 0;
    attachedElement.origTop = parseInt(attachedElement.style.top) || 0;
    attachedElement.style.backgroundColor = "red";
}

// When the div is released, make its background color red again.
function letGo(attachedElement) {
    attachedElement.style.backgroundColor = "rgba(" + randomColor(255) + "," + randomColor(255) + "," + randomColor(255) + "," + "0.5" + ")";
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

//function that generates random numbers that gets translated into random colors with the flick color function
function randomColor(num) {
    return Math.floor(Math.random() * num);
    //returns the random numbers within the colors codes range
}

//this function calls the randomColor function and generates the random colors using the random numbers generated from the randomColor function
function flick_color(e, attachedElement) {
    var color = "rgb(" + randomColor(255) + "," + randomColor(255) + "," + randomColor(255) + ")";
    console.log(color);
    attachedElement.style.backgroundColor = color;
    //setting the color generated to the attachedElement
}


//This function moves the attachedElement by changing its left and top positions
function move_icon(e, attachedElement) {
    console.log("move icon: " + e.clientX + ", " + e.clientY);
    attachedElement.style.left = (attachedElement.origLeft + (e.clientX - attachedElement.downX)) + "px";
    attachedElement.style.top = (attachedElement.origTop + (e.clientY - attachedElement.downY)) + "px";
}

//This is the first state machine that is attached to the first element : div1
function stateMachine1() {
    //getting the div1 element from the html document
    var div1 = document.getElementById("div1");
    // setting the state table for the first element description including the names of the states and the transitions
    var sampleDescription_first = {
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
                input: "mouseUp",
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
            }
            ]
        }
        ]
    };
    //the first element finite state machine that will create the stateTable and make sure actions are performed
    var stateMachine1 = new StateMachine(sampleDescription_first, div1);

}

//the second item state machine
function stateMachine2() {
    //Getting the second element from the html document
    var div2 = document.getElementById("div2");
    //setting the second element state Table description
    var sampleDescription_second = {
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
                input: "mouseUp",
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
            }
            ]
        }
        ]
    };

    //creating the second elements statemachine that will create the state table and pass the element
    var stateMachine_second = new StateMachine(sampleDescription_second, div2);
}


//function to create the third element state machine
function stateMachine3() {
    //Getting the third element from the html document
    var div3 = document.getElementById("div3");
    //setting the descrption through which the state table will be created for the element's state machine
    var sampleDescription_third = {
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
            }
            ]
        }
        ]
    };
    //creating the third element state machine and passing the description and the third element
    var stateMachine_third = new StateMachine(sampleDescription_third, div3);
}

//creating the fourth element state machine
function stateMachine4() {
    //getting the fourth element through its ID from the HTML document
    var div4 = document.getElementById("div4");
    // This sets the state table description to create the state table
    var sampleDescription_four = {
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
            }
            ]
        }
        ]
    };
    //Creating the state maching object for the fourth element.
    var stateMachine4 = new StateMachine(sampleDescription_four, div4);
}

window.onload = function() {
    //Loading the state machines
    stateMachine1();
    stateMachine2();
    stateMachine3();
    stateMachine4();




}
