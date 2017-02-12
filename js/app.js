var photos = [
  {
    name: "Katowice-Karuzela",
    location: "img/1024px-Katowice_-_Karuzela.jpg",
    uploadUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katowice_-_Karuzela.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File%3AKatowice_-_Karuzela.jpg",
    attribution: "By Lestat (Jan Mehlich) (Own work)",
    licenseName: "GDFL",
    licenseUrl: "http://www.gnu.org/copyleft/fdl.html"
  },
  {
    name: "Merry-go-round in der Mönckebergstraße in Hamburg-Altstadt",
    location: "img/Merrygoround_01_KMJ.jpg",
    uploadUrl: "none",
    pageUrl: "https://commons.wikimedia.org/wiki/File:Merrygoround_01_KMJ.jpg",
    attribution: "Photography by de:Benutzer:KMJ",
    licenseName: "GNU Free Documentation License",
    licenseUrl: "https://commons.wikimedia.org/wiki/Commons:GNU_Free_Documentation_License,_version_1.2"
  },
  {
    name: "Double-decker carousel manufactured by Preston & Barbieri, Phantasialand, Berlin, Germany",
    location: "img/PhantasiaABDK.jpg",
    uploadUrl: "https://upload.wikimedia.org/wikipedia/commons/0/01/PhantasiaABDK.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File%3APhantasiaABDK.jpg",
    attribution: "By Myotis (Own work)",
    licenseName: "CC BY-SA 3.0",
    licenseUrl: "http://creativecommons.org/licenses/by-sa/3.0"
  },
  {
    name: "A old-fashioned style carousel in southern France",
    location: "img/ManegeAEtage.JPG",
    uploadUrl: "https://upload.wikimedia.org/wikipedia/commons/2/22/ManegeAEtage.JPG",
    pageUrl: "https://commons.wikimedia.org/wiki/File%3AManegeAEtage.JPG",
    attribution: "By AlNo (discuter/talk/hablar/falar)",
    licenseName: "GFDL",
    licenseUrl: "http://www.gnu.org/copyleft/fdl.html"
  },
  {
    name: "Square des Batignolles (Paris, France)",
    location: "img/Square_des_Batignolles_20060815_12.jpg",
    uploadUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Square_des_Batignolles_20060815_12.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File%3ASquare_des_Batignolles_20060815_12.jpg",
    attribution: "By Georges Seguin (Okki) (Own work)",
    licenseName: "GFDL",
    licenseUrl: "http://www.gnu.org/copyleft/fdl.html"
  }
];

var currentIndex = 1;

function prevImgDisplay() {
  var currentImg = document.getElementsByClassName("img-displayed")[0];
  var prevImg = document.getElementsByClassName("img-off-left")[0];
  var nextImg = document.getElementsByClassName("img-off-right")[0];
  nextImg.src = currentImg.src;
  currentImg.src = prevImg.src;

  //set text to correspond to new current image
  var currentTitle = document.getElementsByClassName("title")[0];
  currentTitle.textContent = photos[currentIndex ].name;
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = photos.length - 1;
  }

  if (currentIndex == 0) {
    var prevIndex = photos.length - 1;
  } else {
    var prevIndex = currentIndex - 1;
  }

  prevImg.src = photos[prevIndex].location;
  updateTextDisplay();
}

function nextImgDisplay() {
  var currentImg = document.getElementsByClassName("img-displayed")[0];
  var prevImg = document.getElementsByClassName("img-off-left")[0];
  var nextImg = document.getElementsByClassName("img-off-right")[0];
  prevImg.src = currentImg.src;
  currentImg.src = nextImg.src;
  currentIndex = (currentIndex + 1) % photos.length;
  nextImg.src = photos[(currentIndex + 1) % photos.length].location;
  updateTextDisplay();
}

function updateTextDisplay() {
  var currentTitle = document.getElementsByClassName("title")[0];
  currentTitle.textContent = photos[currentIndex].name;
  var currentUrl = document.getElementsByClassName("page-url")[0];
  currentUrl.href = photos[currentIndex].pageUrl;
  currentUrl.textContent = photos[currentIndex].pageUrl;
  var currentAttribution = document.getElementsByClassName("attribution")[0];
  currentAttribution.textContent = photos[currentIndex].attribution;
  var currentLicense = document.getElementsByClassName("license")[0];
  currentLicense.textContent = photos[currentIndex].licenseName;
  currentLicense.href = photos[currentIndex].licenseUrl;
}
