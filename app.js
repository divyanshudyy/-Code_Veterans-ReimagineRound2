function topButton() {
  const backToTopButton = document.querySelector(".back-to-top");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
      gsap.to(backToTopButton, {
        duration: 0.5,
        display: "none",
        opacity: 0,
      });
    } else if (currentScroll < lastScrollTop) {
      gsap.to(backToTopButton, {
        duration: 0.5,
        display: "block",
        opacity: 1,
      });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
topButton();

Shery.makeMagnet("h1,h2,h3", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

let tl = gsap.timeline();

function menu() {
  const hoverMenus = [
    { fstId: "#exp", scdId: "#explore-cont" },
    { fstId: "#sup", scdId: "#support-cont" },
    { fstId: "#shp", scdId: "#shop-cont" },
    { fstId: "#acc", scdId: "#access-cont" },
    { fstId: "#buis", scdId: "#buisness-cont" },
  ];

  let activeContainer = null;

  hoverMenus.forEach((menu) => {
    const trigger = document.querySelector(menu.fstId);
    const container = document.querySelector(menu.scdId);
    const landingPage = document.querySelector("#page1");

    function showContainer() {
      if (activeContainer && activeContainer !== container) {
        hideContainer(activeContainer);
      }

      container.style.visibility = "visible";
      gsap.to(container, {
        opacity: 1,
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out",
        display: "block",
      });

      activeContainer = container;
    }

    function hideContainer(targetContainer = container) {
      gsap.to(targetContainer, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          targetContainer.style.visibility = "hidden";
          if (activeContainer === targetContainer) {
            activeContainer = null;
          }
        },
      });
    }

    function toggleContainer(event) {
      event.stopPropagation();
      if (activeContainer === container) {
        hideContainer();
      } else {
        showContainer();
      }
    }

    function hideOnClickOutside(event) {
      if (
        activeContainer &&
        !activeContainer.contains(event.target) &&
        event.target !== trigger
      ) {
        hideContainer();
      }
    }

    trigger.addEventListener("click", toggleContainer);
    document.addEventListener("click", hideOnClickOutside);
  });
}
menu();

function navBar() {
  document.querySelector("nav svg").addEventListener("click", (event) => {
    event.preventDefault();
    location.reload();
  });
}
navBar();

function page1() {
  tl.to("#page1 #black-bg", {
    display: "none",
    duration: 5.5,
  });
  tl.to("#page1 #headline #videoo", {
    opacity: 1,
    duration: 0.5,
  }).from("nav", {
    opacity: 0,
    y: -50,
    duration: 0.7,
  });
  tl.from("#page1 .heads", {
    filter: "blur(0px)",
    x: 1500,
    scrollTrigger: {
      trigger: "#text-container",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 100%",
      end: "100% 0%",
      pin: true,
    },
  }).from("#page1 #tv", {
    x: -1500,
    ease: "slow(0.7,0.7,false)",
    scrollTrigger: {
      trigger: "#text-container",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 100%",
      end: "100% 0%",
    },
  });

  tl.to("#tv video", {
    x: -80,
    y: 700,
    filter: "invert(0)",
    borderRadius: "5px",
    scale: 4,
    scrollTrigger: {
      trigger: "video",
      scroller: "body",
      // markers: true,
      start: "bottom -150%",
      // end: "top -200%",
      scrub: 3,
      pin: true,
    },
  });
}
page1();

function page2() {
  const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 1800,
      disableOnInteraction: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
page2();

function page3() {
  new ScrollyVideo({
    transitionSpeed: 3,
    scrollyVideoContainer: "scrolly-video",
    src: "./Sequence 01.mp4",
  });
}
page3();

function s24Ultra() {
  tl.from(".gradient-text", {
    opacity: 0,
    scale: 1.4,
    duration: 2,
    filter: "blur(12px)",
    ease: "power1.out",
    stagger: 1,
    scrollTrigger: {
      trigger: "#introdusing",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 70%",
      end: "100% -50%",
      pin: true,
    },
  });
}
s24Ultra();

function design() {
  tl.from("#design-container", {
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#design-container",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 150%",
      end: "100% 80%",
    },
  });

  tl.from("#SSS", {
    opacity: 0,
    scale: 1.1,
    scrollTrigger: {
      trigger: "#des",
      scroller: "body",
      scrub: 1,
      // markers: true,
      start: "bottom 100%",
      end: "100% 0%",
    },
  });
  tl.from("#SSS span", {
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#des",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 100%",
      end: "100% 10%",
    },
  });
  tl.from("#design-container video, #para-design", {
    opacity: 0,
    filter: "blur(40px)",
    scrollTrigger: {
      trigger: "#design-container",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 150%",
      end: "100% 100%",
    },
  });
}
design();

function camera() {
  if (window.innerWidth < 700) {
    tl.to("#cam-head img", {
      opacity: 0,
      scale: 1.5,
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#cam-head",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 20%",
        end: "top -60%",
        pin: true,
      },
    });

    tl.from("#camera-img img", {
      opacity: 0,
      scale: 1.4,
      filter: "blur(5px)",
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#camera-img",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 30%",
        end: "top -100%",
        pin: true,
      },
    });

    tl.to("#zm-vid-cont video", {
      opacity: 0,
      filter: "blur(50px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#zm-vid-cont",
        start: "top 30%",
        end: "top -150%",
        scrub: 5,
        // markers: true,
      },
    })
      .to("#zm-box #one", {
        opacity: 0,
        x: -500,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: "#zm-vid-cont",
          start: "top 30%",
          end: "top -150%",
          scrub: 1,
          // markers: true,
        },
      })
      .to("#zm-box #two", {
        opacity: 0,
        x: 500,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#zm-vid-cont",
          start: "top 30%",
          end: "top -150%",
          scrub: 1,
          // markers: true,
        },
      });

    tl.to("#zoom", {
      scale: 1,
      width: "85%",
      opacity: 1,
      filter: "blur(0px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#zm-vid-cont",
        start: "top 30%",
        end: "top -150%",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });
  } else {
    tl.to("#cam-head img", {
      opacity: 0,
      scale: 1.5,
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#cam-head",
        scroller: "body",
        scrub: 1,
        // markers: true,
        start: "top 20%",
        end: "top -60%",
        pin: true,
      },
    });

    tl.from("#camera-img img", {
      opacity: 0,
      scale: 1.4,
      filter: "blur(5px)",
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#camera-img",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        pin: true,
      },
    });

    tl.to("#zm-vid-cont video", {
      opacity: 0,
      filter: "blur(50px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#zm-vid-cont",
        start: "bottom 110%",
        end: "top 0%",
        scrub: 5,
        // markers: true,
      },
    })
      .to("#zm-box #one", {
        opacity: 0,
        x: -500,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: "#zm-vid-cont",
          start: "bottom 100%",
          end: "top -100%",
          scrub: 1,
          // markers: true,
        },
      })
      .to("#zm-box #two", {
        opacity: 0,
        x: 500,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#zm-vid-cont",
          start: "bottom 100%",
          end: "top -100%",
          scrub: 1,
          // markers: true,
        },
      });

    tl.to("#zoom", {
      scale: 1,
      width: "85%",
      opacity: 1,
      filter: "blur(0px)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#zm-vid-cont",
        start: "bottom 100%",
        end: "top -100%",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });
  }

  tl.from("#zm-btns button", {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#zm-vid-cont",
      start: "bottom 100%",
      end: "top 70%",
      scrub: 2,
      // markers: true,
    },
  });
  tl.to("#op-lns", {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#zm-vid-cont",
      start: "bottom 80%",
      end: "top 0%",
      scrub: 5,
      // markers: true,
    },
  });

  const sizes = [
    { id: "#zoom-btn1", value: 1 },
    { id: "#zoom-btn2", value: 1.2 },
    { id: "#zoom-btn3", value: 2 },
    { id: "#zoom-btn4", value: 3.5 },
    { id: "#zoom-btn5", value: 5.5 },
  ];

  sizes.forEach((size) => {
    document.querySelector(size.id).addEventListener("click", () => {
      gsap.to("#zoom img", {
        scale: size.value,
        duration: 1,
      });
    });
  });
}
camera();

function features() {
  tl.from("#feat-box", {
    opacity: 0,
    filter: "blur(50px)",
    duration: 1,
    scrollTrigger: {
      trigger: "#feat-box",
      scroller: "body",
      scrub: 1,
      start: "top 120%",
      end: "bottom 92%",
      // markers: true,
    },
  });
  tl.from("#feat-img img,#feat-img video", {
    opacity: 0,
    y: 500,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: "#feat-box",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 200%",
      end: "100% 80%",
    },
  });

  const featureVid = [
    {
      id: "#feat-btn1",
      video: "./Videos/Feature Video/Super HDR.mp4",
    },
    {
      id: "#feat-btn2",
      video: "./Videos/Feature Video/Live Translate.mp4",
    },
    {
      id: "#feat-btn3",
      video: "./Videos/Feature Video/Interpreter.mp4",
    },
    {
      id: "#feat-btn4",
      video: "./Videos/Feature Video/Live Translate.mp4",
    },
    {
      id: "#feat-btn5",
      video: "./Videos/Feature Video/Note Assist.mp4",
    },
    {
      id: "#feat-btn6",
      video: "./Videos/Feature Video/Slow Mo.mp4",
    },
    {
      id: "#feat-btn7",
      video: "./Videos/Feature Video/Chat Assist.mp4",
    },
  ];

  featureVid.forEach((featVid) => {
    document.querySelector(featVid.id).addEventListener("click", () => {
      const videoElement = document.querySelector("#feat-img video");

      gsap.to(videoElement, {
        delay: 0.3,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          videoElement.setAttribute("src", featVid.video);

          videoElement.load();

          gsap.to(videoElement, {
            delay: 0.3,
            opacity: 1,
            duration: 1,
          });
        },
      });
    });
  });
}
features();

function colors() {
  tl.from("#phone-box h3 span", {
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#phone-box",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 180%",
      end: "100% 110%",
    },
  });
  tl.from("#phone-box #colors", {
    filter: "blur(10px)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#phone-box",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 150%",
      end: "100% 90%",
    },
  });
  tl.from("#pen-box img", {
    filter: "blur(50px)",
    opacity: 0,
    scale: 10,
    transform: "rotate(45deg)",
    scrollTrigger: {
      trigger: "#pen-box",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 150%",
      end: "100% 50%",
    },
  });
  function phoneVariant() {
    const colors = [
      {
        id: "#black",
        value: "Titanium Black",
        phoneImage1: "./Images/Phone varient/Black 1st.png",
        phoneImage2: "./Images/Phone varient/Black 2nd.png",
      },
      {
        id: "#blue",
        value: "Titanium Blue",
        phoneImage1: "./Images/Phone varient/Blue 1st.png",
        phoneImage2: "./Images/Phone varient/Blue 2nd.png",
      },
      {
        id: "#yellow",
        value: "Titanium Green",
        phoneImage1: "./Images/Phone varient/Green 1st.png",
        phoneImage2: "./Images/Phone varient/Green 2nd.png",
      },
      {
        id: "#orange",
        value: "Titanium Grey",
        phoneImage1: "./Images/Phone varient/Grey 1st.png",
        phoneImage2: "./Images/Phone varient/Grey 2nd.png",
      },
    ];

    colors.forEach((color) => {
      document.querySelector(color.id).addEventListener("click", () => {
        gsap.to("#phone-color-head", {
          text: {
            value: color.value,
            newClass: "highlight",
            oldClass: "normal",
            delimiter: "",
            duration: 0.5,
          },
          ease: "power2.inOut",
        });

        // Animate images
        gsap.to(".img1", {
          opacity: 0.2,
          duration: 0.5,
          filter: "blur(4px)",
          onComplete: () => {
            document
              .querySelector(".img1")
              .setAttribute("src", color.phoneImage1);
            gsap.to(".img1", {
              opacity: 1,
              duration: 0.5,
              filter: "blur(0px)",
            });
          },
        });

        gsap.to(".img2", {
          filter: "blur(4px)",
          opacity: 0.2,
          duration: 0.5,
          onComplete: () => {
            document
              .querySelector(".img2")
              .setAttribute("src", color.phoneImage2);
            gsap.to(".img2", {
              filter: "blur(0px)",
              opacity: 1,
              duration: 0.5,
            });
          },
        });
      });
    });
  }
  phoneVariant();

  function penVariant() {
    const colors = [
      {
        id: "#blackk",
        value: "Titanium Black",
        penImage: "./Images/pen_black.png",
      },
      {
        id: "#bluee",
        value: "Titanium Blue",
        penImage: "./Images/pen_blue.png",
      },
      {
        id: "#grayy",
        value: "Titanium Yellow",
        penImage: "./Images/pen_gray.png",
      },
    ];

    colors.forEach((color) => {
      document.querySelector(color.id).addEventListener("click", () => {
        const tl = gsap.timeline();

        tl.to("#pen-box img", {
          opacity: 0.3,
          duration: 0.5,
        })
          .to(
            "#pen-color-head",
            {
              text: {
                value: color.value,
                newClass: "highlight",
                oldClass: "normal",
                delimiter: "",
                duration: 0.5,
              },
            },
            "-=1"
          ) // Overlap with the image fade out

          // Update the image source
          .set("#pen-box img", {
            attr: { src: color.penImage },
          })
          // Fade in the new image
          .to("#pen-box img", {
            opacity: 1,
            duration: 1,
            // scale: 1,
          });
      });
    });
  }
  penVariant();
}
colors();

// function chip() {
//   tl.from("#chip-img #chip", {
//     // filter: "blur(10px)",
//     opacity: 0,
//     // scale: 2,
//     y: -150,
//     scrollTrigger: {
//       trigger: "#color-box2",
//       scroller: "body",
//       scrub: 2.5,
//       // markers: true,
//       start: "bottom 10%",
//       end: "100% -50%",
//     },
//   }).from("#chip-img #chip-mod", {
//     // filter: "blur(50px)",
//     opacity: 0,
//     // scale: 2,
//     y: 500,
//     scrollTrigger: {
//       trigger: "#color-box2",
//       scroller: "body",
//       scrub: 2.5,
//       // markers: true,
//       start: "bottom 10%",
//       end: "100% -50%",
//     },
//   });
// }
// chip();

function product() {
  // tl.from("#product-container #pdt-container", {
  //   opacity: 0,
  //   y: 500,
  //   scale: 2,
  //   scrollTrigger: {
  //     trigger: "#page5",
  //     scroller: "body",
  //     scrub: 2,
  //     // markers: true,
  //     start: "bottom 150%",
  //     end: "100% 0%",
  //   },
  // });

  if (window.innerWidth < 700) {
    const swiper2 = new Swiper(".swiper-container", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1800,
        disableOnInteraction: true,
      },
      slidesPerView: 1,
      grabCursor: true,
      centeredSlides: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    const swiper2 = new Swiper(".swiper-container", {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1800,
        disableOnInteraction: true,
      },
      slidesPerView: 3,
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: 190,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  function switchContainer(containerId) {
    const containers = document.querySelectorAll(".pdt-container");

    containers.forEach((container) => {
      if (container.id === containerId) {
        gsap.to(container, { opacity: 1, duration: 0.8, display: "block" });
      } else {
        gsap.to(container, { opacity: 0, duration: 0.5, display: "none" });
      }
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    document
      .querySelector(
        `[id='pdt-btn-${containerId.split("product-container")[1]}']`
      )
      .classList.add("active");
  }

  const totalContainers = 5;

  for (let i = 1; i <= totalContainers; i++) {
    document
      .getElementById(`pdt-btn-${i}`)
      .addEventListener("click", function () {
        switchContainer(`product-container${i}`);
      });
  }
}
product();

function footer() {
  tl.to("#search h1,#search button", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#search",
      scroller: "body",
      scrub: 2,
      // markers: true,
      start: "bottom 100%",
      end: "100% 50%",
    },
  });
}
footer();
