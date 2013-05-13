function StateMachine(description, elementToAttach) {
    //creating the state table array
    this.stateTable = new Array();
    //referring to the current object or element by the this
    var self = this;
    //setting the first state in the table to the current state
    this.currentState = description.states[0].name;
    //setting the element attached to the state machine to the attached element of this state machine
    this.attachedElement = elementToAttach;


    //loop to go over the description array passed and generate the stateTable
    for (var i = 0; i < description.states.length; i++)
    {
        //Setting the state to another array to fill in the input, action and
        //end State
        this.stateTable[description.states[i].name] = new Array();

        for (var r = 0; r < description.states[i].transitions.length; r++)
        {
            //setting up and storing the transitions details
            this.stateTable[description.states[i].name][description.states[i].transitions[r].input] =
            {
                endState: description.states[i].transitions[r].endState,
                action: description.states[i].transitions[r].action
            };
        }

    }

    //the following statements are attaced evenlisteners to each of the distinct events:
    elementToAttach.addEventListener("mousedown",
    function() {
        self.updateState("mouseDown")
    });
    elementToAttach.addEventListener("mouseout",
    function() {
        self.updateState("mouseOut")
    });
    elementToAttach.addEventListener("mouseup",
    function() {
        self.updateState("mouseUp")
    });
    elementToAttach.addEventListener("mousemove",
    function() {
        self.updateState("mouseMove")
    });
    //the keypress event is particularly unique because it happens in the
    //scope of the window not the element it self.
    window.addEventListener("keypress",
    function() {
        self.updateState("keyPress")
    });
    elementToAttach.addEventListener("click",
    function() {
        self.updateState("click")
    });
    elementToAttach.addEventListener("mousein",
    function() {
        self.updateState("mouseIn")
    });
    //when the timer event is passed , an event is done for 30 milliseconds
    setInterval(function() {
        self.updateState("TimerTick30Ms")
    },
    30);



}
//this is the updatedState function prototype that acts on the attached element
//each time the state of the object is changed
StateMachine.prototype.updateState = function(input)
 {
    //this is the cell for the current state through which the action will
    //be performed based on the input and the transition to the end state will happen
    var cell = this.stateTable[this.currentState][input];
    //if there is input and action meaning the current state does handle this input
    if (cell != null)
    {
        //Now if the input is the timer
        if (input == "TimerTick30Ms")
        {
            //perform the action
            cell.action(null, this.attachedElement)
        }
        //GET THE EVENT and perform the action
        cell.action(window.event, this.attachedElement);
        //set the current state to the end state (transition)
        this.currentState = cell.endState;
    }



}


//State machine recieved input and changes the current state or updates it
