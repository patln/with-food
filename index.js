// Preloader to do opacity transition with a delay before display none
$(window).on("load", function() {
  let loader = $(".preloader");
  // window.scroll(top);
  loader.removeClass("--not-loaded");
  setTimeout(hideLoader, 3000);
});

function hideLoader() {
  $(".preloader").addClass("--hidden");
}



//Navbar on scroll
$(window).on("scroll", function(){
  let scrollPos = window.scrollY;
  let height = window.innerHeight;
  let nav = $(".nav");

  //navbar reveals after scrolling 30%
  if (scrollPos === 0) {
    nav.css("background-color", "rgba(0, 0, 0, 0)");
    nav.css("-webkit-backdrop-filter", "blur(0px)");
    nav.css("backdrop-filter", "blur(0px)");
  }

  else {
    nav.css("background-color", "rgba(0, 0, 0, .8");
    nav.css("-webkit-backdrop-filter", "blur(10px)");
    nav.css("backdrop-filter", "blur(10px)");
  }
});


//Scrolling listener for background color change
$(window).on("scroll", function() {
  let element = $("#section-4");
	let elementTop = element.offset().top;
  let elementBot = elementTop + element.outerHeight();
  let section = $("#section-4");

	// checking whether fully visible
	if(elementTop >= 0 && elementBot <= window.innerHeight) {
		console.log('Element is fully visible in screen');
    section.css("background-color", "#red");
	}

	// checking for partial visibility
	else if(elementTop < window.innerHeight && position.bottom >= 0) {
		console.log('Element is partially visible in screen');
    section.css("background-color", "#red");
	}

  // else {
  //   section.css("background-color", "#fffffff");
  // }


});



// Swiper and thumbnail swiper setup
const box1 = new Swiper('.hero-thumb-swiper', {
    direction: 'horizontal',
    loop: false,
   // loopedSlides: 3,
    rewind: true,
    speed: 1500,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    breakpoints: {
     320: {
      spaceBetween: 6,
      slidesPerView: "2.5",
      },
    
    800: {
      spaceBetween: 12,
      slidesPerView: "2.5",
      },
      
    1272: {
      spaceBetween: 12,
      slidesPerView: "3.5",
      },
    },
    centeredSlides: true,
    // allowTouchMove: true,
    slideToClickedSlide: true,
  });
  
  const box2 = new Swiper('.hero-body', {
    direction: 'horizontal',
    loop: false,
    //loopedSlides: 3,
    rewind: true,
    speed: 1500,

    slidesPerView: 1,
    centeredSlides: true,
    // allowTouchMove: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  box2.controller.control = box1;
  box1.controller.control = box2;
  


  