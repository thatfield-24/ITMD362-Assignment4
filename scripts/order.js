
function init() {
  // Create the product list 
  const product_list = document.getElementById('product-list');
  const order_icon_button = document.getElementsByClassName('order-icon-button')[0];
  const order_icon_button_1 = document.getElementsByClassName('order-icon-button')[1];
  const order_icon_button_2 = document.getElementsByClassName('order-icon-button')[2];
  let cart = [];
  const products = [
    { id: 1, name: "Italian Beef", price: 10.0 },
    { id: 2, name: "Cheeseburger", price: 15.0 },
    { id: 3, name: "Hot Dog", price: 5.0 },
    { id: 4, name: "Fries", price: 3.0 },
    { id: 5, name: "Soda", price: 2.0 }
  ];

  const productsHTML = products.map((product) => `
    <div class="product-card">
      <h2 class="product-name">${product.name}</h2>
      <strong>$${product.price}</strong>
      <button class="product-btn" id="${product.id}">Add to Cart</button>
    </div>
  `);
  const menu_items = document.getElementById('menu-items');
  if (menu_items) menu_items.innerHTML = productsHTML.join('');
  
  // Create the shopping cart functionality
  function updateCart() {
    const cartHTML = cart.map((item) => `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <div class="cart-detail">
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="decrItem(${item.id})">-</button>
            <button onclick="incrItem(${item.id})">+</button>
            <button onclick="deleteItem(${item.id})" class="cart-product" id="${item.id}">Remove</button>
        </div>
        <hr>
      </div>`
    );
    const cartItems = document.getElementById('cart-items');
    if (cartItems) cartItems.innerHTML = cartHTML.join('');
  }

  // Create buttons for each relevant object
    // Local storage helpers
    function saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (e) {
            // ignore storage errors (e.g. private mode)
            console.warn('Could not save cart to localStorage', e);
        }
    }

    function loadCart() {
        try {
            const raw = localStorage.getItem('cart');
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                // Ensure each item has a quantity
                cart = parsed.map((it) => ({ ...it, quantity: it.quantity || 1 }));
            }
        } catch (e) {
            console.warn('Could not load cart from localStorage', e);
        }
    }

    // Load persisted cart and render
    loadCart();
    updateCart();
    getTotal(cart);
  const productButtons = document.querySelectorAll('.product-btn');
  productButtons.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      addToCart(products, parseInt(e.target.id, 10));
    });
  });

  function addToCart(products, id) {
    const product = products.find((product) => product.id === id);
    const cartProduct = cart.find((product) => product.id === id);

    if (cartProduct !== undefined && product.id == cartProduct.id) {
      incrItem(id);
    } else {
      cart.unshift({ ...product, quantity: 1 });
    }
    updateCart();
    getTotal(cart);
    saveCart();
    viewCart();
  }

  function getTotal(cart) {
    const { totalItem, cartTotal } = cart.reduce(
      (total, cartItem) => {
        total.cartTotal += cartItem.price * cartItem.quantity;
        total.totalItem += cartItem.quantity;
        return total;
      },
      { totalItem: 0, cartTotal: 0 }
    );
    // Update total items and amount in the cart dialog
    const totalItemsHTML = document.getElementById('noOfItems');
    if (totalItemsHTML) totalItemsHTML.innerHTML = `${totalItem} items`;

    const totalAmountHTML = document.getElementById('total');
    if (totalAmountHTML) totalAmountHTML.innerHTML = `Total: $${cartTotal}`;
  }

  function incrItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] && cart[i].id == id) {
        cart[i].quantity += 1;
      }
    }
    updateCart();
    saveCart()
    getTotal(cart);
  }

  function decrItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id && cart[i].quantity > 1) {
        cart[i].quantity -= 1;
      }
    }
    updateCart();
    saveCart()
    getTotal(cart);
  }

  function deleteItem(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        cart[i].quantity = 1;
        cart.splice(i, 1);
      }
    }
    updateCart();
    saveCart()
    getTotal(cart);
  }

  // Make functions globally accessible. Will not run properly without this. 
  window.incrItem = incrItem;
  window.decrItem = decrItem;
  window.deleteItem = deleteItem;

  // Open Shopping Cart Dialog Box
  function viewCart() {
    if (product_list && typeof product_list.showModal === 'function') {
      product_list.showModal();
    } else if (product_list && typeof product_list.show === 'function') {
      product_list.show();
    } else {
      const names = products.map((p) => p.name).join(', ');
      alert('Your Order:\n' + names);
    }
  }

  if (order_icon_button) order_icon_button.addEventListener('click', viewCart);
  if (order_icon_button_1) order_icon_button_1.addEventListener('click', viewCart);
  if (order_icon_button_2) order_icon_button_2.addEventListener('click', viewCart);
}

window.addEventListener('load', init);
