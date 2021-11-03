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
if (testInput === ''){
    return "Empty"
}
if (isNaN(testInput)){//true
    return "Not a number";
}
if (!isNaN(testInput)){//false
    return "Is a number"
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

    console.log(h2.innerHTML)
    
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    // console.log(pilot);
    // console.log(copilot);
    // console.log(fuelLevel);
    // console.log(cargoLevel);
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("Please enter all information");
        event.preventDefault();
    }
    else if (validateInput(pilot) === "Is a number" || validateInput(copilot)=== "Is a number"){
        alert("Please enter a valid name for Pilot name or Co-pilot name (or both)");
        event.preventDefault();
    }
    else if ((validateInput(fuelLevel)=== "Not a number") || (validateInput(cargoLevel)=== "Not a number")){
        alert("Please enter valid number for Fuel level or Cargo level (or both)");
        event.preventDefault();
    }
     else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
     }
        if (fuelLevel <= 10000) {
           faultyItems.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "red";
           fuelStatus.innerHTML = "Fuel level too low for launch";
        } else {
           fuelStatus.innerHTML = "Fuel level high enough for launch";
        }
        if (cargoLevel >= 10000) {
           faultyItems.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "red";
           cargoStatus.innerHTML = "Cargo mass too high for launch";
        } else {
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        if (cargoLevel <= 10000 && fuelLevel >= 10000) {
           launchStatus.innerHTML = "Shuttle Ready for Launch";
           launchStatus.style.color = "green";
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
           faultyItems.style.visibility = "hidden";
        }
        event.preventDefault();
}

//THIS FUNCTION IS COMPLETE
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}
//THIS FUNCTION IS COMPLETE
function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
