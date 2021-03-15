/***********************************************
Diego Buencamino - 301362822 - CMPT165 D100
ASSIGNMENT 3 SUBMISSION - JS ONLY
************************************************/

// Declaring global variables
var count = 0;
var wrong = 0;

var cbtype;

var timein;
var timeout;

var n;

// Declaring colorset dictionary for normal vision
var cNormal = {
    1 : "Blue",
    2 : "Red",
    3 : "Yellow",
    4 : "Green"
};

// Declaring colorset dictionary for deuteranopic and protanopic vision
var cDeutProt = {
    1: "Blue",
    2: "Brown",
    3: "Yellow",
    4: "Grey"
};

// Declaring colorset dictionary for tritanopic vision
var cTrit = {
    1: "Turquoise",
    2: "Red",
    3: "Grey",
    4: "Sky Blue"
};

// Game consists of 3 functions: driver(), reply(), result()
// driver() begins the game by selecting the random colour and displaying it
// reply() reads user input and checks if the id of button matches id of colour displayed
// Calls to driver() from reply() keeps the game going until if() statement reaches termination
// result() checks if current round count exceeds given round count
// result() terminates driver()-reply() loop if 'if' statement in result() returns true
// result() then calculates average time (ms) and # errors

// eventListener() checks for page load, asks user for colourblindness condition
// Changes box colours and names to be displayed accordingly

function driver() {
    count++;
    if(count <= document.getElementById("rounds").value){
        timein = Date.now();
        n = Math.ceil(Math.random() * 4);

        if(cbtype == "Deuteranopia" || cbtype == "Protanopia"){
            var color = cDeutProt[n];
        }
        else if(cbtype == "Tritanopia"){
            var color = cTrit[n];
        }
        else{
            var color = cNormal[n];
        }
        
        document.getElementById("wincolor").innerHTML = color + " (" + count + "/" + document.getElementById("rounds").value + ")";
    }
}

function reply(buttonid) {
    if(count <= document.getElementById("rounds").value) {
        if(buttonid == n) {
            timeout = Date.now();
            result();
            driver();
        }
        else{
            alert("Incorrect color!")
            wrong++;
        }
    }
}

function result() {
    var t = (timeout - timein);
    var time = 0;
    time += t;
    
    if (count >= document.getElementById("rounds").value) {
        time = time / document.getElementById("rounds").value;
        alert("Average Reaction Time: " + time + "ms\nIncorrect Answers: " + wrong)
    }
}


window.addEventListener("load", function(){
    cbtype = prompt("Please input your colourblindness type.\n(Deuteranopia / Protanopia / Tritanopia)\n\nLeave blank for normal vision.");
            
    if(cbtype == "Deuteranopia" || cbtype == "Protanopia"){
        document.getElementById('1').style.backgroundColor = '#3470B6';
        document.getElementById('2').style.backgroundColor = '#614624';
        document.getElementById('3').style.backgroundColor = '#F5BA4F';
        document.getElementById('4').style.backgroundColor = '#7F7F7F';
    }
    else if(cbtype == "Tritanopia"){
        document.getElementById('1').style.backgroundColor = '#377F91';
        document.getElementById('2').style.backgroundColor = '#D32D45';
        document.getElementById('3').style.backgroundColor = '#7F7F7F';
        document.getElementById('4').style.backgroundColor = '#5ABBD0';
    }
    else{
        document.getElementById('1').style.backgroundColor = '#0000FF';
        document.getElementById('2').style.backgroundColor = '#FF0000';
        document.getElementById('3').style.backgroundColor = '#FFFF00';
        document.getElementById('4').style.backgroundColor = '#00FF00';
    }
});

