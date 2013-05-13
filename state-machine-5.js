// Sample test file for the state machine class
// Implements a simple draggable div which changes color when pressed.
// Record the location where the div was clicked.
//Create By: Rana Khalil 
function record_down_location(e, attachedElement) {
    console.log("record down location: " + e.clientX + ", " + e.clientY);
    attachedElement.downX = e.clientX;
    attachedElement.downY = e.clientY;
    attachedElement.origLeft = parseInt(attachedElement.style.left) || 0;
    attachedElement.origTop = parseInt(attachedElement.style.top) || 0;
    attachedElement.style.backgroundColor = "white";
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

// function generates random codes for colors to be used
//in the flick color function
function randomColor(num)
 {
    return Math.floor(Math.random() * num);
    // generating random numbers
}

//this function is called by the FSM to generate a set of random colors, which is
// based on the rgb
function flick_color(e, attachedElement)
 {
    var color = "rgb(" + randomColor(255) + "," + randomColor(255) + "," + randomColor(255) + ")";
    console.log(color);
    attachedElement.style.backgroundColor = color;
}


//this function moves the icon when the chosen input in the state table
//is recieved
function move_icon(e, attachedElement) {
    console.log("move icon: " + e.clientX + ", " + e.clientY);
    //changing the attachedElement left and top position
    attachedElement.style.left = (attachedElement.origLeft + (e.clientX - attachedElement.downX)) + "px";
    attachedElement.style.top = (attachedElement.origTop + (e.clientY - attachedElement.downY)) + "px";
}
// This function contains the finite state table and statemachine object for
//the packman object
function stateMachinepackman()
 {
    // Getting the packman div element in the html document
    var Div = document.getElementById("packman");

    // the description for the state table holds the different states with their expected input
    // and the actions performed in the state given the input and the end state
    var sampleDescriptionpackman = {
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
                action: do_drop,
                endState: "start"
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
    //the state machine object for the packman
    var stateMachine = new StateMachine(sampleDescriptionpackman, Div);
}

// This is the second oreo state machine
function stateMachineOreo_2() {
    //getting the second oreo dive element from the html document
    var Div_oreo_2 = document.getElementById("oreo2");
    //setting the state table for the oreo description of states, input and
    //endstate
    var sampleDescription_oreo2 = {
        states: [
        {
            name: "start",
            transitions: [
            {
                input: "mouseMove",
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
                action: flick_color,
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
    //the second oreo state machine
    var stateMachine_oreo2 = new StateMachine(sampleDescription_oreo2, Div_oreo_2);
}

//this is the third oreo state machine
function stateMachineOreo_3() {
    // getting the html element for the third oreo
    var Div_oreo_3 = document.getElementById("oreo3");
    //setting the third oreo state machine description of states, input , action and endState
    var sampleDescription_oreo3 = {
        states: [
        {
            name: "start",
            transitions: [
            {
                input: "mouseMove",
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
                action: flick_color,
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
    //Creating the state maching object
    var stateMachine_oreo3 = new StateMachine(sampleDescription_oreo3, Div_oreo_3);
}

// this is the state machine for the fourth oreo
function stateMachineOreo_4() {
    //getting the html div element of the fourth oreo
    var Div_oreo_4 = document.getElementById("OreoDiv");
    //this is the state table description for the fourth oreo
    var sampleDescription_oreo4 = {
        states: [
        {
            name: "start",
            transitions: [
            {
                input: "mouseMove",
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
                action: flick_color,
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
    //this is the fourth oreo state machine
    var stateMachine_oreo4 = new StateMachine(sampleDescription_oreo4, Div_oreo_4);
}

//this is the first oreo state machine function
function stateMachineOreo_1() {
    //this is the first oreo div element from the html document
    var Div_oreo_1 = document.getElementById("oreo1");
    //First oreo state table description and details
    var sampleDescription_oreo1 = {
        states: [
        {
            name: "start",
            transitions: [
            {
                input: "mouseMove",
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
                action: flick_color,
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
    //first oreo state machine
    var stateMachine_oreo1 = new StateMachine(sampleDescription_oreo1, Div_oreo_1);
}

//this is the windown onload function that will load all of the state machines
window.onload = function() {

    //state machines functions called.
    stateMachinepackman();
    stateMachineOreo_1();
    stateMachineOreo_2();
    stateMachineOreo_3();
    stateMachineOreo_4();

};

