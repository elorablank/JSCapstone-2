# JSCapstone-2
Enjoy the outdoors capstone-2 project

This project is for pluralsight to showcase our ability to use javascript and html.

The purpose of this website was to create filters or render data using data already provided 
    to make a functioning website that a user could interact with. 

Pages:
Home page pt.1 <img src="/imagesGen/homePage1.png">
Home page pt.2 <img src="/imagesGen/homePage2png.png">
Parks page pt.1 <img src="/imagesGen/parkPage1.png">
Parks page pt.2 <img src="/imagesGen/parkPage2.png">
Mountains page pt.1 <img src="/imagesGen/mountainPage1.png">
Mountains page pt.2 <img src="/imagesGen/mountainPage2.png">

Interesting pieces of code that I wrote:
<img src="/imagesGen/interestingCode2.png">

The populateLink function searches thorugh the away to see if the nationalParksArray[index] has an property called Visit
    and then populates a <a></a> into my buildCard function to display the stirng in the Visit property
    This way, only nationalParksArray[index] with a Visit property will show a link :D

The populatePhoneNumber and populateFax functions work similary, except this time it's chekcing to see
    if the value of nationalParksArray.Fax or nationalParksArray.PhoneNumber = 0 because every nationalParksArray contained
    a Fax and PhoneNumber value however some of them had their value = 0

Also it was interesitng trying to figure out what the async function did in Mountains.js, and I'm proud I was able 
    to grasp the basic concept of it. 
