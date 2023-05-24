let addButton = document.querySelector('#add-product')
let productList = document.querySelector('#product-list')

addButton.addEventListener('click', (event) => {
    event.preventDefault()

    let template = document.querySelector('.products')
    newProduct = template.cloneNode(true)

    let inputs = ['name', 'price', 'quantity']

    inputs.forEach(e => {
        let input = newProduct.querySelector(`input[name="${e}"]`)
        input.value = ''
    })

    validateForm('price', newProduct.querySelector('input[name="price"]'))
    validateForm('quantity', newProduct.querySelector('input[name="quantity"]'))

    sumProductList()
    productList.appendChild(newProduct)
})


function sumProductList() {
    let products = document.querySelectorAll('.products')
    let totalSum = 0

    products.forEach(e => {
        let productPrice = e.querySelector('input[name="price"]')
        let procuctQuantity = e.querySelector('input[name="quantity"]')
        let productValue = procuctQuantity.value * productPrice.value

        totalSum += productValue
    })

    document.querySelector('#total-pay').innerHTML = `R$ ${totalSum}`
}


function validateForm(type, input) {
    if (type === 'price') {
        input.addEventListener('input', (event) => {
            event.preventDefault()

            if (input.value < 0) {
                input.value = ''
                alert('não use números menores que zero!')
            }

            sumProductList()
        })
    }

    else if (type === 'quantity') {
        input.addEventListener('input', (event) => {
            event.preventDefault()

            if (input.value < 1) {
                input.value = 1
                alert('quantidade minima é 1')
            }

            if (parseFloat(input.value) !== parseInt(input.value, 10)) {
                input.value = parseInt(input.value)
                alert("apenas números inteiros são permitidos neste campo!")
            }

            sumProductList()
        })
    }
}


validateForm('price', document.querySelector('input[name="price"]'))
validateForm('quantity', document.querySelector('input[name="quantity"]'))