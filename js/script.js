
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () => {

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

/*function loader(){
  document.querySelector('.loader-container').classList.add('fadeout');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
*/
/*
let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");
window.onload = () => {
  //Geolocation APU is used to get geographical position of a user and is available inside the navigator object
  if (navigator.geolocation) {
    //returns position(latitude and longitude) or error
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
  } else {
    //For old browser i.e IE
    locationDiv.innerText = "The browser does not support geolocation";
  }
};
//Error Checks
const checkError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "Please allow access to location";
      break;
    case error.POSITION_UNAVAILABLE:
      //usually fired for firefox
      locationDiv.innerText = "Location Information unavailable";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "The request to get user location timed out";
  }
};
const showLocation = async (position) => {
  //We user the NOminatim API for getting actual addres from latitude and longitude
  let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
  );
  //store response object
  let data = await response.json();
  locationDiv.innerText = `${data.address.city}, ${data.address.country}`;
};


*/
const Name = document.getElementById('PartnerName');

/*
Name.onchange = function(e) {
  Name.value = e.target.value;
};*/

function loadNewModel(ModelName1,ModelName2) {
  localStorage.setItem("ModelName1", ModelName1);
  localStorage.setItem("ModelName2", ModelName2);
    document.getElementById("Mini waffle").href = "index2.html";
}

function validateForm() {
  let x = document.forms["myForm"]["Name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["Number"].value;
  if (y == "" || y.length <= 9 ) {
    alert("Please enter full number");
    return false;   
  }
  let z = document.forms["myForm"]["Rating"].value;
  if (z <= 0 || z == "") {
    alert("Please Give Rating");
    return false;
  }
}



String.prototype.toProperCase = function () { return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }); };

window.addEventListener("load", function () {
  // uncomment next line
  // const url = new URL(location.href)
  // delete next line
  const url = new URL(location.href);
  //const url = new URL("http://127.0.0.1:5500/index.html?PartnerName=Fiza+Shaikh#order");
  let naam = url.searchParams.get("PartnerName")

  naam = naam ? naam.toProperCase() : "";
  if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.setItem("PartnerName", naam);
    // Retrieve
    document.getElementById("PartnerName").innerHTML = localStorage.getItem("PartnerName");
  }
  const temp = '';
  if (naam != '') {
    Name.value= naam;
    temp = naam;
  }
  else if (temp != '') {

    Name.setAttribute(value) = temp;
  }
  else {
    Name.setAttribute(value) = 'Store Partner Name';
  }
})




