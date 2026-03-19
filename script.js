let unitPrice = 1000;

let qty = document.getElementById("qty");
let total = document.getElementById("total");

qty.addEventListener("input", function(){

    let quantity = parseInt(qty.value);

    if(quantity < 0){
        alert("Quantity cannot be negative");
        qty.value = 0;
        quantity = 0;
    }

    let totalPrice = unitPrice * quantity;

    total.value = totalPrice;

    if(totalPrice > 1000){
        alert("You are eligible for a gift coupon!");
    }

});