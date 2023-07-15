if (localStorage.getItem('cart')==null){
    var cart = {};
} 
else {
    cart = JSON.parse(localStorage.getItem('cart'));
}

var total = 0;
for (item in cart){
    let name = cart[item][1];
    let quantity = cart[item][0];
    let price = cart[item][2];
    total = total + cart[item][2];


    itemString = `<li class="list-group-item d-flex justify-content-between align-items-center"><span class="badge bg-primary rounded-pill">${quantity}</span> ${name} <span class="badge bg-warning rounded-pill" >$ ${price}</span></li>`;
    $('#item_list').append(itemString);
}

var totalPrice = `<li class="list-group-item d-flex justify-content-between aligh-items-center"><b>Your total <span class="badge bg-danger rounded-pill" >$${ total }</span></b></li>`;
$('#item_list').append(totalPrice);

$('#items').val(JSON.stringify(cart));