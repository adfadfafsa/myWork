// sort 설명은 아래에

// array
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


// 숙제
// 1. 이름 역순 정렬 만들기
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

// 2. 6만원 이하만 보기
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







// 어레이 정렬
// 1. sort() => 문자정렬
// 2. sort(function(a,b){return a-b;}) => 숫자정렬
// sort가 젤 중요한듯
// 3. filter(function(a){return a 뭐 어쩌구}) => 자료 원하는거만 필터
// 4. map(function(a){return a 뭐 어쩌구}) => 어레이 내 모든 자료 변형 

let array = [7,5,3,2,40];
console.log(array);

// 1. 문자정렬이라 맨 앞글자만 따짐
array.sort();
console.log(array);

// 2. (오름차순)
array.sort(function(a,b){
    return a-b;
})
console.log(array);

// 2. (내림차순)
array.sort(function(a,b){
    return b-a;
})
console.log(array);
// a-b 해서 양수면 오른쪽으로, 음수면 왼쪽으로 보내는 함수임 => 리턴값 음양 바꿔주면 순서바뀌는거임

// 2. 문자열 내림차순
let array2 = ['a', 'b', 'c'];
array2.sort(function(a,b){
    if(a>b){return -1}
    else if(b>a){return 1}
    else{return 0}
})
console.log(array2)

// 3. 얘는 변수에 새 어레이로 저장해서 만들어야함 (원본 남겨줌)
let array3 = [7,30,80,2,40]
array4 = array3.filter(function(a){
    return a > 20; // 20 이상 요소만 보이게 필터링
})
console.log(array3);
console.log(array4);

// 4. 얘도 새 어레이로 만들어 저장해야함 (원본유지)
let array5 = [1,2,3,4,5];
let array6 = array5.map(function(a){
    return a * 5; // 4. 모든 자료 5 곱해보기
})
console.log(array5);
console.log(array6);