$(window).scroll(function () {
    let
        wh = $(window).height(),
        st = $(window).scrollTop();

    const
        easing = "easeOutExpo";
    // offset = 1;

    if (st > wh) {
        // animate({ 속성: 값, 속성: 값, ...}[, 1000,][, easing])
        // 시간 단위는 ms가 디폴트
        // 가속도는 swing이 디폴트
        $(".motion1").stop().animate({ top: 0, opacity: 1 }, 800, easing);
        $(".motion2").stop().animate({ top: 0, opacity: 1 }, 1000, easing);
        $(".motion3").stop().animate({ top: 0, opacity: 1 }, 1200, easing);
        $(".motion4").stop().animate({ top: 0, opacity: 1 }, 1400, easing);
    } else {
        $(".motion1").stop().animate({ top: 1000, opacity: 1 }, 1000, easing);
        $(".motion2").stop().animate({ top: 1500, opacity: 1 }, 1000, easing);
        $(".motion3").stop().animate({ top: 2000, opacity: 1 }, 1000, easing);
        $(".motion4").stop().animate({ top: 2500, opacity: 1 }, 1000, easing);
    }
});
