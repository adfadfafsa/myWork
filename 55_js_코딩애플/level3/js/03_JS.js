const products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

for(i=0; i < products.length; i++){
    document.getElementsByClassName('card-name')[i].innerHTML = products[i].title;
    document.getElementsByClassName('card-price')[i].innerHTML = products[i].price;
}