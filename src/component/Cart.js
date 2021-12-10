import React from 'react';

function Cart({word}) {
    const [eng,pl] = word.split('-')
    return (
        <div className="cart">{eng} - {pl}</div>
    );
}

export default Cart;