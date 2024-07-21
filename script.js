document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Produto 1', price: 10.00 },
        { id: 2, name: 'Produto 2', price: 20.00 },
        { id: 3, name: 'Produto 3', price: 30.00 }
    ];

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    let cart = [];

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>R$ ${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalSpan.textContent = total.toFixed(2);
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            renderCart();
        }
    }

    renderProducts();
});
