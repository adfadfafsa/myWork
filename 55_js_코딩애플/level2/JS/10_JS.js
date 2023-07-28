// document.querySelector('.black-bg').addEventListener('click',function(event){ // 인수 넣어줘야댐 (짐은 event 넣엇음)
//     event.target; // 실제로 유저가 누른거만
//     event.currentTarget; // 이벤트 리스너 달린 곳만(this)
//     event.preventDefault(); // 이벤트 막아줌
//     event.stopPropagation(); // 상위요소로 이벤트 버블링 막아주세요
// })

$('#modal-btn').on('click',function(){
    $('.black-bg').eq(0).addClass('show-modal');
    $('.white-bg').eq(0).addClass('show-modal');
})
$('#close').on('click',function(){
    $('.black-bg').eq(0).removeClass('show-modal');
})

$('.black-bg').on('click',function(e){
if($(e.target).is($('.black-bg'))){
    // if(e.target == document.~~ 어쩌구('클래스명')) = if( $(e.target).is($('.클래스명')) )
    $('.black-bg').removeClass('show-modal');
}
})
// 위에거가 바닐라 JS에선 이거임
// document.getElementsByClassName('.black-bg')[0].addEventListener('click',function(e){
//     if(e.target == document.getElementsByClassName('black-bg')[0]){
//         document.getElementsByClassName('black-bg')[0].classList.remove('show-modal');
//     }
// })