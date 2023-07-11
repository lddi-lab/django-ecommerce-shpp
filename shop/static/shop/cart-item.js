if (localStorage.getItem('cart')==null){
    var cart = {};
} 
else {
    cart = JSON.parse(localStorage.getItem('cart'));
}

for (item in cart){
    let name = cart[item][1];
    let quantity = cart[item][0];

    itemString = `<li class="list-group-item d-flex justify-content-between align-items-center">${name}<span class="badge bg-primary rounded-pill">${quantity}</span></li>`;
    $('#item_list').append(itemString);

}