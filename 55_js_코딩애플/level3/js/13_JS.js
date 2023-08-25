$(window).scroll(function(){
    // scrollTop 크기 값 변수로 선언
    let Height = $(window).scrollTop();
    console.log(Height);

    // 스크롤 크기 별 opacity 효과
    let Y1 = -1/400*Height+2.5;
    let Y2 = -1/400*Height+4;
    let Y3 = -1/400*Height+5.5;
    $('.card-box').eq(0).css('opacity', Y1);
    $('.card-box').eq(1).css('opacity', Y2);
    $('.card-box').eq(2).css('opacity', Y3);

    // 스크롤 크기 별 scale 효과
    if(600 <= Height < 1200){
        let K1 = -1/4000*Height+1.15;
        $('.card-box').eq(0).css('scale', K1);
    }
    if(1200 <= Height < 1800){
        let K2 = -1/4000*Height+1.3;
        $('.card-box').eq(1).css('scale', K2);
    }
    if(1800 <= Height < 2200){
        let K3 = -1/4000*Height+1.45;
        $('.card-box').eq(2).css('scale', K3);
    }
})

// 망한코드
// for(i=1; i<=3; i++){
//     if(600*i <= Height < 600*(i+1)){
//         let K = -1/4000*Height+(1+0.15*i);
//         $('.card-box').eq((i-1)).css('scale', K1);
//     }
// }