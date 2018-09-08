; (function () {

    const slider = document.querySelector('.c-slider__bar');
    const point = document.querySelector('.c-slider__point');
    const input = document.querySelector('.c-slider__field');
    const sliderCoords = getCoords(slider);
    const range = {
        begin: 0,
        end: 100,
        step: 1
    }

    point.addEventListener('mousedown', function (e) {
        document.addEventListener('mousemove', handlerPointMove);
        document.addEventListener('mouseup', handlerMouseUp);

        return false; // disable selection start (cursor change)
    });

    point.addEventListener('dragstart', (e) => false);


    function handlerPointMove(e) {
        let leftPos = e.pageX - sliderCoords.left;
        setPointPos(leftPos);
    }

    function handlerMouseUp(e) {
        document.removeEventListener('mousemove', handlerPointMove);
        document.removeEventListener('mouseup', handlerMouseUp);
    }

    /*========================
        mobile events
    ===========================*/

    function handlerPointTouchMove(e) {
        let leftPos = e.changedTouches[0].pageX - sliderCoords.left;
        setPointPos(leftPos);
    }

    function handlerPointTouchEnd(e) {
        document.removeEventListener('touchmove', handlerPointTouchMove);
        document.removeEventListener('touchend', handlerPointTouchEnd);
    }

    var isMobile = window.matchMedia("screen and (max-width: 760px)");

    if (isMobile.matches) {

        point.addEventListener('touchstart', function (e) {
            document.addEventListener('touchmove', handlerPointTouchMove);
            document.addEventListener('touchend', handlerPointTouchEnd);
        });

    }

    /*========================
        helper functions
    ===========================*/

    function getCoords(el) {
        const box = el.getBoundingClientRect();

        return {
            top: box.top,
            left: box.left
        }
    }

    function setPointPos(leftPos) {
        let rightEdge = slider.offsetWidth - point.offsetWidth / 2;

        if (leftPos < 0) leftPos = 0;
        if (leftPos > rightEdge) leftPos = rightEdge;

        let fillVal = Math.ceil(leftPos / (rightEdge / range.end));
        input.innerText = fillVal;
        point.style.left = leftPos + 'px';
        slider.style.background = 'linear-gradient(to right, transparent, transparent 12px, #fade41 12px, #fade41 ' + fillVal + '%, transparent ' + fillVal + '%)';
    }


})();