$('.list').click(function(e){
    openTab(e.target.dataset.name);
})
function openTab(i){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
}

const car2 = {
    name: '소나타',
    price: [50000, 3000, 4000],
    color: 'white',
}

document.getElementsByClassName('productName')[0].innerHTML = car2.name;
document.getElementsByClassName('productPrice')[0].innerHTML = car2.price[0];

// 숙제

const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

for(i=0; i < products.length; i++){
    document.getElementsByClassName('card-name')[i].innerHTML = products[i].title;
    document.getElementsByClassName('card-price')[i].innerHTML = products[i].price;
}