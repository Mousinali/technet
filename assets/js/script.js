//Image Zoom
document.addEventListener("DOMContentLoaded", function () {
  let revealContainers = document.querySelectorAll(".reveal");

  revealContainers.forEach((container) => {
    let image = container.querySelector(".custom-img img");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    });

    tl.set(container, { autoAlpha: 1 });

    if (container.classList.contains("zoom-out")) {
      tl.from(image, {
        scale: 1.4,
        duration: 1.5,
        ease: "power2.out",
      });
    } else if (
      container.classList.contains("left") ||
      container.classList.contains("right")
    ) {
      let xPercent = container.classList.contains("left") ? -100 : 100;
      tl.from(container, {
        xPercent: xPercent,
        duration: 1.5,
        ease: "power2.out",
      }).from(image, {
        xPercent: -xPercent,
        scale: 1,
        duration: 1.5,
        delay: -1.5,
        ease: "power2.out",
      });
    }
  });
});

// Split text animation
let st = $(".split-text");
if (st.length > 0) {
  gsap.registerPlugin(SplitText);
  st.each(function (index, el) {
    el.split = new SplitText(el, {
      type: "lines,words,chars",
      linesClass: "tp-split-line",
    });
    gsap.set(el, {
      perspective: 400,
    });

    let charsAnimation = {
      opacity: 0.01,
    };

    if ($(el).hasClass("right")) {
      charsAnimation.x = "50";
    } else if ($(el).hasClass("left")) {
      charsAnimation.x = "-50";
    } else if ($(el).hasClass("up")) {
      charsAnimation.y = "80";
    } else if ($(el).hasClass("down")) {
      charsAnimation.y = "-80";
    }

    gsap.set(el.split.chars, charsAnimation);

    el.anim = gsap.to(el.split.chars, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      x: "0",
      y: "0",
      rotateX: "0",
      scale: 1,
      opacity: 1,
      duration: 0.4,
      stagger: 0.02,
    });
  });
}

function heroAnimation() {
  window.addEventListener("load", () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".hero h1:not(.split-text), .hero h1 .split-text ~ *", {
      opacity: 0,
      y: 40,
      duration: 0.8,
    });

    tl.from(
      ".hero p",
      {
        opacity: 0,
        y: 30,
        duration: 0.7,
      },
      "-=0.4",
    );

    tl.from(
      ".hero .flex.-space-x-4 img",
      {
        opacity: 0,
        y: 20,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.5,
      },
      "-=0.3",
    );

    tl.from(
      ".hero .text-gray-700",
      {
        opacity: 0,
        x: 20,
        duration: 0.6,
      },
      "-=0.4",
    );

    tl.from(
      ".hero .hero-btn",
      {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
      },
      "-=0.3",
    );

    tl.from(
      ".hero .grid > div",
      {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
      },
      "-=0.2",
    );
  });
}
heroAnimation();
