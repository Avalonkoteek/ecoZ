import anime from "animejs";

export const illustrationAnimation = {
  // MOVING ILLUSTRATION
  //====================================
  movingStart: function(illustration, width) {
    let newPosition = -1 * width + "px";
    console.log(width);

    const a = anime
      .timeline({
        targets: illustration,
        easing: "easeInOutSine",
        direction: "normal",
        autoplay: false,
        duration: 3000,
      })
      .add({
        translateX: newPosition,
      });

    a.play();
    console.log(this.getPosition("f"));
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
    let boatsArr = [];
    boatsArr.push(boats.children[0]);
    boatsArr.push(boats.children[1]);
    console.log(boatsArr);
    anime({
      targets: [boats.children[0], boats.children[1]],
      translateX: 2,
      rotate: [{ value: "+=0.5" }, { value: "-=0.5" }],
      duration: 1200,
      delay: anime.stagger(100),
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
    });
    anime({
      targets: [
        birds.children[0],
        birds.children[1],
        birds.children[2],
        birds.children[3],
        birds.children[4],
        birds.children[5],
      ],
      translateX: {
        value: [-726, -725], // 100px * 2.5 = '250px'
        duration: 100,
      },
      translateY: {
        value: [-942, -941], // 100px * 2.5 = '250px'
        duration: 100,
      },
      rotate: [{ value: "+=0.5" }, { value: "-=411" }],
      duration: 4000,
      delay: anime.stagger(1000),
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
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
