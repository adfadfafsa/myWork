// 아무튼 서버에서 보낸 데이터임 (사이즈)
let pants = [28, 30, 32, 34];
let shirts = [95, 100, 105]

// 반복문 forEach, for in => 걍 for 축약시켜놓은거임
// 1. array.forEach(function(){}) => 배열에 배열 자료 갯수만큼 반복함

// 콜백함수 들어감. 콜백함수에 인자넣어주면 반복하면서 배열값들 쓸 수 있음
$('.form-select').eq(0).on('input',function(){
    if($('.form-select').eq(0).val() === '셔츠'){
        $('.form-select').eq(1).removeClass('hideMenu');
        $('.form-select').eq(1).html('');
        shirts.forEach(function(size){ // forEach 등장
            $('.form-select').eq(1).append('<option>' + size + '</option>')
        })
    } else if ($('.form-select').eq(0).val() === '바지'){
        $('.form-select').eq(1).removeClass('hideMenu');
        $('.form-select').eq(1).html('');
        pants.forEach(function(size){
            $('.form-select').eq(1).append('<option>' + size + '</option>')
        })
    }
})

// 2. for (자료 in 오브젝트) => 오브젝트 자료 갯수만큼 반복 돌리는거임
// 인자에서 변수 선언하고 출력하면 key만 나옴
// obj[key] 하면 value 나옴
let 응애 = {name: 'kim', age: 20}
for (let asdf in 응애){
    console.log(asdf); // 이러면 key 다 나옴 원래 그럼
    console.log(응애[asdf]) // 근데 이러면 value 다 나옴
}

