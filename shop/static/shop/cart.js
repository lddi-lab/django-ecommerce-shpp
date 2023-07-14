console.log('This is working');

if(localStorage.getItem('cart')==null){
    var cart = {};
}
else{
    cart = JSON.parse(localStorage.getItem('cart'));
}

$(document).on('click','.atc',function(){
    console.log('The add to cart button is clicked');
    var item_id = this.id.toString();
    console.log(item_id);

    if(cart[item_id] != undefined){
        quantity = cart[item_id][0] + 1;
        cart[item_id][0] = quantity;
        cart[item_id][2] = cart[item_id][2] + parseFloat($('#price' + item_id).text());
    }
    else{
        quantity = 1;
        price = parseFloat($('#price' + item_id).text());
        name = $('#nm'+item_id).text();
        cart[item_id] = [quantity, name, price];

    }
    console.log(cart);
    localStorage.setItem('cart',JSON.stringify(cart));
    document.getElementById('cart').innerHTML = 'Cart('+Object.keys(cart).length +')';

    // Get the popover element
    var popover = $('[data-bs-toggle="popover"]');

    // Update the popover content
    newContent = DisplayCart(cart);
    popover.attr('data-bs-content', newContent);
    var popoverInstance = new bootstrap.Popover(popover[0]);
    popoverInstance.update();

});

function DisplayCart(cart){
    var cartString = "";
    cartString += "<h5>This is your cart</h5>"
    var cartIndex = 1;

    for(var x in cart){
        cartString += cartIndex;
        cartString += $('#nm'+x).text() + ' Qty: ' + cart[x][0] + '<br>' ;
        cartIndex += 1;
    }

    cartString += "<a href='/checkout' class='btn btn-warning' id='checkout'>Checkout</a>";
    return cartString;
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))