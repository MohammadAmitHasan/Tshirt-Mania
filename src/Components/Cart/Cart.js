import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    // 1. Element Variable
    // 2. Ternary operator
    let command;
    if (cart.length === 0) {
        command = <p className='mt-2'>No Item Selected</p>
    }
    else {
        command = <p className='mt-2'>Happy Buying.!</p>
    }
    return (
        <div className='text-center'>
            {command}
            <h2 className='text-2xl font-semibold mt-8'>Selected Items: {cart.length}</h2>
            {
                cart.map(tshirt =>
                    <p className='my-3 mx-2 flex justify-between p-2 border-2 border-orange-700 rounded-lg'>
                        <div className='flex items-center'>
                            <img className='h-10 mr-2' src={tshirt.picture} alt="" />
                            {tshirt.name}
                        </div>
                        <button onClick={() => removeFromCart(tshirt)} className='hover:bg-slate-300 bg-slate-100 px-4 border-2 rounded-lg ml-3'>X</button>
                    </p>)
            }

            {/* 2. Ternary operator */}
            {
                cart.length > 0 ? <button className='px-3 py-2 my-2 font-semibold hover:bg-blue-500 bg-blue-300 rounded-lg'>Clear Cart</button> : ''
            }

            {/* 3. Using and operator. If the condition matches it will go to the portion after the && */}
            {cart.length > 3 && cart.length < 5 && <div>You will get special discount</div>}

            {/* 4. Using OR operator. When the condition will false it will go to the portion after || */}
            {cart.length < 5 || <div>50% Discount for you</div>}

        </div>
    );
};

export default Cart;