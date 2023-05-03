"use strict"

function findProductFunction() {
    const product = document.getElementById('product');
    const numbers = document.getElementById('numbers');
    const searchInput = document.getElementById('searchInput')
    const caseProduct = [['Bread', 15], ['Tomato', 5], ['Chease',7], ['Milk', 13], ['Butter', 10], ['Ice-Cream', 17], ['Sour Cream', 3]];
    for (let i = 0; i < caseProduct.length; i++) {
        const productName = caseProduct[i][0]
        const numbersProduct = caseProduct[i][1]

        if(searchInput.value === productName) {
            product.innerHTML = productName
            numbers.innerHTML = numbersProduct
        }
    }

}

