import anime from "animejs";

export const illustrationAnimation = {

    // MOVING ILLUSTRATION
    //====================================
    movingIllustration: function (illustration, x, scale) {

        anime({
            targets: partOfSvg,
            d: [{
                value: last
            }],
            duration: 750,
            easing: 'easeInOutSine',
            direction: "normal",
            autoplay: true
        });

    },
   

}