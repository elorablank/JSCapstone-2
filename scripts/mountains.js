"use strict"
let selectedMountainName = ""
window.onload = function (_event) {
  const mountainSelect = document.getElementById("mountainSelect")
  mountainSelect.onchange = renderMountainCard

  populateMountain(mountainsArray, mountainSelect)
}

function populateMountain(mountainsArray, selectMountain) {
  let html = `<option value="no">Please choose a mountain!</option>`
  for (let index = 0; index < mountainsArray.length; index += 1) {
    const currentMountain = mountainsArray[index]
    html += `<option value="${currentMountain.name}">${currentMountain.name}</option>`
  }
  selectMountain.innerHTML = html
}

async function getSunsetForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  let data = await response.json();
  return data;
}

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }


function renderMountainCard(event) {
  selectedMountainName = event.target.value

  // const promise = fetchProducts();
  // let answer = promise.then((data) => console.log(data[0].name));
  // let promise = getSunsetForMountain()
  // let sunset = promise.then((data) => console.log(data.results.sunset))
  const selectedMountain = mountainsArray.find(currentMountain => currentMountain.name === selectedMountainName)
  getSunsetForMountain(selectedMountain.coords.lat, selectedMountain.coords.lng)
    .then(drawMountainCard)
}

function drawMountainCard (data) {
  
    console.log(data.results.sunrise)
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
      const mountain = mountainsArray[index]

      if (mountain.name === selectedMountainName) {
      html += `<div class="container mainContainer mb-5">
      <div class="rounded-3 card">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">${mountain.name}</h1>
          <p class="fs-4 px-5 py-2">${mountain.desc}</p>
          <p class="fs-4">The sunrise time is ${data.results.sunrise}, and
          the sunset time is ${data.results.sunset}</p>
          <h5>
            <span class="badge">Effort: ${mountain.effort}</span> 
            <span class="badge">Elevation: ${mountain.elevation}</span>
          </h5>
        </div>
      </div>
    </div>
    <div class="container fill mb-5">
      <img src="/data/images/${mountain.img}" alt="${mountain.name}">
    </div>`
        break
      } 
    }
    const resultDiv = document.getElementById("resultDiv")
    resultDiv.innerHTML = html
  }
