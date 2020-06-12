import anime from "animejs";

export const overlayAnimation = {
  overlayAnimationStart: function(partOfSvg) {
    const first =
      "M0,0h1441.727v125.506s48.275,9.268,31.106,146.619-29.187,148.424,0,304.66-31.106,323.234-31.106,323.234h-1441.462Z";
    anime({
      targets: partOfSvg,
      d: [
        {
          value: first,
        },
      ],
      duration: 400,
      easing: "easeInOutSine",
      direction: "normal",
      autoplay: true,
    });
  },
  overlayAnimationEnd: function(partOfSvg) {
    const last =
      "M0,0h1441.727v125.506s-831.476-58.914-848.645,78.438,115.032,224.91,144.219,381.146-19.609,314.93-19.609,314.93h-717.427Z";
    anime({
      targets: partOfSvg,
      d: [
        {
          value: last,
        },
      ],
      duration: 400,
      easing: "easeInOutSine",
      direction: "normal",
      autoplay: true,
    });
  },
};
