var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/abstract-fractals-outer-space-1920x1080-wallpaper.jpg") {
        myImage.setAttribute('src', 'images/7029688-space-wallpaper.jpg');       
    } else {
        myImage.setAttribute('src', "images/abstract-fractals-outer-space-1920x1080-wallpaper.jpg")
    }
    
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "BIO, " + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Привет, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}