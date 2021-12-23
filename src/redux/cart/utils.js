export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check if the item already exists in the cart item array
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id,
    );
    
    // if the item exists increase the quantity of that item by 1 and return a new array so that a rerender will happen
    if (existingCartItem) {
        return cartItems.map(
            (cartItem) => cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }

    // executes the first time an item is added to the array and initializes the quantity with 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
    // check if the item already exists in the cart item array
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToDecrease.id,
    );
    
    // if the item exists increase and the quantity is more than 1 decrease it by 1
    if (existingCartItem && existingCartItem.quantity > 1) {
        return cartItems.map(
            (cartItem) => cartItem.id === cartItemToDecrease.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }

    // return the cart items if the quantity is 1
    return [...cartItems]
};