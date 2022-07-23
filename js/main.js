// header -slide

var slideIndex1 = 0;
showSlides1();

function showSlides1() {
    var i1;
    var slides1 = document.getElementsByClassName("mySlides1");
    for (i1 = 0; i1 < slides1.length; i1++) {
        slides1[i1].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) {slideIndex1 = 1}
    slides1[slideIndex1-1].style.display = "block";
    setTimeout(showSlides1, 2500); // Change image every 2 seconds
}


// mobile
const nav = document.querySelector('#navb');
const navBtn = document.querySelector('#nav-baton');
const navBtnImg = document.querySelector('#nav-baton-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
      navBtnImg.src = "./image/close.svg";
    } else {
      navBtnImg.src = './image/drop.svg';
    }
}

AOS.init();

// modal1

// Get the modal
var modal1 = document.getElementById("myModal1");
// Get the button that opens the modal
var mbtn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
mbtn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

// modal2
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var mbtn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
mbtn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// modal3

var modal3 = document.getElementById("myModal3");
// Get the button that opens the modal
var mbtn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
mbtn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

// gal
//10
var modal10 = document.getElementById('myModal10');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img10 = document.getElementById('myImg10');
var modalImg10 = document.getElementById("img10");
var captionText10 = document.getElementById("caption10");
img10.onclick = function(){
    modal10.style.display = "block";
    modalImg10.src = this.src;
    captionText10.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span10 = document.getElementsByClassName("close10")[0];

// When the user clicks on <span> (x), close the modal
span10.onclick = function() {
  modal10.style.display = "none";
}

// 11
var modal11 = document.getElementById('myModal11');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById('myImg11');
var modalImg11 = document.getElementById("img11");
var captionText11 = document.getElementById("caption11");
img11.onclick = function(){
    modal11.style.display = "block";
    modalImg11.src = this.src;
    captionText11.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span11 = document.getElementsByClassName("close11")[0];

// When the user clicks on <span> (x), close the modal
span11.onclick = function() {
  modal11.style.display = "none";
}

// 12
var modal12 = document.getElementById('myModal12');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img12 = document.getElementById('myImg12');
var modalImg12 = document.getElementById("img12");
var captionText12 = document.getElementById("caption12");
img12.onclick = function(){
    modal12.style.display = "block";
    modalImg12.src = this.src;
    captionText12.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span12 = document.getElementsByClassName("close12")[0];

// When the user clicks on <span> (x), close the modal
span12.onclick = function() {
  modal12.style.display = "none";
}

// 13

var modal13 = document.getElementById('myModal13');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img13 = document.getElementById('myImg13');
var modalImg13 = document.getElementById("img13");
var captionText13 = document.getElementById("caption13");
img13.onclick = function(){
    modal13.style.display = "block";
    modalImg13.src = this.src;
    captionText13.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span13 = document.getElementsByClassName("close13")[0];

// When the user clicks on <span> (x), close the modal
span13.onclick = function() {
  modal13.style.display = "none";
}

// 14

var modal14 = document.getElementById('myModal14');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img14 = document.getElementById('myImg14');
var modalImg14 = document.getElementById("img14");
var captionText14 = document.getElementById("caption14");
img14.onclick = function(){
    modal14.style.display = "block";
    modalImg14.src = this.src;
    captionText14.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span14 = document.getElementsByClassName("close14")[0];

// When the user clicks on <span> (x), close the modal
span14.onclick = function() {
  modal14.style.display = "none";
}

// 15

var modal15 = document.getElementById('myModal15');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img15 = document.getElementById('myImg15');
var modalImg15 = document.getElementById("img15");
var captionText15 = document.getElementById("caption15");
img15.onclick = function(){
    modal15.style.display = "block";
    modalImg15.src = this.src;
    captionText15.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span15 = document.getElementsByClassName("close15")[0];

// When the user clicks on <span> (x), close the modal
span15.onclick = function() {
  modal15.style.display = "none";
}

// 16

var modal16 = document.getElementById('myModal16');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img16 = document.getElementById('myImg16');
var modalImg16 = document.getElementById("img16");
var captionText16 = document.getElementById("caption16");
img16.onclick = function(){
    modal16.style.display = "block";
    modalImg16.src = this.src;
    captionText16.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span16 = document.getElementsByClassName("close16")[0];

// When the user clicks on <span> (x), close the modal
span16.onclick = function() {
  modal16.style.display = "none";
}

// 17

var modal17 = document.getElementById('myModal17');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img17 = document.getElementById('myImg17');
var modalImg17 = document.getElementById("img17");
var captionText17 = document.getElementById("caption17");
img17.onclick = function(){
    modal17.style.display = "block";
    modalImg17.src = this.src;
    captionText17.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span17 = document.getElementsByClassName("close17")[0];

// When the user clicks on <span> (x), close the modal
span17.onclick = function() {
  modal17.style.display = "none";
}

// 18
var modal18 = document.getElementById('myModal18');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img18 = document.getElementById('myImg18');
var modalImg18 = document.getElementById("myImg18");
var captionText18 = document.getElementById("caption18");
img18.onclick = function(){
    modal18.style.display = "block";
    modalImg18.src = this.src;
    captionText18.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span18 = document.getElementsByClassName("close18")[0];

// When the user clicks on <span> (x), close the modal
span18.onclick = function() {
  modal18.style.display = "none";
}

// 19

var modal19 = document.getElementById('myModal19');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img19 = document.getElementById('myImg19');
var modalImg19 = document.getElementById("myImg19");
var captionText19 = document.getElementById("caption19");
img19.onclick = function(){
    modal19.style.display = "block";
    modalImg19.src = this.src;
    captionText19.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span19 = document.getElementsByClassName("close19")[0];

// When the user clicks on <span> (x), close the modal
span19.onclick = function() {
  modal19.style.display = "none";
}

// 20

var modal20 = document.getElementById('myModal20');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img20 = document.getElementById('myImg20');
var modalImg20 = document.getElementById("myImg20");
var captionText20 = document.getElementById("caption20");
img20.onclick = function(){
    modal20.style.display = "block";
    modalImg20.src = this.src;
    captionText20.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span20 = document.getElementsByClassName("close20")[0];

// When the user clicks on <span> (x), close the modal
span20.onclick = function() {
  modal20.style.display = "none";
}

// 21

var modal21 = document.getElementById('myModal21');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img21 = document.getElementById('myImg21');
var modalImg21 = document.getElementById("myImg21");
var captionText21 = document.getElementById("caption21");
img21.onclick = function(){
    modal21.style.display = "block";
    modalImg21.src = this.src;
    captionText21.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span21 = document.getElementsByClassName("close21")[0];

// When the user clicks on <span> (x), close the modal
span21.onclick = function() {
  modal21.style.display = "none";
}


