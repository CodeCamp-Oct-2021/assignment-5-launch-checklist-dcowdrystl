// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = 
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;
  
}

function validateInput(testInput) {//DONT TOUCH THIS FUNCTION, COMPLETED.
//test if num, NAN, or blank
if (isNaN(testInput)){//true
    return "Not a number";
}
if (!isNaN(testInput)){//false
    return "Is a number"
}
if (testInput === ''){
    return "Empty"
}
     }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementById("faultyItems");
    let h2 = document.getElementsByTagName("h2")[1];

    // console.log(h2.innerHTML)
    
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    if ((validateInput(pilot.value) === "Empty") || (validateInput(copilot.value) === "Empty") || (validateInput(fuelLevel.value) === "Empty") || (validateInput(cargoLevel.value) === "Empty")){
        alert("Please enter all information");
        event.preventDefault();
    }
    else if ((validateInput(pilot.value) === "Is a number") || (validateInput(copilot.value)=== "Is a number")){
        alert("Please enter a valid name for Pilot name or Co-pilot name (or both)");
        event.preventDefault();
    }
    else if ((validateInput(fuelLevel.value)=== "Not a number") || (validateInput(cargoLevel.value)=== "Not a number")){
        alert("Please enter valid number for Fuel level or Cargo level (or both)");
        event.preventDefault();
    }
     else {
        // document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotInput.value + " Ready";
        // document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotInput.value + " Ready";
        
        if (fuelLevel.value <= 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           document.getElementById("launchStatus").style.color = "red";
           document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        } else {
           document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
        if (cargoMass.value >= 10000) {
           document.getElementById("faultyItems").style.visibility = "visible";
           document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
           document.getElementById("launchStatus").style.color = "red";
           document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
        } else {
           document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }
        if (cargoMass.value <= 10000 && fuelLevelInput.value >= 10000) {
           document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
           document.getElementById("launchStatus").style.color = "green";
           document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
           document.getElementById("faultyItems").style.visibility = "hidden";
        }
        event.preventDefault();
}
}
//added = response.json() 
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
