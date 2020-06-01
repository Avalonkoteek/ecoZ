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
    switch (newLayout) {
      case "main-layout":
        this.startHome(refs);
        break;
      case "about-layout":
        this.startAbout(refs);
        break;
      case "business-layout":
        this.startBusiness(refs);
        break;
      case "school-layout":
        this.startScool(refs);
        break;
      case "volunteers-layout":
        this.startVolunteers(refs);
        break;
      case "contact-layout":
        this.startContact(refs);
        break;

      default:
        break;
    }
  },

  //===================================================================================
  //============================== Анимации для страниц ===============================
  //===================================================================================

  startHome: function(refs) {
    const { boats, redBoat, birds, leaf } = refs;

    // RED BOAT
    //=================================================================================
    anime({
      targets: redBoat,
      translateX: 200,
      direction: "normal",
      duration: 6000,
      delay: 3000,
      rotate: [{ value: -5 }, { value: 0 }],
      easing: "easeInOutQuad",
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
    const { squirrel, bike, spin1, spin2, spin3 } = refs;

    anime({
      targets: bike,
      translateX: 340,
      direction: "normal",
      duration: 3000,
      delay: 3000,
      easing: "easeInOutQuad",
      autoplay: true,
    });
    //wheels
    anime({
      targets: [bike.children[0], bike.children[1]],
      rotate: 900,
      direction: "normal",
      duration: 3000,
      delay: 3000,
      easing: "easeInOutQuad",
      autoplay: true,
    });
    //head
    anime({
      targets: bike.children[2],
      translateY: -3,
      translateX: -2,
      rotate: -36,
      direction: "normal",
      duration: 1000,
      delay: 6000,
      easing: "easeInOutQuad",
      autoplay: true,
    });

    anime({
      targets: [spin1, spin2, spin3],
      rotate: 720,
      loop: true,
      duration: 9000,
      direction: "alternate",
      easing: "easeInOutQuad",
      autoplay: true,
    });
    anime({
      targets: squirrel,
      translateY: 4,
      rotate: "+=2",
      loop: true,
      duration: 6000,
      direction: "alternate",
      easing: "linear",
      autoplay: true,
    });
  },
  //===================================================================================
  //============================== Бизнесу ===============================
  //===================================================================================
  startBusiness: function(refs) {
    const { spin4, spin5, sign } = refs;
    anime({
      targets: [spin4, spin5],
      rotate: [0, 1440],
      loop: true,
      duration: 10000,

      easing: "easeInOutQuad",
      autoplay: true,
    });
    anime({
      targets: sign,
      rotate: [0, -360],
      loop: true,
      duration: 6000,

      easing: "linear",
      autoplay: true,
    });
  },
  //===================================================================================
  //============================== Школы ===============================
  //===================================================================================
  startScool: function(refs) {
    const { motherHair } = refs;

    anime({
      targets: motherHair,
      translateY: 3,
      rotate: -3,
      duration: 2000,
      easing: "easeInOutSine",
      direction: "alternate",
      autoplay: true,
      loop: true,
    });
  },
  //===================================================================================
  //============================== Volunteers ===============================
  //===================================================================================
  startVolunteers: function(refs) {
    const {
      handAnimationV2,
      handAnimationV1,
      headAnimationV1,
      headAnimationV2,
    } = refs;

    anime({
      targets: [handAnimationV2, handAnimationV1],
      translateX: "-=3",
      translateY: "+=3",
      rotate: 6,
      duration: 3000,
      easing: "easeInOutSine",
      direction: "alternate",
      autoplay: true,
      loop: true,
    });
    anime({
      targets: [headAnimationV1, headAnimationV2],

      translateY: "+=2",
      duration: 3000,
      rotate: 13,
      easing: "easeInOutSine",
      direction: "alternate",
      autoplay: true,
      loop: true,
    });
  },
  //===================================================================================
  //============================== Volunteers ===============================
  //===================================================================================
  startContact: function(refs) {
    const { phone, mail, message } = refs;
    const tl = anime
      .timeline({
        loop: true,
        easing: "easeInOutSine",
        direction: "alternate",
      })
      .add({
        targets: phone,
        rotate: 60,
        duration: 1000,
        direction: "alternate",
      })
      .add(
        {
          targets: message.children[2],
          scale: [0.98, 1.2],
          duration: 1000,
          easing: "easeInOutCirc",
          direction: "alternate",
        },
        "+=1500"
      )
      .add(
        {
          targets: mail.children[3],
          translateY: [{ value: -9 }],
          scaleY: [{ value: [1, 0] }, { value: [0, -1] }],

          duration: 1000,
          easing: "easeInOutSine",
          direction: "alternate",
        },
        "+=1500"
      );
    tl.play();
  },
};
