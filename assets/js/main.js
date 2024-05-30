document.addEventListener("DOMContentLoaded", function() {
  const videoSwiper = new Swiper('.video-swiper', {
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      on: {
          init: function () {
              handleVideoPlayback(this);
          },
          slideChange: function () {
              handleVideoPlayback(this);
          }
      }
  });

  function handleVideoPlayback(swiper) {
      const allVideos = document.querySelectorAll('.video-swiper .swiper-slide video');
      const activeSlide = swiper.slides[swiper.activeIndex];
      const video = activeSlide.querySelector('video');

      allVideos.forEach(v => {
          v.pause();
          v.currentTime = 0;
      });

      if (video) {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      video.play();
                  } else {
                      video.pause();
                      video.currentTime = 0;
                  }
              });
          }, { threshold: 1.0 });

          observer.observe(video);
      }
  }


  const videos = document.querySelectorAll('#video1, #video2, #video3');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.play();
          } else {
              entry.target.pause();
              // entry.target.currentTime = 0; 
          }
      });
  }, { threshold: 0.5 }); 
  
  videos.forEach(video => {
      video.pause(); 
      observer.observe(video); 
  });

});


// menu function

const getBtn = document.querySelector('.mob-btn');
console.log(getBtn);
getBtn.addEventListener('click', e => {
    document.querySelector('body').classList.toggle('show-menu');
})


const getDropDown = document.getElementsByClassName('main-nav');
for ( div of getDropDown){
    var selectLi = div.getElementsByTagName('li');
    for ( li of selectLi){
       if (li.contains(li.querySelector('ul'))) {
        li.classList.add('submenu');
        li.innerHTML += "<i></i>";
        }
    }
}

const getDropDownClick = document.querySelectorAll('.main-nav i');
getDropDownClick.forEach((item) => {
    item.addEventListener('click', e => {
        e.target.parentNode.classList.toggle('open');
    })
})


  var swiper = new Swiper(".homeBanner .mySwiper", {
      cssMode: true,
      loop: true,
        slidesPerView:1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },
      mousewheel: true,
      keyboard: true,
    });

    var swiper = new Swiper(".productSwiper", {
      slidesPerView: 1.05,
      spaceBetween:20,
      loop:true,
        navigation: {
          nextEl: ".product-wrapper .swiper-button-next",
          prevEl: ".product-wrapper .swiper-button-prev",
        },
        breakpoints: {
     
          475: {
            slidesPerView: 1.4,
      spaceBetween:20,

          },
          768: {
            slidesPerView: 2.01,
            spaceBetween:20,

          },
          1024: {
            slidesPerView: 3,
        spaceBetween:0,

          },
          1600: {
            slidesPerView: 4.01,
        spaceBetween:0,

          },
        },
      });
      

      var swiper = new Swiper(".insightsSwiper",{
        spaceBetween: 23,
        slidesPerView:1.1,
        loop:true,
        breakpoints: {
     
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },

      });



      window.addEventListener('scroll', function() {
        var homeBanner = document.querySelector('.homeBanner');
        var smrChat = document.querySelector('.smr-chat');
      
        var bannerRect = homeBanner.getBoundingClientRect();
        var windowHeight = window.innerHeight;
      
        // Show button only when the bottom of homeBanner is in the viewport
        if (bannerRect.bottom <= windowHeight) {
          smrChat.style.opacity = '1';
        } else {
          smrChat.style.opacity = '0';
        }
      });
      