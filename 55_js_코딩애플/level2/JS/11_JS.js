// html에서 숨겨놨던 dataset 값 출력 -> 콘솔창에서 document.querySelector('.tab-button').dataset.name
// -> 셀렉터.dataset.자료이름


$('.list').click(function(e){
    openTab(e.target.dataset.name);
})

function openTab(i){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
}







// 1. for문으로 탭 만들기
// for (let i = 0; i < $('.tab-button').length; i++){
//   $('.tab-button').eq(i).on('click', function(){
//     openTab(i);
//   })
// };

// 2. if문으로 탭 만들기
// $('.list').click(function(e){
//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         openTab(0)
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]){
//         openTab(1)
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]){
//         openTab(2)
//     }
// })
// function openTab(i){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(i).addClass('show');
//   }