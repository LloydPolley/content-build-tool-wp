'use strict';

(function () {
    console.log('running')
    var animationElements = document.querySelectorAll('.load-animation');
    var marginPxLoad = 250;
    var speed = 16;

    var loadElements = debounce(function () {
        var winScroll = window.innerHeight + window.pageYOffset;
        for (var i = 0; i < animationElements.length; i++) {
            if (winScroll > animationElements[i].offsetTop + marginPxLoad) {
                animationElements[i].classList.add('inView');
            }
        }
    }, speed);

    //If failsafe for if none exist
    if (animationElements.length >= 0) {
        window.addEventListener('scroll', loadElements);
    }
    window.onload = loadElements();
    // loadElements();

    //Limits number of times event is run - on scroll in this case
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
})();

//Instance of debounce running scrolling function through - change speed for number of times event should run
// const loadElements = debounce(function () {
//     console.log('debouce', window.pageYOffset)
//     for(var i = 0; i < animationElements.length; i++){
//         let currentPos = animationElements[i].getBoundingClientRect();
//         const height = animationElements[i].offsetHeight * 1.75;
//         var mid = currentPos.top - height;
//         if (mid < 0) {
//             animationElements[i].classList.add('inView');
//         }
//     }
// }, speed);