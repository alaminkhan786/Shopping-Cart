const plusBtn = document.getElementById('plusBtn');

plusBtn.addEventListener('click', function(){
    const firstInput = document.getElementById('firstInput');
    const firstInputValue = parseFloat(firstInput.value);
    firstInput.value = firstInputValue + 1;

    const productPrice = document.getElementById('productPrice');
    const currentProductPrice = parseFloat(productPrice.innerText);
    productPrice.innerText = currentProductPrice * firstInput.value;
    

})