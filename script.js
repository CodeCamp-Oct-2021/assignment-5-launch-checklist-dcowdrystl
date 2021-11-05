// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let pilot = (document.querySelector("input[name=pilotName]"));   
    let copilot = (document.querySelector("input[name=copilotName]"));
    let fuelLevel = (document.querySelector("input[name=fuelLevel]"));
    let cargoMass = (document.querySelector("input[name=cargoMass]"));
    let list = document.getElementById("faultyItems")
    list.style.visibility = "hidden";
    
    form.addEventListener("submit", function(event){
     

       event.preventDefault();
     formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
     
    //  if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    //     list.style.visibility = "hidden";
    //     alert("All fields are required!");
    //     event.preventDefault();
    // }
    //  if (validateInput(pilot) === "Is a Number" || validateInput(copilot)=== "Is a Number"){
    //     list.style.visibility = "hidden";
    //     alert("Make sure to enter valid information for each field!");
    //     event.preventDefault();
    // }
    //  if ((validateInput(fuelLevel)=== "Not a Number") || (validateInput(cargoLevel)=== "Not a Number")){
    //     list.style.visibility = "hidden";
    //     alert("Make sure to enter valid information for each field!");
    //     event.preventDefault();
    // }

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