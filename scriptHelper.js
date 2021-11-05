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
};

function validateInput(testInput) {
//test if num, NAN, or blank
    if (testInput === ""){
        return "Empty"
    }
    if (isNaN(testInput)){//true
        return "Not a Number";
    }
    if (!isNaN(testInput)){//false
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    list.style.visibility = "visible";
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        list.style.visibility = "hidden";
        alert("All fields are required!");
    }
     if (validateInput(pilot) === "Is a Number" || validateInput(copilot)=== "Is a Number"){
        list.style.visibility = "hidden";
        alert("Make sure to enter valid information for each field!");
    }
     if ((validateInput(fuelLevel)=== "Not a Number") || (validateInput(cargoLevel)=== "Not a Number")){
        list.style.visibility = "hidden";
        alert("Make sure to enter valid information for each field!");
    }

     if (fuelLevel < 10000 && cargoLevel > 10000) {
           list.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "rgb(199, 37, 78)";
           pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
           copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
           fuelStatus.innerHTML = "Fuel level too low for launch";
           cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        } 
     else if (fuelLevel < 10000 && cargoLevel <= 10000) {
           list.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "rgb(199, 37, 78)";
           pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
           copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
           fuelStatus.innerHTML = "Fuel level too low for launch";
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
        } 
     else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
         } 
      else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
           list.style.visibility = "visible";
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           launchStatus.style.color = "rgb(65, 159, 106)";
           pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
           copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
           fuelStatus.innerHTML = "Fuel level high enough for launch";
           cargoStatus.innerHTML = "Cargo mass low enough for launch";
       }
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
