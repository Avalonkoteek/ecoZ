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
    let isDesktop = document.body.clientHeight < 1023;
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
        isDesktop == true ? (Position = "-58%") : (Position = "-56%");

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
    document
      .querySelector(".cloud-animation")
      .classList.add("cloud-animation--left");
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
    const { boats, redBoat, birds, leaf, cloud1 } = refs;

    // RED BOAT
    //=================================================================================
    anime({
      targets: redBoat,
      translateX: 150,
      direction: "normal",
      duration: 9000,
      delay: 2000,
      rotate: [
        { value: [0, -5], duration: 1600 },
        { value: [-5, 0], duration: 1600 },
        { value: [0, 5], duration: 1600 },
        { value: [5, -3], duration: 1600 },
        { value: [-3, 4], duration: 1600 },
      ],
      easing: "easeInOutQuad",
      autoplay: true,
    });

    // BOATS
    //=================================================================================
    setTimeout(() => {
      anime({
        targets: redBoat,
        translateX: [150, 151],
        translateY: [{ value: [0, 1] }, { value: [1, -1] }],
        rotate: [{ value: [4, -4] }, { value: [-4, 4] }],
        duration: 5000,
        loop: true,
        direction: "alternate",
        easing: "linear",
      });
    }, 11000);
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
        { value: anime.stagger([0.9, 1.1]) },
        { value: anime.stagger([1.1, 1]) },
      ],
      translateX: [
        { value: anime.stagger([0, 3]) },
        { value: anime.stagger([3, 0]) },
      ],
      translateY: [
        { value: anime.stagger([-3, 3]) },
        { value: anime.stagger([3, -3]) },
      ],
      rotate: [
        { value: anime.stagger([-10, 30]) },
        { value: anime.stagger([30, -10]) },
        { value: anime.stagger([5, -15]) },
        { value: anime.stagger([16, -4]) },
      ],
      duration: function() {
        return anime.random(2200, 5800);
      },

      loop: true,
      direction: "alternate",
      easing: "linear",
    });

    // LEAF
    //=================================================================================
    anime({
      targets: leaf,
      easing: "linear",
      delay: 8000,

      translateX: [
        { value: -80, duration: 2000 },
        { value: 80, duration: 2000 },
        { value: -80, duration: 2000 },
        { value: 80, duration: 2000 },
      ],
      translateY: [
        { value: 200, duration: 2000 },
        { value: 198, duration: 100 },
        { value: 400, duration: 2000 },
        { value: 600, duration: 2000 },
        { value: 700, duration: 2000 },
      ],
    });

    // CLOUDS
    //=================================================================================
    anime({
      targets: cloud1,
      translateX: -150,
      direction: "normal",
      duration: 9000,
      delay: 2000,
      opacity: 0,
      easing: "easeInOutQuad",
      autoplay: true,
    });

    // Add children
  },

  //===================================================================================
  //============================== О НАС ===============================
  //===================================================================================
  startAbout: function(refs) {
    const { bike, spin1, spin2, spin3, squirrel } = refs;

    anime({
      targets: bike,
      translateX: 340,
      direction: "normal",
      duration: 5000,
      delay: 3000,
      easing: "easeInOutQuad",
      autoplay: true,
    });
    //wheels
    anime({
      targets: [bike.children[0], bike.children[1]],
      rotate: 900,
      direction: "normal",
      duration: 5000,
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
      delay: 8000,
      easing: "easeInOutQuad",
      autoplay: true,
    });

    anime({
      targets: [spin1, spin2, spin3],
      rotate: [0, -720],
      loop: true,
      duration: 15000,
      easing: "linear",
      autoplay: true,
    });
    anime({
      targets: squirrel.children[1],
      d: {
        value:
          "M1588.53 496.302L1591.82 492.761C1590.16 492.26 1588.41 492.146 1586.7 492.428C1585.9 492.564 1585.12 492.787 1584.36 493.094L1584.91 491.844L1582.45 493.135L1583.24 491.635C1582.54 491.628 1581.86 491.805 1581.25 492.147C1580.64 492.488 1580.14 492.984 1579.78 493.583L1580.7 491.718C1579.98 491.739 1579.28 491.939 1578.66 492.301C1577.75 492.852 1577.07 493.709 1576.74 494.717C1577.03 493.856 1577.33 492.995 1577.62 492.134C1576.33 492.556 1575.2 493.354 1574.37 494.425C1573.82 495.136 1573.43 495.949 1573.21 496.816C1573.28 496.172 1573.34 495.528 1573.41 494.884C1572.74 495.445 1572.2 496.141 1571.83 496.925C1571.29 498.073 1571.12 499.354 1571.32 500.603C1571.17 500.03 1571.02 499.456 1570.87 498.883C1570.49 499.958 1570.27 501.08 1570.2 502.216C1570.14 503.398 1570.24 504.583 1570.51 505.736C1568.15 503.971 1566.76 503.768 1565.13 501.536C1563.73 499.619 1563.64 498.246 1562.63 496.945C1563.09 494.863 1562.97 492.697 1562.28 490.678C1561.91 489.604 1561.37 488.593 1560.7 487.678C1560.8 488.889 1560.44 490.093 1559.7 491.052C1559.23 491.602 1558.84 491.715 1558.28 492.302C1557.75 492.873 1557.36 493.557 1557.13 494.302C1557.06 494.302 1556.98 494.302 1556.91 494.312C1556.78 494.323 1556.66 494.344 1556.54 494.364C1555.75 492.498 1554.95 490.629 1554.16 488.758C1553.89 490.139 1553.65 491.598 1553.45 493.132C1553.31 494.205 1553.2 495.243 1553.11 496.251C1551.97 497.436 1550.93 498.72 1550.02 500.088C1549.27 501.143 1548.6 502.258 1548.02 503.42C1547.85 503.724 1547.76 504.061 1547.74 504.407C1547.72 504.754 1547.78 505.1 1547.91 505.42C1548.6 506.809 1551.22 506.763 1551.8 506.753C1552.82 506.735 1552.99 506.52 1553.57 506.642C1554.91 506.919 1555.74 508.392 1556.24 509.642L1552.02 509.42C1550.36 508.076 1548.4 508.082 1547.58 508.975C1546.62 510.011 1547.47 511.954 1547.58 512.196C1548.16 513.54 1549.65 515.069 1551.13 514.751C1551.66 514.615 1552.13 514.301 1552.46 513.862L1555.46 516.528C1554.41 517.178 1553.59 518.152 1553.13 519.305C1551.94 522.513 1554.19 527.08 1559.02 530.19L1556.5 530.09C1554.68 530.015 1552.91 530.603 1551.5 531.744L1550.92 532.218C1550.76 532.345 1550.64 532.51 1550.57 532.698C1550.49 532.886 1550.47 533.089 1550.5 533.288C1550.53 533.487 1550.61 533.675 1550.74 533.833C1550.86 533.99 1551.03 534.112 1551.22 534.186L1551.24 534.194L1551.27 534.208C1552.59 534.703 1554.05 534.731 1555.39 534.287C1556.1 534.058 1556.83 533.878 1557.57 533.75C1560.32 533.29 1563.14 533.519 1565.79 534.416C1568.25 534.711 1570.74 534.205 1572.9 532.972C1572.98 532.922 1573.05 532.872 1573.13 532.816C1574.49 532.992 1575.88 532.87 1577.19 532.458C1578.7 531.924 1580.08 531.072 1581.23 529.958C1582.55 528.827 1583.7 527.508 1584.64 526.043L1583.39 526.084C1583.89 525.872 1584.34 525.575 1584.73 525.209C1585.52 524.44 1586.03 523.429 1586.18 522.335L1585.02 523.001C1586.18 521.792 1586.94 520.248 1587.18 518.586C1587.28 517.839 1587.27 517.08 1587.14 516.337L1586.52 516.629C1587.17 515.435 1587.38 514.046 1587.1 512.713L1586.47 513.171C1587.04 511.709 1587.03 510.083 1586.43 508.631L1585.52 509.922C1585.82 508.311 1586.13 506.701 1586.43 505.09L1585.14 506.881L1587.02 502.257L1585.97 502.84L1589.43 496.05L1588.53 496.302Z",
      },
      loop: true,
      duration: 1500,
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
      rotate: [0, -720],
      loop: true,
      duration: 15000,

      easing: "linear",
      autoplay: true,
    });

    anime({
      targets: sign,
      rotate: [0, 360],
      loop: true,
      duration: 10000,

      easing: "linear",
      autoplay: true,
    });
    const light = document.querySelectorAll(".indication-light");
    const dark = document.querySelectorAll(".indication-dark");
    for (let path of light) {
      path.classList.add("indication--green");
    }
    for (let path of dark) {
      path.classList.add("indication--green-dark");
    }
  },
  //===================================================================================
  //============================== Школы ===============================
  //===================================================================================
  startScool: function(refs) {
    const { motherHair } = refs;

    anime({
      targets: motherHair,
      d: {
        value:
          "M2470.5 794.5C2469.85 788.855 2474.81 785.905 2473 779C2471.01 771.41 2474.7 764.502 2471.62 759.147C2469.52 755.488 2467.43 754.407 2466.3 753.978C2464.19 753.178 2462.34 753.469 2460.25 753.83C2457.31 754.337 2450.01 756.206 2449.76 759.443C2449.58 761.813 2453.34 762.677 2453.31 766.089C2453.29 767.743 2452.39 768.909 2453.16 770.077C2453.37 770.424 2453.68 770.705 2454.05 770.888C2454.41 771.071 2454.82 771.148 2455.23 771.111C2456.6 770.82 2456.74 768.411 2457.44 768.453C2458.03 768.487 2458.75 770.232 2458.33 771.702C2457.78 773.579 2455.2 774.241 2454.34 774.508C2447.19 776.718 2444 785 2439 789.5C2438.77 790.786 2434.67 793.855 2436.17 795C2438.17 796.524 2439.46 793.668 2444.5 791.5C2445 798.5 2446 799 2443 803.608C2448.5 803.608 2449.85 802.569 2452 799.5C2455.16 800.483 2456 803.608 2460.5 803.608C2461.93 802.531 2461.81 796.152 2462.5 794.5C2463.19 792.848 2470.74 796.274 2470.5 794.5Z",
      },

      duration: 6000,
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
    const { phone, mail, message, deerEye } = refs;
    anime({
      targets: deerEye,
      translateY: 50,
      duration: 1000,
      easing: "linear",
      direction: "alternate",
      autoplay: true,
      loop: true,
      delay: 1000,
    });

    setTimeout(() => {
      anime({
        targets: phone,
        rotate: 60,
        duration: 1000,
        easing: "easeInOutSine",
        direction: "alternate",
        autoplay: true,
        loop: true,
        delay: 6000,
      });
    }, 2000);

    setTimeout(() => {
      anime({
        targets: message.children[2],
        scale: [0.98, 1.1],
        duration: 1000,
        easing: "easeInOutCirc",
        direction: "alternate",
        autoplay: true,
        loop: true,
        delay: 6000,
      });
    }, 4000);

    setTimeout(() => {
      anime({
        targets: mail.children[3],
        translateY: [{ value: -9 }],
        scaleY: [{ value: [1, 0] }, { value: [0, -1] }],

        duration: 1000,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true,
        delay: 6000,
      });
    }, 6000);
  },
};
