const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if(hamburger){
    hamburger.addEventListener("click", ()=>{
        navList.classList.toggle("open");
    })
}


// // Popup
// const popup = document.querySelector(".popup");
// const closePopup = document.querySelector(".popup-close");

// if (popup) {
//   closePopup.addEventListener("click", () => {
//     popup.classList.add("hide-popup");
//   });

//   window.addEventListener("load", () => {
//     setTimeout(() => {
//       popup.classList.remove("hide-popup");
//     }, 1000);
//   });
// }


// product Detail

const smallImages = document.querySelectorAll('.small-image');
const largeImage = document.querySelector('.large-image');

smallImages.forEach((smallImg) => {
    smallImg.addEventListener('click', () => {
        smallImages.forEach((img) => img.classList.remove('active'));
        smallImg.classList.add('active');
        const newImageSrc = smallImg.src.replace('-small', '-large');
        largeImage.src = newImageSrc;
    });
});