document.getElementById('firstUnit').value = 1;

const plusBtn = document.getElementById('plusBtn');
const productPrice = document.getElementById('productPrice');
const totalAmount = document.getElementById('totalAmount');


plusBtn.addEventListener('click', function(){
    const firstUnit = document.getElementById('firstUnit');
    const newfirstUnit = parseInt(firstUnit.value);
    firstUnit.value = newfirstUnit + 1;
    
    const productPriceValue = parseFloat(productPrice.innerText);
    const newProductTotal = productPriceValue + 1219;
    productPrice.innerText = newProductTotal;

    const subTotal = document.getElementById('subTotal');
    const netSubTotal = parseFloat(subTotal.innerText);
    const lima = netSubTotal + 1219;
    subTotal.innerText = lima;

    const tax = parseFloat(document.getElementById('tax').innerText);
    const newTotalAmount = tax + lima;
    totalAmount.innerText = newTotalAmount;

    console.log(netSubTotal);

})

const minusBtn = document.getElementById('minusBtn');

minusBtn.addEventListener('click', function(){
    const firstUnit = document.getElementById('firstUnit');
    const newfirstUnit = parseInt(firstUnit.value);
    firstUnit.value = newfirstUnit - 1;
    
    if (firstUnit.value <= 0) {
        alert('Product amount cannot Zero');
        firstUnit.value = 1;
    }
    else{
        const productPriceValue = parseFloat(productPrice.innerText);
        const newProductTotal = productPriceValue - 1219;
        productPrice.innerText = newProductTotal;
    
        const subTotal = document.getElementById('subTotal');
        const netSubTotal = parseFloat(subTotal.innerText);
    
        subTotal.innerText = netSubTotal - 1219;
    }
})

