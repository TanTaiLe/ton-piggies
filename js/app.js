import * as $ from './libs/jquery-3.7.1.slim.min.js';
import * as slick from './libs/slick.min.js';
import './libs/popper.min.js';
import './libs/bootstrap.min.js'

jQuery(function () {
  jQuery('.scroll-container').slick({
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        dots: false,
      }
    },]
  })
  jQuery('.scroll-container').on('wheel', e => {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      jQuery('.scroll-container').slick('slickPrev');
    } else {
      jQuery('.scroll-container').slick('slickNext');
    }
  })

  jQuery('.roadmap-slider').slick({
    infinite: false,
    responsive: [{
      breakpoint: 1025,
      settings: 'unslick'
    },]
  });
  jQuery('.roadmap-slider').on('afterChange', (e, currentSlide) => {
    jQuery('#roadmap-index').text(currentSlide.currentSlide + 1);
  })

  jQuery('.games-slider').slick({
    // autoplay: true,
    speed: 500,
  });
  jQuery('.games-slider').on('afterChange', (e, currentSlide) => {
    jQuery('#games-index').text(currentSlide.currentSlide + 1);
  })
})




// Coundown timer
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear(),
  nextYear = yyyy + 1,
  dayMonth = "05/15/",
  birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
  birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
  x = setInterval(function () {

    const now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    if (distance < 0) {
      document.getElementById("headline").innerText = "It's my birthday!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
    //seconds
  }, 0)