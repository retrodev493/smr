window.addEventListener("load", () => {
  // header

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

document.addEventListener("DOMContentLoaded", function () {
  const readMoreButton = document.querySelector(".read-more");
  const paragraph = document.querySelector(".line-clamp");

  readMoreButton.addEventListener("click", function () {
    if (paragraph.classList.contains("line-clamp")) {
      paragraph.classList.remove("line-clamp");
      readMoreButton.textContent = "Read Less";
    } else {
      paragraph.classList.add("line-clamp");
      readMoreButton.textContent = "...Read More";
    }
  });
});


const myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('show.bs.modal', event => {
  lenis.stop();
})
myModalEl.addEventListener('hide.bs.modal', event => {
  lenis.start();
})


