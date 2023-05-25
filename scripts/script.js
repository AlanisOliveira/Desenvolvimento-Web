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
    let alertElement = document.querySelector('#alert')

    if (type === 'price') {
        input.addEventListener('input', (event) => {
            event.preventDefault()

            if (input.value < 0) {
                input.value = ''

                alertElement.style.display = 'block'
                alertElement.innerHTML = 'não use números menores que zero!'

                setTimeout(() => {
                    alertElement.style.display = 'none';
                }, 3000);
            }

            sumProductList()
        })
    }

    else if (type === 'quantity') {
        input.addEventListener('input', (event) => {
            event.preventDefault()

            if (input.value < 1) {
                input.value = 1

                alertElement.style.display = 'block'
                alertElement.innerHTML = 'quantidade minima é 1'

                setTimeout(() => {
                    alertElement.style.display = 'none';
                }, 3000);
            }

            if (parseFloat(input.value) !== parseInt(input.value, 10)) {
                input.value = parseInt(input.value)

                alertElement.style.display = 'block'
                alertElement.innerHTML = 'apenas números inteiros são permitidos neste campo!'

                setTimeout(() => {
                    alertElement.style.display = 'none';
                }, 3000);
            }

            sumProductList()
        })
    }
}

function submitForm() {
    let products = document.querySelectorAll('.products')

    let names = ['name', 'price', 'quantity']
    let inputs = []

    products.forEach(product => {
        names.forEach(e => {
            inputs.push(product.querySelector(`input[name="${e}"]`).value)
        })

        return (inputs[0] != '' && !(inputs[1] < 0) && inputs[2] < 1) ? true : false
    })
}


document.querySelector('#remove-product').addEventListener('click', (event) => {
    event.preventDefault()


    let products = document.querySelectorAll('.products')
    if (products.length > 1) {
        products[products.length - 1].remove()
        sumProductList()
    }
})


validateForm('price', document.querySelector('input[name="price"]'))
validateForm('quantity', document.querySelector('input[name="quantity"]'))