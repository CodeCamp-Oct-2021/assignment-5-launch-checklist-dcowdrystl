// Write your JavaScript code here!
//let list = document.getElementById("faultyItems")
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    // let formSubmit = document.getElementById("formSubmit");
    // let submitForm = document.
    form.addEventListener("submit", function(event){
     
     let pilot = (document.querySelector("input[name=pilotName]"));   
     let copilot = (document.querySelector("input[name=copilotName]"));
     let fuelLevel = (document.querySelector("input[name=fuelLevel]"));
     let cargoMass = (document.querySelector("input[name=cargoMass]"));
     
     let list = document.getElementById("faultyItems")
       event.preventDefault();
     formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
    //  event.preventDefault();
    })
    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let target = pickPlanet(listedPlanets);
       addDestinationInfo(document, target.name, target.diameter, target.star, target.distance, target.moons, target.image);
  
    })
   
});