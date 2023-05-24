let addButton = document.querySelector('#add-product')
let productList = document.querySelector('#product-list')

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    let template = document.querySelector('.products')
    newProduct = template.cloneNode(true)

    let inputs = ['name', 'price', 'quantity']

    inputs.forEach(e => {
        let input = newProduct.querySelector(`input[name="${e}"]`)
        input.value = ''
    })

    productList.appendChild(newProduct)
})