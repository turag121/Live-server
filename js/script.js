let unitPrice = 1000;

let qty = document.getElementById("qty");
let total = document.getElementById("total");
let btn = document.getElementById("btn")

qty.addEventListener("input", function(){

    let quantity = parseInt(qty.value);

    if(quantity < 0){
        alert("Quantity cannot be negative");
        qty.value = 0;
        quantity = 0;
    }

    let totalPrice = unitPrice * quantity;

    total.value = totalPrice;

});

btn.addEventListener("click", function(){
    let totalPrice= parseInt(total.value)

    if(totalPrice>1000){
         alert("You are eligible for a gift coupon!");
    }
})