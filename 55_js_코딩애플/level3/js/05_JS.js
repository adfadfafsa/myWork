const form0 = $('.form-select').eq(0)
const form1 = $('.form-select').eq(1)
// html 생성 / 요소에 추가 설명은 아래에 있음
// 이벤트 리스너 'input' => 인풋값 변경 때마다 이벤트 발생
// .val() => value 반환 함수
form0.on('input',function(){
if(form0.val() === '셔츠'){
    // 1. 깡 html 내용 선언
    const shirtSize =
    `<option>95</option>
    <option>100</option>
    <option>105</option>`;
    // 2. form1 내부 html 비우기
    form1.html('');
    // 3. form1 내부 html 내용 shirtSize 추가
    form1.append(shirtSize);
} else if (form0.val() === '바지'){
    const pantsSize =
    `<option>28</option>
    <option>30</option>`;
    form1.html('');
    form1.append(pantsSize);
} else {
}})

// JS로 html 생성 문법
// 생성 (JS에서 '생성'만 된거임 HTML에 아직 없음)
document.createElement('p'); //p태그 생성
document.createElement('p').innerHTML = '응애'; //이런거 됨

// 1. appendChild
// 셀렉터.appendChild()로 추가
document.getElementById('test').appendChild(document.createElement('p'));
// 인데 왜안돼 씨발

// 2. insertAdjacentHTML
// 변수에 깡으로 HTML 하드코딩
const 템플릿 = '<p>반갑습니다</p>'
// 그걸 셀렉터 위치에 추가
document.getElementById('test').insertAdjacentHTML('beforeend', 템플릿);
// 제이쿼리
$('#test').append(템플릿);

// 1,2번 둘 다 요소 맨 뒤에 추가시키는거임 = 위치가 맨 끝이다
