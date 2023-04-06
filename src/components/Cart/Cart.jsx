import React from 'react';


const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products.</p>
    }
    else{
        message = <div>
            <h3>Boroloxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? <span>Boroloxx</span> : <span>Fokira</span>}
            {message}
            {
                cart.length === 1 && <p>Great</p>
            }
            {
                
                cart.length !== 4 || <p>Losser</p>
            }
            {
                cart.map(tShirt => <p
                    key ={tShirt._id}
                >{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an elements or components.
 * 2.ternary: condition ? 'for true' : 'false';
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * 
 * 
 * CONDITIONAL CSS Class
 * 
 * 1.use ternary
 * 2. ternary inside template string.
 * ***/