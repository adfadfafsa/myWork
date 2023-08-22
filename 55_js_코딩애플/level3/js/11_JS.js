// 브라우저 로컬 스토리지 세션 스토리지

// => 콘솔창에서 어플리케이션 드가면 로컬, 세션 스토리지 확인 가능
// => 세션은 사이트를 벗어나면 정보 휘발, 로컬 스토리지는 클라이언트가 지우지 않는 한 영구적
// => 로컬 스토리지는 자료를 바로 수정할 수 없어서 꺼내고 수정하고 다시 넣어야함

// => 키: 벨류 형태로 저장됨 (localStorage.setItem('키', 벨류))
// => 원래는 문자 / 숫자만 저장가능, json으로 바꾸면 옵젝 어레이도 가능

// => 세션 스토리지 사용법은 아래 로컬 스토리지와 같음
// => 그냥 localStorage를 sessionStorage로 바꿔주면 됨

// 로컬스토리지에 저장
localStorage.setItem('이름', 'kim');
// 출력
localStorage.getItem('이름');
// 삭제
localStorage.removeItem('이름');
// json 변환
let arr = [1,2,3]; // 어레이 하나 놓고
let newArr = JSON.stringify(arr); // JSON.stringfy : array, object -> json

localStorage.setItem('num', newArr); // stringify된 어레이를 쓴다
let output = localStorage.getItem('num');

JSON.parse(output); // JSON.parse : json -> array, object
console.log(output); // 그리고 다시 array나 object로 바꾼다


// 숙제는 저어기 맨 아래에 있음



const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

// array html에 추가
for(i=0; i<products.length; i++){

    let template = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격: ${products[i].price}</p>
    <button class="buy">구매</button>
    </div>`

    $('.row').append(template);
}

// 정렬 후 html에 추가
$('.btn').eq(0).on('click',function(){
    // 가격 순 정렬
    products.sort(function(a,b){
        return a.price - b.price;
    })

    // html 내용 제거
    $('.row').html('');

    // 정렬 끝났으니 다시 html에 추가
    for(i=0; i<products.length; i++){

        let template = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격: ${products[i].price}</p>
        </div>`
    
        $('.row').append(template);
    }
})

// 이름 역순 정렬
$('.btn').eq(1).on('click',function(){
    // 이름 역순 정렬
    products.sort(function(a,b){
        if(a.title > b.title){
            return -1;
        } else if (a.title < b.title){
            return 1;
        } else {
            return 0;
        }
    })

    $('.row').html('');
    for(i=0; i<products.length; i++){
        let template = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격: ${products[i].price}</p>
        </div>`
        $('.row').append(template);
    }
})

// 6만원 이하만
$('.btn').eq(2).on('click',function(){
    // 필터링
    let filteredProducts = products.filter(function(a){
        return a.price <= 60000;
    })

    $('.row').html('');
    for(i=0; i<filteredProducts.length; i++){
        let template = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${filteredProducts[i].title}</h5>
        <p>가격: ${filteredProducts[i].price}</p>
        </div>`
        $('.row').append(template);
    }
})



// 숙제
// 답지
// $('.buy').click(function(e){
//     var title = $(e.target).siblings('h5').text();

//     if(localStorage.getItem('cart') != null){
//         var 꺼낸거 = JSON.parse(localStorage.cart);
//         꺼낸거.push(title);
//         localStorage.setItem('cart',JSON.stringify(꺼낸거));
//     } else{
//         localStorage.setItem('cart',JSON.stringify([title]))
//     }
// })

$('.buy').on('click',function(e){
    let title = $(e.target).siblings('h5').text(); // title = 어레이 상품 제목

    if(localStorage.getItem('cart') == null){ // cart 키에 암것도 없으면
        localStorage.setItem('cart', JSON.stringify([title])) // 'cart' 키 만들고 title 추가해주세요
        // => JSON 형태로 만들어서 추가해야함

    } else { // cart 키에 뭔가 있으면
        let output = JSON.parse(localStorage.cart) // output을 선언할건데 이건 cart를 오브젝트로 바꾼거구요
        output.push(title) // output에 title 추가해주세요
        localStorage.setItem('cart',JSON.stringify(output)); // => 그리고 output을 다시 JSON으로 만들어서 스토리지에 추가해주세요
    }
})


