//Fungsi untuk memvalidasi Form

let indexSlide = 0;
nextSlide();
function validateForm(){
    const usernameInput = document.getElementById('username-input').value;
    const emailInput = document.getElementById('email-input').value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //console.log(usernameInput);
    if (usernameInput == '' ){
        alert('Your Name must be filled');
    }
    //console.log(emailInput);
    if (emailInput == ''){
        alert('Email Address must be filled');
    }
    
    if (!emailRegex.test(emailInput)) {
        alert("Format email salah.");
    } 
    const interestInput = document.getElementById('interest-input').value;
    console.log(interestInput);
    if (interestInput == ''){
        alert('Please select your interest');
    }
    else alert('Thank you. We will contact you soon');
 }

 function nextSlide(){
    showBanner(indexSlide += 1);
 }

 function showBanner(n){
    const imageList = document.getElementsByClassName('banner-img');
    console.log(imageList);
    console.log(imageList.length);
    console.log(n);
    if (n > imageList.length - 1) indexSlide = 0;
    // Hide semua banner
    for (let i = 0; i < imageList.length; i++){
        imageList[i].style.display = "none";
    }
    // Show 1 Banner sesuai Posisi yang dinginkan
    imageList[indexSlide].style.display = "block"
 }
setInterval(nextSlide, 2500);