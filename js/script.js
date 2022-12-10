
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
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



const Name = document.getElementById('PartnerName');

/*
Name.onchange = function(e) {
  Name.value = e.target.value;
};*/








String.prototype.toProperCase = function () { return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});};

window.addEventListener("load",function() {
  // uncomment next line
  // const url = new URL(location.href)
  // delete next line
  const url = new URL(location.href);
  //const url = new URL("http://127.0.0.1:5500/index.html?PartnerName=Fiza+Shaikh#order");
  let naam = url.searchParams.get("PartnerName")
  
  naam = naam ? naam.toProperCase() : "";
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("PartnerName", naam);
    // Retrieve
    document.getElementById("PartnerName").innerHTML = localStorage.getItem("PartnerName");
  } 
  const temp='';
  if(naam != '')
  {
    Name.innerText = naam;
    temp = naam;
  }
  else if(temp != ''){
    
    Name.innerText = temp;
  }
  else {
    Name.innerText = 'Store Partner Name';
  }
})
