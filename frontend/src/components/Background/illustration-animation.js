import anime from "animejs";

export const illustrationAnimation = {
  //===================================================================================
  //============================== Двигаем illustration ===============================
  //===================================================================================
  movingTo: function(illustration, to) {
    const a = anime
      .timeline({
        targets: illustration,
        easing: "easeInOutSine",
        direction: "normal",
        autoplay: false,
        duration: 1500,
      })
      .add({
        translateX: to,
      });

    a.play();
  },
  //===================================================================================
  //============================== На сколько Двигаем illustration ====================
  //===================================================================================
  getLayoutPosition: function(newLayout, oldLayout) {
    if (newLayout === "empty-layout") {
      newLayout = oldLayout;
    }
    let Position = "0%";
    switch (newLayout) {
      case "main-layout":
        Position = "0%";
        break;
      case "about-layout":
        Position = "-10%";
        break;
      case "business-layout":
        Position = "-23%";
        break;
      case "school-layout":
        Position = "-33%";
        break;
      case "volunteers-layout":
        Position = "-44%";
        break;
      case "contact-layout":
        Position = "-58%";
        break;

      default:
        Position = "0%";
        break;
    }
    return Position;
  },
  //===================================================================================
  //============================== На каком экране и какие анимации проигрывать =======
  //===================================================================================
  startAnimationFrame: function(newLayout, oldLayout, refs) {
    console.log(newLayout, oldLayout);
    switch (newLayout) {
      case "main-layout":
        this.startHome(refs);
        break;
      case "about-layout":
        break;
      case "business-layout":
        break;
      case "school-layout":
        break;
      case "volunteers-layout":
        break;
      case "contact-layout":
        break;

      default:
        break;
    }
  },

  //===================================================================================
  //============================== Анимации для страниц ===============================
  //===================================================================================

  startHome: function(refs) {
    const { clouds, boats, redBoat, birds, leaf } = refs;
    console.log(clouds, boats, birds, redBoat, leaf);

    // RED BOAT
    //=================================================================================
    anime({
      targets: redBoat,
      translateX: 200,
      direction: "normal",
      duration: 6000,
      delay: 3000,
      rotate: [{ value: -5 }, { value: 0 }],
      easing: "easeInQuad",
      autoplay: true,
    });

    // BOATS
    //=================================================================================
    anime({
      targets: [boats.children[0], boats.children[1]],
      translateX: [
        { value: anime.stagger([0, 3]) },
        { value: anime.stagger([3, 0]) },
      ],
      translateY: [
        { value: anime.stagger([-1, 1]) },
        { value: anime.stagger([1, -1]) },
      ],
      rotate: [
        { value: anime.stagger([-5, 5]) },
        { value: anime.stagger([5, -5]) },
      ],
      duration: 3000,
      // delay: anime.stagger(100),
      loop: true,
      direction: "alternate",
      easing: "linear",
    });
    // BIRDS
    //=================================================================================
    anime({
      targets: [
        birds.children[0],
        birds.children[1],
        birds.children[2],
        birds.children[3],
        birds.children[4],
        birds.children[5],
      ],
      scale: [
        { value: anime.stagger([0.8, 1.2]) },
        { value: anime.stagger([1.1, 1]) },
      ],
      translateX: [
        { value: anime.stagger([0, 3]) },
        { value: anime.stagger([3, 0]) },
      ],
      translateY: [
        { value: anime.stagger([-6, 6]) },
        { value: anime.stagger([6, -6]) },
      ],
      rotate: [
        { value: anime.stagger([-10, 40]) },
        { value: anime.stagger([50, -18]) },
        { value: anime.stagger([5, -30]) },
        { value: anime.stagger([16, -4]) },
      ],
      duration: function() {
        return anime.random(2200, 5800);
      },

      loop: true,
      direction: "alternate",
      easing: "easeInOutExpo",
    });

    // LEAF
    //=================================================================================
    anime({
      targets: leaf,
      easing: "easeInOutQuart",
      delay: 8000,

      rotate: [
        { value: 6, duration: 8000 },
        { value: -6, duration: 8000 },
      ],

      translateX: [
        { value: -80, duration: 6000 },
        { value: -20, duration: 2000 },
      ],
      translateY: [
        { value: 500, duration: 4000 },
        { value: 620, duration: 4000 },
      ],
      scale: { value: 0.8, duration: 4000 },
    });

    // CLOUDS
    //=================================================================================

    // Add children
  },

  //===================================================================================
  //============================== О НАС ===============================
  //===================================================================================
  startAbout: function(refs) {
    const { squirrel, windmils, bike } = refs;
    console.log(squirrel, windmils, bike);
  },
};
