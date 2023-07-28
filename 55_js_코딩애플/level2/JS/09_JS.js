// $('.tab-button').eq(0).on('click',function(){
//     $('.tab-button').removeClass('orange')
//     $('.tab-content').removeClass('show')
//     $('.tab-button').eq(0).addClass('orange')
//     $('.tab-content').eq(0).addClass('show')
// })
// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').eq(2).addClass('show');
// })

const tabBtn = $('.tab-button');
const tabCont = $('.tab-content');
// const addOran = addClass('orange');
// const addShow = addClass('show');
// const remOran = removeClass('orange');
// const remShow = removeClass('show');
// 야 이거 메서드는 변수로 안되더라 시발 원래 이런건가

for(let i = 0; i < tabCont.length; i++){
    tabBtn.eq(i).on('click',function(){
        tabBtn.removeClass('orange');
        tabCont.removeClass('show');
        tabBtn.eq(i).addClass('orange');
        tabCont.eq(i).addClass('show');;
    })
}

