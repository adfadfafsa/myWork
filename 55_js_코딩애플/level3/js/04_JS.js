const form0 = $('.form-select').eq(0)
const form1 = $('.form-select').eq(1)

// 이벤트 리스너 'input' => 인풋값 변경 때마다 이벤트 발생
// .val() => value 반환 함수
form0.on('input',function(){
if(form0.val() === '셔츠'){
    form1.removeClass('hideMenu');
} else {
    form1.addClass('hideMenu');
}})