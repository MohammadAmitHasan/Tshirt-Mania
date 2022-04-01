import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2 className='text-2xl text-center font-semibold mt-8'>Selected Items: {cart.length}</h2>
            {
                cart.map(tshirt =>
                    <p className='my-3 ml-2'>
                        {tshirt.name}
                        <button onClick={() => removeFromCart(tshirt)} className='bg-slate-300 px-4 border-2 rounded-lg ml-3'>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;