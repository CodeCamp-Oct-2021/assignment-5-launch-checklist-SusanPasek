// Write your JavaScript code here!
//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let faultyList = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let coPilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus"); 
 
   
   form.addEventListener("submit", function(event) {
       event.preventDefault();
       let pilotName = document.querySelector("input[name=pilotName]").value;
       let coPilotName = document.querySelector("input[name=copilotName]").value;
       let fuelAmt = document.querySelector("input[name=fuelLevel]").value;
       let cargoMass = document.querySelector("input[name=cargoMass]").value;
         
       if (pilotName === "" || coPilotName === "" ||
           fuelAmt === "" || cargoMass === "" ) {
               alert("All fields are required");
              // event.preventDefault();
       }else if (!isNaN(pilotName)|| !isNaN(coPilotName)|| isNaN(fuelAmt) || isNaN(cargoMass)) {
         alert("input valid data")
       }
       else {
         let validArr = [pilotName, coPilotName, fuelAmt, cargoMass];
      
         formSubmission(document, faultyList, pilotStatus, coPilotStatus, fuelStatus, cargoStatus, validArr);
       }
      
       
   });

   
  
   let listedPlanetsResponse = myFetch();
      
});