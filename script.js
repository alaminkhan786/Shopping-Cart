function clickHandle(isIncrement, product, unitPrice) {
    const productInput = document.getElementById(`${product}Input`);
    let newproductInput = parseInt(productInput.value);
    if(isIncrement){
        newproductInput += 1;
    }
    else{
        if (newproductInput <= 0) {
            alert('Product unit cannot minus')
            return
        }
        else{
            newproductInput -= 1;
        }
    }
    productInput.value = newproductInput;

    const productPrice = (document.getElementById(`${product}Price`));
    const totalproductPrice = newproductInput * unitPrice;
    productPrice.innerText = totalproductPrice;
}

document.getElementById('phonePlusBtn').addEventListener('click', function(){
    clickHandle(true, 'phone', 1219);
    undateAllFunctions();
})

document.getElementById('phoneMinusBtn').addEventListener('click', function(){
    clickHandle(false, 'phone', 1219);
    undateAllFunctions();
})

document.getElementById('casePlusBtn').addEventListener('click', function(){
    clickHandle(true, 'case', 59);
    undateAllFunctions();
})

document.getElementById('caseMinusBtn').addEventListener('click', function(){
    clickHandle(false, 'case', 59);
    undateAllFunctions();
})

function subTotal(){
    const phonePrice = document.getElementById('phonePrice');
    const phonePriceValue = parseFloat(phonePrice.innerText);
    const casePrice = document.getElementById('casePrice');
    const casePriceValue = parseFloat(casePrice.innerText);

    const subTotal = document.getElementById('subTotal');
    let newSubTotal = phonePriceValue + casePriceValue;
    subTotal.innerText = newSubTotal;
}

function tax(){
    const subTotal = document.getElementById('subTotal');
    const subTotalValue = parseFloat(subTotal.innerText);

    const tax = document.getElementById('tax');
    let totalTax = parseFloat((subTotalValue / 100) * 10).toFixed(2);
    tax.innerText = totalTax;
}

function totalAmount(){
    const subTotal = document.getElementById('subTotal');
    const subTotalValue = parseFloat(subTotal.innerText);
    const tax = document.getElementById('tax');
    const totalTax = parseFloat(tax.innerText);

    const totalAmount = document.getElementById('totalAmount');
    let newTotalAmount = subTotalValue + totalTax;
    totalAmount.innerText = newTotalAmount;
}

function undateAllFunctions(){
    subTotal();
    tax();
    totalAmount();
}

document.getElementById('remove-phone').addEventListener('click', function(){
    const removePhoneItem = document.getElementById('remove-Phone-item');
    removePhoneItem.style.display = 'none';

    updateCalculationsAfterRemove('phone');
})

document.getElementById('remove-case').addEventListener('click', function(){
    const removeCaseItem = document.getElementById('remove-Case-item');
    removeCaseItem.style.display = 'none';

    updateCalculationsAfterRemove('case');
})

function updateCalculationsAfterRemove(product){
    const productPrice = document.getElementById(`${product}Price`);
    const productPriceValue = parseFloat(productPrice.innerText);

    const subTotal = document.getElementById('subTotal');
    const subTotalValue = parseFloat(subTotal.innerText);    
    const newSubTotal = subTotalValue - productPriceValue;
    subTotal.innerText = newSubTotal;

    const tax = document.getElementById('tax');
    let totalTax = ((newSubTotal / 100) * 10).toFixed(2);
    tax.innerText = totalTax;  

    const totalAmount = document.getElementById('totalAmount');
    let newTotalAmount = newSubTotal + parseFloat(totalTax);
    totalAmount.innerText = newTotalAmount;
}

document.getElementById('order').addEventListener('click', function(){
    const totalAmount = document.getElementById('totalAmount');
    const newTotalAmount = parseFloat(totalAmount.innerText);
    if (newTotalAmount === 0) {
        alert('You do not choose any product!');
        return
    }
    else{
        const shoppingCart = document.getElementById('shoppingCart');
        shoppingCart.style.display = 'none';
    
        const orderConfirmed = document.getElementById('orderConfirmed');
        orderConfirmed.style.display = 'block';
    }
})