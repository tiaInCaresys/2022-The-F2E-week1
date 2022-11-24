$(function(){
    $('#fullpage').fullpage();
    });

gsap.registerPlugin(ScrollTrigger, TextPlugin);

//firstPage 
gsap.from('.leftCloud', {x:200, duration: 3})
gsap.from('.rightCloud', {x:-200, duration: 3})
gsap.from('.fourth', {y:100,ease:"bounce", duration: 2})
gsap.fromTo('.thirdStar', {autoAlpha: 0.2}, {autoAlpha: 1, duration: 2, repeat: -1})
gsap.fromTo('.thirdStar2', {autoAlpha: 0.2}, {autoAlpha: 1, duration: 2, repeat: -1})

//文字輪播
gsap.to(".loop", {   
xPercent: "-50", 
ease: "none",
duration: 10,
repeat: -1,
});

//滾動控制頁
const srollTL = gsap.timeline({
scrollTrigger: {
    trigger: ".fourContent", 
    pin: true,
    scrub: true,
},
});   

srollTL.to(".week-left-1", { yPercent: "-100" });
srollTL.to(".week-right-1", { yPercent: "100" }, "<");
srollTL.to(".week-left-2", { yPercent: "-100" });
srollTL.to(".week-right-2", { yPercent: "100" }, "<");


//fifthPage
gsap.fromTo(
    ".fif",
    0,
    {
      visibility: "hidden",
    },
    {
      visibility: "visible",
      repeat: -1,
      yoyo: true, 
      repeatDelay: 0.3, 
    }
  );

const fif = document.querySelector(".fif")
gsap.utils.toArray(".animation").forEach((element) => {
  if (
    element.classList.contains("from-left") ||
    element.classList.contains("from-right")
  ) {
   hide(element); 

    ScrollTrigger.create({  
     trigger: element,
     trigger: fif,
      onEnter: function () {
        animated(element); 
      },
      onEnterBack: function () {
        animated(element);
      },
      onLeave: function () {
        hide(element);
      },
    });
  } 


});

function animated(element) {
    	let x = 0;
    
     
      if (element.classList.contains("from-left")) { 
        x = -100; 
      } else if (element.classList.contains("from-right")) { //
        x = 100;  
      }
    
      element.style.transform = `translate(${x}px, 0px)`;
    
      gsap.fromTo(
        element,
        { x: x, y: 0, opacity: 0, visibility: "hidden" },
        {
          duration: 1,
          delay: 1,
          x: 0,
          y: 0,
          visibility: "visible",
          opacity: "1",
          ease: "expo", 
          overwrite: "auto",
        }
      );
    }

    function hide(element) {
        gsap.set(element, { opacity: 0, visibility: "hidden" });
      }