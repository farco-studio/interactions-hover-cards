
import { gsap } from "gsap";

const hoverAnimation = (initialPosition, item) => {
    const itemMarquees = item.querySelectorAll(".marquee");
    const image = item.querySelector(".image");
    const itemTitle = item.querySelector(".title");
    const marquee = gsap.utils.toArray(itemMarquees);
    const textChars = item.querySelectorAll("span");
    let timeout = null;

    item.addEventListener("mouseenter", () => {

      clearTimeout(timeout);

      gsap.to(itemTitle, {
        duration: 1,
        y: 200,
        ease: "power4.out",
      });

      gsap.to(image, {
        duration: 0.6,
        scale: 1.1,
        ease: "power4.out",
      });

      gsap.fromTo(
        marquee,
        {
          xPercent: 0,
        },
        {
          duration: 8,
          xPercent: -100,
          ease: "linear",
          repeat: -1,
        }
      );

      gsap.fromTo(
        textChars,
        {
          y: initialPosition,
          transformOrigin: "top center",
          rotationX: 75,
          rotationY: -20,
          z: -150,
          delay: 0.5,
        },
        {
          duration: 1,
          y: 0,
          stagger: 0.05,
          ease: "power4.out",
          z: 0,
          rotationX: 0,
          rotationY: 0,
        }
      );
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(itemTitle, {
        duration: 1,
        y: 0,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.to(image, {
        duration: 0.6,
        scale: 1,
        ease: "power4.out",
      });
      gsap.fromTo(
        textChars,
        {
          y: 0,
        },
        {
          duration: 1,
          y: initialPosition,
          stagger: 0.05,
          ease: "power4.out",
        }
      );
    });
  };

  export { hoverAnimation };