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

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();


const firebaseConfig = {
    apiKey: "AIzaSyDBEAG4l32MswTnNSNw3LWXXOX-QM08iiA",
    authDomain: "conicalgaufers.firebaseapp.com",
    databaseURL: "https://conicalgaufers-default-rtdb.firebaseio.com",
    projectId: "conicalgaufers",
    storageBucket: "conicalgaufers.appspot.com",
    messagingSenderId: "1053039680688",
    appId: "1:1053039680688:web:b99ef479d57eb32addef75",
    measurementId: "G-C2EFXB6ZK3"
  };
  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("conicalgaufers");

const View3D("#el", {
    src="ar/BurgerBun.glb"
    ios-src="ar/fender_stratocaster.usdz"
    auto-rotate camera-controls background-color="#2EAFAC"
    quickLook: {
        title: "CUSTOM TITLE",
        allowsContentScaling: false,
        canonicalWebPageURL: "https://github.com/naver/egjs-view3d",
        applePayButtonType: "subscribe",
        callToAction: "CUSTOM BUTTON TEXT",
        checkoutTitle: "CUSTOM TITLE TEXT",
        checkoutSubtitle: "CUSTOM SUBTITLE TEXT",
        price: "100$",
        customHeight: "large"
    },
    webAR: false,
    sceneViewer: false
});