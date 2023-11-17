"use strict"
//OLD CODE I AM KEEPING FOR REFRENCE INCASE PLEASE INGORE IT HAS NO FUNCTION OR USE IN THIS PROJECT
window.onload = function (_event) {
    const locationSelect = document.getElementById("locationSelect")
    locationSelect.onchange = renderParkCard
    
    const parkTypeSelect = document.getElementById("parkTypeSelect")
    parkTypeSelect.onchange = renderParkCard

    populateLocation(locationsArray, locationSelect)
    populateParkType(parkTypesArray, parkTypeSelect)

}

function populateLocation (locationsArray, select) {
    let html = "<option selected>Please choose park location!</option>"
    for (let index = 0; index < locationsArray.length; index += 1) {
        const currentLocation = locationsArray[index]
        html += `<option value="${currentLocation}">${currentLocation}</option>`
    }
    select.innerHTML = html
}

function populateParkType (parkTypesArray, select) {
    let html = "<option selected>Please choose park location!</option>"
    for (let index = 0; index < parkTypesArray.length; index += 1) {
        const currentParkType = parkTypesArray[index]
        html += `<option value="${currentParkType}">${currentParkType}</option>`
    }
    select.innerHTML = html
}

function renderParkCard (event) {
    const selectedTarget = event.target.value
    let html = ""

    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const park = nationalParksArray[index];
        if (selectedTarget === park.State) {
            html += `<div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">${park.LocationName}</h5>
              <p class="card-text">${park.Address} , ${park.City}, ${park.State}</p>

            </div>
            <div class="card-footer text-body-secondary">
              <2 days ago>
            </div>
          </div>`
        } else if (park.LocationName.includes(selectedTarget) === true) {
            html += `<div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">${park.LocationName}</h5>
              <p class="card-text">${park.Address} , ${park.City}, ${park.State}</p>

            </div>
            <div class="card-footer text-body-secondary">
              <2 days ago>
            </div>
          </div>`
        } 
        // else if (park.Visit.includes("https")) {
        //   html += `<a class="btn" role="button" href="${park.Visit}">Visit Website</a>`
        // }
        const resultDiv = document.getElementById("resultDiv")
        resultDiv.innerHTML = html
    } 
}

//let someLink = nationalParksArray.some((park) => Visit in park)


//funciton populateFooter (buildCard)


//OLD HTML FOR MOUNTAINS PAGE
      //   html += `
      //   <div class="container">
      //     <div class="row">
      //       <div class="col">
      //         <div class="card">
      //         <img src="/data/images/${mountain.img}" alt="fesff">
      //         </div>
      //       </div>
      //     <div class="col">
      //       <div class="card">
      //         <div class="card-body">
      //             <h5 class="card-title">${mountain.name}</h5>
      //             <h6 class="card-subtitle mb-2 text-body-secondary">Effort: ${mountain.effort} 
      //             Elevation: ${mountain.elevation}</h6>
      //             <p class="card-text">${mountain.desc}</p>
      //             <p>Sunrise time ${data.results.sunrise}</p>
      //             <p>Sunset time ${data.results.sunset}</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>`