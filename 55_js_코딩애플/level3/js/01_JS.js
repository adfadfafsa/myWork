$('.list').click(function(e){
    openTab(e.target.dataset.name);
})
function openTab(i){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
}

const car = ['소나타', 50000, 'white'];
car[0] = '아반떼';
car[3] = '응애';
car.sort(); // 정렬
car.slice(1,3); // 1번~ 3번 전까지 자르기

const car2 = {
    name: '소나타',
    price: 50000,
    color: 'white',
}
car2.price = 55000;

document.getElementsByClassName('productName')[0].innerHTML = car2.name;
$('.productPrice').html(car2['price']);