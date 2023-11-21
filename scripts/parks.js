"use strict"

window.onload = function (_event) {
  const locationSelect = document.getElementById("locationSelect")

  const parkTypeSelect = document.getElementById("parkTypeSelect")

  populateLocation(locationsArray, locationSelect)
  populateParkType(parkTypesArray, parkTypeSelect)

  const form = document.getElementById("form")
  form.onsubmit = renderCard
  form.onreset = showAll

  locationSelect.onchange = () => form.requestSubmit()
  parkTypeSelect.onchange = () => form.requestSubmit()
}

function renderCard(event) {
  event.preventDefault()
  const submitForm = event.target
  const chosenLocation = submitForm.elements.locationSelect.value
  const chosenParkType = submitForm.elements.parkTypeSelect.value

  let html = ""

  for (const currentPark of nationalParksArray) {
    const locationMatches = currentPark.State === chosenLocation
    const parkTypeMatches = currentPark.LocationName.includes(chosenParkType) === true
    const noLocation = chosenLocation === "no"
    const noParkType = chosenParkType === "no"

    if (locationMatches && parkTypeMatches) {
      html += buildCard(currentPark)
    } else if (locationMatches && noParkType) {
      html += buildCard(currentPark)
    } else if (noLocation && parkTypeMatches) {
      html += buildCard(currentPark)
    } else if (noLocation && noParkType) {
      html += buildCard(currentPark)
    }
  }
  const result = document.getElementById("resultDiv")
  result.innerHTML = html
}

function showAll(event) {
  event.preventDefault()
  let html = ""
  for (const currentPark of nationalParksArray) {
    html += buildCard(currentPark)
  } const result = document.getElementById("resultDiv")
  result.innerHTML = html
}

function buildCard(park) {
  return `
    <div class="container">
        <div class="card text-center">
          <div class="card-header"></div>
          <div class="card-body">
            <h2 class="card-title">${park.LocationName}</h2>
            <p class="card-text">${park.Address} , ${park.City}, ${park.State} ${park.ZipCode}</p>
          </div>
        <div id="footer"class="card-footer text-body-secondary">
        ${populatePhoneNumber(park)} ${populateFax(park)} ${populateLink(park)}</div>
      </div>
    </div>
  `
}

function populateLink(parks) {
  let hasLink = parks.hasOwnProperty("Visit")
  if (hasLink === true) {
    return `<a class="btn" role="button" href="${parks.Visit}">Visit Website</a>`
  } return ``
}

function populatePhoneNumber(parks) {
  let hasPhone = parks.Phone
  if (hasPhone === 0) {
    return ``
  }

  return `<div class="d-inline btn" disabled>Call: ${hasPhone}</div>`
}

function populateFax(parks) {
  let hasFax = parks.Fax
  if (hasFax === 0) {
    return ``
  }

  return `<div class="d-inline btn" disabled>Fax: ${hasFax}</div>`
}

function populateLocation(locationsArray, select) {
  let html = ``
  for (let index = 0; index < locationsArray.length; index += 1) {
    const currentLocation = locationsArray[index]
    html += `<option value="${currentLocation}">${currentLocation}</option>`
  }
  select.innerHTML += html
}

function populateParkType(parkTypesArray, select) {
  let html = ``
  for (let index = 0; index < parkTypesArray.length; index += 1) {
    const currentParkType = parkTypesArray[index]
    html += `<option value="${currentParkType}">${currentParkType}</option>`
  }
  select.innerHTML += html
}
