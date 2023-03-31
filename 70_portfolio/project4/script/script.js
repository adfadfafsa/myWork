// 문서가 준비되면 실행시키는 명령어 -> 인덱스에서 스크립트를 먼저 쓰면 써줘야댐
// document.addEventListener('DOMContentLoaded', function(){}) -> JS
// $(document).ready(function(){}); -> 제이쿼리.
$(document).ready(function () {
    $(function () {
        /* mobile toggler button */
        let flag = 0;
        $(".toggler").click(function () {
            let ww = $(window).width();
            if (ww < 576) {
                if (flag === 0) {
                    // .toggler에 active 클래스 추가 -> 버튼모양 X로 만들기
                    $(this).addClass("active");
                    // animate({속성:값, 속성:값, ...}, 200)
                    $("#gnb").stop().animate({ right: 0 }, 1000, 'easeOutExpo');
                    flag = 1;
                } else {
                    // .toggler에 active 클래스 삭제 -> 버튼모양 원상복구
                    $(this).removeClass("active");
                    $("#gnb")
                        .stop()
                        .animate({ right: -50 + "%" }, 300, 'easeInExpo');
                    flag = 0;
                }
            }
        });

        // 창의 크기가 바뀌면
        $(window).resize(function () {
            // 창 width를 ww에 할당
            let ww = $(window).width();
            if (ww > 576) {
                $("#gnb").css({ right: 0 });
                $(".toggler").addClass("active");
            } else {
                $("#gnb").css({ right: -50 + "%" });
                $(".toggler").removeClass("active");
            }
        });
    });
});