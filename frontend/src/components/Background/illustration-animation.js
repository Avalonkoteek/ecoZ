import anime from "animejs"; //библиотека для работы с анимациями
// https://animejs.com/documentation/  ссылка на документацию

export const illustrationAnimation = {
  //====================================================================================
  //============================== Узнаем на сколько двигать иллюстрацию ================
  //=====================================================================================
  // newLayout, oldLayout - строки, идентификаторы страниц
  // 'empty-layout' - все дочерние страницы
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
      case "education-layout":
        Position = "-33%";
        break;
      case "volunteers-layout":
        Position = "-44%";
        break;
      case "contact-layout":
        Position = "-56%";
        break;
      default:
        Position = "0%";
        break;
    }
    return Position;
  },

  //===================================================================================
  //============================== Двигаем иллюстрацию ===============================
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
  //============================== На каком экране и какие анимации проигрывать =======
  //===================================================================================
  startAnimationFrame: function(newLayout, refs) {
    // бесконечные анимации вращения для мельниц и движения облаков
    const { spin1, spin2, spin3, spin4, spin5, allClouds } = refs;
    let spinArr = [spin1, spin2, spin3, spin4, spin5];
    spinArr.forEach(function(item) {
      item.classList.add("spin-animation");
    });
    allClouds.classList.add("clouds-move");

    // вызов уникальных анимаций
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
      easing: "easeInOutSine",
      duration: 6000,
      delay: 6000,

      translateX: [{ value: -80 }, { value: 20 }, { value: 0 }],
      rotate: [{ value: 10 }, { value: -10 }, { value: 0 }],
      translateY: [{ value: 200 }, { value: 400 }, { value: 605 }],

      autoplay: true,
      loop: false,
    });

    // CLOUD
    //=================================================================================
    anime({
      targets: cloud1,
      translateX: -300,
      direction: "normal",
      duration: 4000,
      delay: 2000,
      opacity: 0,
      easing: "easeInOutQuad",
      autoplay: true,
    });
  },

  //===================================================================================
  //============================== О НАС ===============================
  //===================================================================================
  startAbout: function(refs) {
    const { bike, squirrel } = refs;
    // bike
    //=================================================================================
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

    // squirrel
    //=================================================================================
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
  //============================== Бизнесу ============================================
  //===================================================================================
  startBusiness: function(refs) {
    const { sign, squirrel } = refs;

    anime({
      targets: squirrel.children[1],
      d: [
        {
          value:
            "M1588.29 496.257L1591.58 492.716C1589.92 492.215 1588.17 492.101 1586.46 492.383C1585.66 492.519 1584.88 492.742 1584.13 493.049L1584.67 491.799L1582.21 493.09L1583 491.59C1582.31 491.583 1581.62 491.76 1581.01 492.101C1580.41 492.443 1579.9 492.939 1579.54 493.538L1580.46 491.673C1579.74 491.694 1579.04 491.894 1578.42 492.256C1577.51 492.806 1576.83 493.664 1576.5 494.672C1576.8 493.811 1577.09 492.95 1577.38 492.089C1576.09 492.511 1574.96 493.309 1574.13 494.38C1573.59 495.091 1573.19 495.904 1572.97 496.771C1573.04 496.127 1573.1 495.483 1573.17 494.839C1572.51 495.4 1571.97 496.096 1571.59 496.88C1571.06 498.028 1570.88 499.309 1571.08 500.558C1570.93 499.985 1570.78 499.411 1570.63 498.838C1570.26 499.913 1570.03 501.035 1569.96 502.171C1569.9 503.353 1570 504.538 1570.27 505.691C1567.91 503.926 1566.53 503.723 1564.9 501.491C1563.5 499.574 1563.4 498.201 1562.4 496.9C1562.85 494.818 1562.73 492.651 1562.04 490.633C1561.67 489.559 1561.14 488.548 1560.46 487.633C1560.56 488.843 1560.21 490.048 1559.46 491.007C1558.99 491.557 1558.6 491.67 1558.04 492.257C1557.51 492.828 1557.12 493.512 1556.89 494.257C1556.82 494.257 1556.75 494.257 1556.67 494.267C1556.55 494.278 1556.43 494.299 1556.31 494.319C1555.51 492.452 1554.72 490.584 1553.92 488.713C1553.65 490.094 1553.41 491.553 1553.21 493.087C1553.07 494.16 1552.96 495.198 1552.87 496.206C1551.73 497.391 1550.7 498.675 1549.78 500.043C1549.03 501.098 1548.36 502.213 1547.78 503.375C1547.62 503.679 1547.52 504.016 1547.5 504.362C1547.48 504.709 1547.54 505.055 1547.67 505.375C1548.37 506.764 1550.99 506.718 1551.56 506.708C1552.58 506.69 1552.75 506.475 1553.34 506.597C1554.67 506.874 1555.5 508.347 1556 509.597L1552.38 507.539C1550.71 506.195 1548.75 506.201 1547.93 507.094C1546.98 508.13 1547.83 510.073 1547.93 510.315C1548.52 511.659 1548.94 512.47 1550.42 512.152C1550.95 512.016 1552.03 513.894 1552.36 513.455L1555.23 516.483C1554.17 517.133 1553.35 518.107 1552.89 519.26C1551.71 522.468 1553.95 527.035 1558.78 530.145L1556.26 530.045C1554.45 529.97 1552.67 530.558 1551.26 531.699L1550.68 532.173C1550.52 532.3 1550.4 532.465 1550.33 532.653C1550.26 532.84 1550.23 533.044 1550.26 533.243C1550.29 533.442 1550.38 533.63 1550.5 533.788C1550.63 533.945 1550.79 534.067 1550.98 534.141L1551 534.149L1551.03 534.163C1552.36 534.658 1553.81 534.686 1555.15 534.242C1555.86 534.013 1556.59 533.833 1557.33 533.705C1560.08 533.245 1562.91 533.474 1565.55 534.371C1568.01 534.666 1570.51 534.16 1572.66 532.927C1572.74 532.877 1572.82 532.827 1572.9 532.771C1574.26 532.947 1575.64 532.825 1576.95 532.413C1578.46 531.879 1579.84 531.027 1580.99 529.913C1582.31 528.782 1583.46 527.463 1584.41 525.998L1583.16 526.039C1583.65 525.826 1584.1 525.53 1584.49 525.164C1585.28 524.395 1585.8 523.384 1585.95 522.29L1584.78 522.956C1585.95 521.747 1586.7 520.203 1586.95 518.541C1587.04 517.793 1587.03 517.035 1586.9 516.292L1586.28 516.584C1586.93 515.39 1587.14 514.001 1586.86 512.668L1586.24 513.126C1586.81 511.664 1586.79 510.038 1586.2 508.586L1585.28 509.877C1585.58 508.266 1585.89 506.656 1586.2 505.045L1584.9 506.836L1586.78 502.212L1585.74 502.795L1589.19 496.005L1588.29 496.257Z",
        },
        {
          value:
            "M1588.53 496.302L1591.82 492.761C1590.16 492.26 1588.41 492.146 1586.7 492.428C1585.9 492.564 1585.12 492.787 1584.36 493.094L1584.91 491.844L1582.45 493.135L1583.24 491.635C1582.54 491.628 1581.86 491.805 1581.25 492.147C1580.64 492.488 1580.14 492.984 1579.78 493.583L1580.7 491.718C1579.98 491.739 1579.28 491.939 1578.66 492.301C1577.75 492.852 1577.07 493.709 1576.74 494.717C1577.03 493.856 1577.33 492.995 1577.62 492.134C1576.33 492.556 1575.2 493.354 1574.37 494.425C1573.82 495.136 1573.43 495.949 1573.21 496.816C1573.28 496.172 1573.34 495.528 1573.41 494.884C1572.74 495.445 1572.2 496.141 1571.83 496.925C1571.29 498.073 1571.12 499.354 1571.32 500.603C1571.17 500.03 1571.02 499.456 1570.87 498.883C1570.49 499.958 1570.27 501.08 1570.2 502.216C1570.14 503.398 1570.24 504.583 1570.51 505.736C1568.15 503.971 1566.76 503.768 1565.13 501.536C1563.73 499.619 1563.64 498.246 1562.63 496.945C1563.09 494.863 1562.97 492.697 1562.28 490.678C1561.91 489.604 1561.37 488.593 1560.7 487.678C1560.8 488.889 1560.44 490.093 1559.7 491.052C1559.23 491.602 1558.84 491.715 1558.28 492.302C1557.75 492.873 1557.36 493.557 1557.13 494.302C1557.06 494.302 1556.98 494.302 1556.91 494.312C1556.78 494.323 1556.66 494.344 1556.54 494.364C1555.75 492.498 1554.95 490.629 1554.16 488.758C1553.89 490.139 1553.65 491.598 1553.45 493.132C1553.31 494.205 1553.2 495.243 1553.11 496.251C1551.97 497.436 1550.93 498.72 1550.02 500.088C1549.27 501.143 1548.6 502.258 1548.02 503.42C1547.85 503.724 1547.76 504.061 1547.74 504.407C1547.72 504.754 1547.78 505.1 1547.91 505.42C1548.6 506.809 1551.22 506.763 1551.8 506.753C1552.82 506.735 1552.99 506.52 1553.57 506.642C1554.91 506.919 1555.74 508.392 1556.24 509.642L1552.02 509.42C1550.36 508.076 1548.4 508.082 1547.58 508.975C1546.62 510.011 1547.47 511.954 1547.58 512.196C1548.16 513.54 1549.65 515.069 1551.13 514.751C1551.66 514.615 1552.13 514.301 1552.46 513.862L1555.46 516.528C1554.41 517.178 1553.59 518.152 1553.13 519.305C1551.94 522.513 1554.19 527.08 1559.02 530.19L1556.5 530.09C1554.68 530.015 1552.91 530.603 1551.5 531.744L1550.92 532.218C1550.76 532.345 1550.64 532.51 1550.57 532.698C1550.49 532.886 1550.47 533.089 1550.5 533.288C1550.53 533.487 1550.61 533.675 1550.74 533.833C1550.86 533.99 1551.03 534.112 1551.22 534.186L1551.24 534.194L1551.27 534.208C1552.59 534.703 1554.05 534.731 1555.39 534.287C1556.1 534.058 1556.83 533.878 1557.57 533.75C1560.32 533.29 1563.14 533.519 1565.79 534.416C1568.25 534.711 1570.74 534.205 1572.9 532.972C1572.98 532.922 1573.05 532.872 1573.13 532.816C1574.49 532.992 1575.88 532.87 1577.19 532.458C1578.7 531.924 1580.08 531.072 1581.23 529.958C1582.55 528.827 1583.7 527.508 1584.64 526.043L1583.39 526.084C1583.89 525.872 1584.34 525.575 1584.73 525.209C1585.52 524.44 1586.03 523.429 1586.18 522.335L1585.02 523.001C1586.18 521.792 1586.94 520.248 1587.18 518.586C1587.28 517.839 1587.27 517.08 1587.14 516.337L1586.52 516.629C1587.17 515.435 1587.38 514.046 1587.1 512.713L1586.47 513.171C1587.04 511.709 1587.03 510.083 1586.43 508.631L1585.52 509.922C1585.82 508.311 1586.13 506.701 1586.43 505.09L1585.14 506.881L1587.02 502.257L1585.97 502.84L1589.43 496.05L1588.53 496.302Z",
        },
      ],
      loop: true,
      duration: 1500,
      direction: "alternate",
      easing: "linear",
      autoplay: true,
    });
    // sign
    //=================================================================================
    anime({
      targets: sign,
      rotate: [0, 360],
      loop: true,
      duration: 10000,

      easing: "linear",
      autoplay: true,
    });
    // изменение цвета труб
    //=================================================================================
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
      d: [
        {
          value:
            "M2484.79 789.071C2484.14 783.426 2476.83 781.56 2475.02 774.655C2473.03 767.065 2474.7 764.502 2471.62 759.147C2469.52 755.488 2467.43 754.407 2466.3 753.978C2464.19 753.178 2462.34 753.469 2460.25 753.83C2457.31 754.337 2450.01 756.206 2449.76 759.443C2449.58 761.813 2453.34 762.677 2453.31 766.089C2453.29 767.743 2452.39 768.909 2453.16 770.077C2453.37 770.424 2453.68 770.705 2454.05 770.888C2454.41 771.071 2454.82 771.148 2455.23 771.111C2456.6 770.82 2456.74 768.411 2457.44 768.453C2458.03 768.487 2458.75 770.232 2458.33 771.702C2457.78 773.579 2455.2 774.241 2454.34 774.508C2447.19 776.718 2437.67 785.532 2436.17 794.008C2435.95 795.294 2435.41 798.328 2436.91 799.473C2438.91 800.997 2442.34 797.484 2447.37 795.316C2447.84 799.947 2453.74 803.608 2460.96 803.608C2466.46 803.608 2471.19 801.477 2473.34 798.408C2476.5 799.391 2479.11 799.783 2480.86 798.471C2482.29 797.394 2483.41 795.955 2484.1 794.303C2484.79 792.651 2485.03 790.845 2484.79 789.071Z",
        },
        {
          value:
            "M2470.5 794.5C2469.85 788.855 2475.62 789 2473 779C2471.01 771.41 2474.7 764.502 2471.62 759.147C2469.52 755.488 2467.43 754.407 2466.3 753.978C2464.2 753.178 2462.34 753.469 2460.25 753.83C2457.31 754.337 2450.01 756.206 2449.76 759.443C2449.58 761.813 2453.34 762.677 2453.31 766.089C2453.29 767.743 2452.39 768.909 2453.16 770.077C2453.37 770.424 2453.68 770.705 2454.05 770.888C2454.41 771.071 2454.82 771.148 2455.23 771.111C2456.6 770.82 2456.74 768.411 2457.44 768.453C2458.03 768.487 2458.75 770.232 2458.33 771.702C2457.78 773.579 2455.21 774.241 2454.34 774.508C2447.2 776.718 2439.17 782 2436.17 788.5C2435.95 789.786 2433.5 794.855 2435 796C2437 797.524 2437.96 797.168 2443 795C2443.5 802 2437.5 801 2443 803.608C2448.5 803.608 2447.5 803.608 2453.31 801C2456.46 801.983 2458 804 2460.5 803.608C2461.93 802.531 2462.81 801.152 2463.5 799.5C2464.19 797.848 2468.5 800 2470.5 794.5Z",
        },
      ],

      duration: 6000,
      easing: "easeInOutSine",
      direction: "alternate",
      autoplay: true,
      loop: true,
    });
  },
  //===================================================================================
  //============================== Волонтеры ===============================
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
      translateX: -3,
      translateY: 3,
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
  //============================== Контакты ===============================
  //===================================================================================
  startContact: function(refs) {
    const { phone, mail, message, dearEye } = refs;
    anime({
      targets: dearEye,
      scaleY: 0,
      duration: 400,
      easing: "easeInOutSine",
      direction: "alternate",
      autoplay: true,
      loop: true,
      delay: 3000,
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
        delay: 3000,
      });
    }, 1000);

    setTimeout(() => {
      anime({
        targets: message.children[2],
        scale: [0.98, 1.1],
        duration: 1000,
        easing: "easeInOutCirc",
        direction: "alternate",
        autoplay: true,
        loop: true,
        delay: 3000,
      });
    }, 3000);

    setTimeout(() => {
      anime({
        targets: mail.children[3],
        translateY: [{ value: -9 }],
        scaleY: [{ value: [1, 0] }, { value: [0, -1] }],

        duration: 1000,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true,
        delay: 3000,
      });
    }, 5000);
  },
};
