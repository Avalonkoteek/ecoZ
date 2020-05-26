import anime from "animejs";

export const illustrationAnimation = {
  // MOVING ILLUSTRATION
  //====================================
  movingStart: function(illustration, from, to) {
    const a = anime
      .timeline({
        targets: illustration,
        easing: "easeInOutSine",
        direction: "normal",
        autoplay: false,
        duration: 3000,
      })

      .add({
        translateX: to,
      });

    a.play();
  },
  //   getPosition
  // =============================================
  getPosition: function(Layout) {
    let Position = "0%";
    switch (Layout) {
      case "main-layout":
        Position = "0%";
        break;
      case "about-layout":
        Position = "-9%";
        break;
      case "business-layout":
        Position = "-18%";
        break;
      case "school-layout":
        Position = "-28%";
        break;
      case "volunteers-layout":
        Position = "-37%";
        break;
      case "contact-layout":
        Position = "-62%";
        break;

      default:
        Position = "0%";
        break;
    }
    return Position;
  },
  // First window
  // =============================================>
  animationHome: function(refs) {
    //315.953 693.279)
    const { clouds, boats, redBoat, birds } = refs;
    console.log(clouds, boats, birds, redBoat);
    console.log(refs);
    anime({
      targets: boats,
      translateX: [420, 425],
      translateY: [745, 746],

      loop: true,

      delay: anime.stagger(200),
      easing: "linear",
      autoplay: true,
    });
    anime({
      targets: redBoat,
      translateX: [315.953, 425],
      translateY: [693.279, 693],
      direction: "normal",
      duration: 3000,
      delay: 3000,
      autoplay: true,
    });
  },
};
