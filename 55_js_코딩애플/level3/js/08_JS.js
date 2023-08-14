// ajax 설명은 아래 써놨음

const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

for(i=0; i<products.length; i++){

    let template = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격: ${products[i].price}</p>
    </div>`

    $('.row').append(template);
}





// ajax가 뭔가요
// 새로고침없이 GET, POST 요청하는기능입니다 (더보기 같은거)
// 어캐만드나요
// 함수가 이미 잇어요 그거갖다쓰세요

// ajax 요청 제이쿼리
// get요청하는데 done(성공)하면 함수실행, 요청한 데이터는 인자에 잇음, url은 코딩애플이 서버연거임
$.get('https://codingapple1.github.io/hello.txt')
.done(function(data){
    console.log(data);
})
.fail(function(){ // 요청 실패시 실행할거
    console.log('실패함');
})

// 바닐자 JS ajax 요청
// get
fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json()) // json을 object으로 바꿔주는거
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });

// 원래 서버랑 유저는 문자만 주고받을 수 있음
// 근데 object, array 송수신 되자너 그게 '' <- 이 따옴표로 감싸서 문자열로 만들어갖고 가능한거
// 그런 자료형을 json이라고 함