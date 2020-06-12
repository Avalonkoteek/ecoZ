import anime from "animejs";
const first =
  "M0,0h1441.727v125.506s48.275,9.268,31.106,146.619-29.187,148.424,0,304.66-31.106,323.234-31.106,323.234h-1441.462Z";
const last =
  "M0,0h1441.727v125.506s-831.476-58.914-848.645,78.438,115.032,224.91,144.219,381.146-19.609,314.93-19.609,314.93h-717.427Z";
export const overlayAnimation = {
  // path фиггура внутри svg, d - координаты точек фигуры
  overlayAnimationPath: function(path, d) {
    anime({
      targets: path,
      d: [
        {
          value: d,
        },
      ],
      duration: 400,
      easing: "easeInOutSine",
      direction: "normal",
      autoplay: true,
    });
  },
};
