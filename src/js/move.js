import jQuery from 'jquery';

function getSlideWidth() {
    return parseInt(document.getElementById('board').style.minWidth, 10);
}

function setBoardPosition(element, offset) {
    element.style.left = offset + "px";
    setProgression(offset);
}

function setElementsPosition(elements, offset, ratio) {
    for (let i = 0; i < elements.length; i++) {
        let elementOffset = (offset + elements[i].parentElement.offsetLeft) * ratio;
        elements[i].style.left = elementOffset + "px";
    }
}

function getSlideWidthFactor(currentOffset) {
    var doubleslides = document.querySelectorAll('.js-board-doubleslide');
    var factor = 1;
    for (let i = 0; i < doubleslides.length; i++) {
        if (Math.abs(currentOffset) === doubleslides[i].offsetLeft) {
            factor = 2;
        }
    }

    return factor;
}

function setProgression(offset) {
    var boardWidth = parseInt(document.getElementById('board').offsetWidth, 10);
    var progression = (Math.abs(offset) + document.documentElement.clientWidth) * 100 / boardWidth;

    document.getElementById('progressbar').style.width = progression + '%';
}

function setLazyloading(offset) {
    jQuery('#board').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(event) {
        var lazyImages = document.querySelectorAll('.js-lazy');
        var lazyOffset = Math.abs(offset) + document.documentElement.clientWidth + parseInt(document.getElementById('board').style.minWidth, 10);
        for (let i = 0; i < lazyImages.length; i++) {
            if (lazyOffset >= jQuery(lazyImages[i]).offset().left) {
                lazyImages[i].classList.remove('js-lazy');
                jQuery(lazyImages[i]).attr('src', jQuery(lazyImages[i]).attr('data-src')).removeAttr('data-src');
            }
        }
    });
}

var move = {

    to: function (offset) {
        var minOffset = 0;
        var maxOffset = parseInt(document.getElementById('board').offsetWidth * -1 + document.documentElement.clientWidth, 10);
        offset = Math.min(offset, minOffset);
        offset = Math.max(offset, maxOffset);
        setBoardPosition(document.getElementById('board'), offset);
        setElementsPosition(document.querySelectorAll('.js-element-zm2'), offset, -0.3);
        setElementsPosition(document.querySelectorAll('.js-element-zm1'), offset, -0.15);
        setElementsPosition(document.querySelectorAll('.js-element-zp1'), offset, 0.15);
        setElementsPosition(document.querySelectorAll('.js-element-zp2'), offset, 0.3);
        setLazyloading(offset);
    },

    next: function() {
        var currentOffset = parseInt(document.getElementById('board').style.left, 10);
        move.to(currentOffset - getSlideWidth() * getSlideWidthFactor(currentOffset));
    },

    prev: function() {
        var currentOffset = parseInt(document.getElementById('board').style.left, 10);
        move.to(currentOffset + getSlideWidth() * getSlideWidthFactor(currentOffset + getSlideWidth() * 2));
    }
};

module.exports = move;

