// js
document.addEventListener('DOMContentLoaded', function (){});

// jq
$(function(){
    $('.slider1').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        slidewidth:1484,
        // pager: true,
    });

    $('.slider2').bxSlider({
        auto: true,
        // autoControls: true,
        stopAutoOnClick: true,
        pager: false,
        slideMargin: 24,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 359
    });
});