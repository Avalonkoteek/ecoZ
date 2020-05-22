import anime from "animejs";



export const overlayAnimation = {
    // START ANIME
    overlayAnimationStart: function (partOfSvg) {

        const last = 'M0,0h1441.629v124.166s62.551,147.34,0,273.344-61.857,74.26,0,206.834,11.018,204.715,0,273.391-329.1,24.158-329.1,24.158h-1110.941l-.043-24.158-1.5-855.541Z'
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
    overlayAnimationEnd:function(partOfSvg){
        const last = 'M0,0h1441.629v124.166s-779.258-68.518-841.809,57.484,44.479,158.338,106.336,290.912,58.348,255.676,47.33,324.352-29.576,104.979-29.576,104.979h-722.326l-.043-24.158-1.5-855.541Z'
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
    }

}