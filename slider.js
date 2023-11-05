// Hero Crousel

const slider1 = document.querySelector("#glide1");
if(slider1){
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        autoplay: 4000,
        gap: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 1000,
        AnimationTimingFunc: "linear",
    }).mount();
}

