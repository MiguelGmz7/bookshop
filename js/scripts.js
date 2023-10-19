/*
function autocompleteMatch(input) {
    if (input == '') {
        return [];
    }
    var reg = new RegExp(input)
    return search_terms.filter(function(term) {
        if (term.match(reg)) {
            return term;
        }
    });
}

 */

/*
function showResults(val) {
    res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (i=0; i<terms.length; i++) {
        list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
}
<<<<<<< HEAD

 */
//lista = document.getElementById("result")
//input = document.getElementById("q")
/*
lista.onclick = function (){

}
*/
function updateCartCount(count) {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = count;
}

function updateCartView() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    for (const productName in cart) {
        const productPrice = cart[productName];
        const listItem = document.createElement('li');
        listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
        listItem.className = 'list-group-item';
        cartItems.appendChild(listItem);
        total += productPrice;
    }

    cartTotal.textContent = total.toFixed(2);
}

document.querySelectorAll('.add-to-cart').forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));
        addToCart(productName, productPrice);
        updateCartView(); // Agregado para actualizar la vista del carrito en la misma página
    });
});


const search_input = document.querySelector("[data-search]")
const Ebooks = document.querySelectorAll(".book")
const booksContainer = document.querySelectorAll(".shop-books")

let books = []
search_input.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    books.forEach(book => {
        const isVisible = book.title.toLowerCase().includes(value)
        book.element.classList.toggle("hide",!isVisible)
    })
})

Ebooks.forEach((book) =>{
    const object = {
        title: book.querySelector("h5").innerHTML,
        gender: book.querySelector(".gender").innerHTML,
        element: book
    };
    books.push(object)
});

const bt_fantasia = document.querySelector("#bt_fantasia")

bt_fantasia.onclick = function () {
    books.forEach(book => {
        const isVisible = book.gender.includes("#Fantasía")
        book.element.classList.toggle("hide",!isVisible)
    })

}

const bt_lgbt = document.querySelector("#bt_lgbt")

bt_lgbt.onclick = function () {
    books.forEach(book => {
        const isVisible = book.gender.includes("#LGBT+")
        book.element.classList.toggle("hide",!isVisible)
    })

}

const bt_biografia = document.querySelector("#bt_biografia")

bt_biografia.onclick = function () {
    books.forEach(book => {
        const isVisible = book.gender.includes("Biografía")
        book.element.classList.toggle("hide",!isVisible)
    })

}

const bt_juvenil = document.querySelector("#bt_juvenil")

bt_juvenil.onclick = function () {
    books.forEach(book => {
        const isVisible = book.gender.includes("#Juvenil")
        book.element.classList.toggle("hide",!isVisible)
    })

}

const recomendation = document.querySelector(".recomendation")
books.forEach((book => {
    const isVisible = book.gender.includes("#Fantasía")
    book.element.classList.toggle(("hide",!isVisible))
    recomendation.append(book)
}))