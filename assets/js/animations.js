window.addEventListener("load", () => {
  // header
//   gsap.from(".banner-wrapper", { opacity: 0, duration: 1 });

  gsap.registerPlugin(ScrollTrigger);

  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-count");

    gsap.to(counter, {
      innerText: target,
      duration: 2,
      snap: { innerText: 1 },
      ease: "power1.inOut",
      onUpdate: function () {
       
        const currentCount = Math.ceil(counter.innerText);
        counter.childNodes[0].nodeValue = currentCount; 
      },
      scrollTrigger: {
        trigger: counter,
        start: "top bottom",
        end: "top top",
       
      },
    });
  });


  const counterfraction = document.querySelectorAll(".counterfraction");
  counterfraction.forEach((counter) => {
    const target = parseFloat(counter.getAttribute("data-count"));

    if (!Number.isInteger(target)) {
     
      gsap.to(counter, {
        innerText: target,
        duration: 2,
        snap: { innerText: 0.1 }, 
        ease: "power1.inOut",
        onUpdate: function () {
          const currentCount = parseFloat(counter.innerText);
          counter.childNodes[0].nodeValue = currentCount.toFixed(1);
        },
        scrollTrigger: {
          trigger: counter.parentElement, 
          start: "top bottom",
          end: "top top",
        },
      });
    }
  });

  // secrtion fade effect

  const sections = document.querySelectorAll(".pop-fade");
  sections.forEach((section) => {
    gsap.from(section, {
      y: 150,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top top",
      },
    });
  });
});

// lenis

const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 900);
});

gsap.ticker.lagSmoothing(0);

// video btn functionality

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById('myVideo');
  const playButton = document.getElementById('playButton');
  const playIcon = document.querySelector('.play-icon');
  const pauseIcon = document.querySelector('.pause-icon');

  playButton.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      video.pause();
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  });
});

// homebanner video play/pause functionality

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
});


document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll('#video1, #video2, #video3');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.play();
          } else {
              entry.target.pause();
              entry.target.currentTime = 0; 
          }
      });
  }, { threshold: 0.5 }); 
  
  videos.forEach(video => {
      video.pause(); 
      observer.observe(video); 
  });
});