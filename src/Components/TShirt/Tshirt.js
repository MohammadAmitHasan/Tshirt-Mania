import React from 'react';

const Tshirt = ({ tshirt, addToCart }) => {
    const { picture, name, price, _id } = tshirt;
    return (
        <div className='border-2 shadow-xl relative rounded-lg'>
            <div className='p-4 mb-12'>
                <div>
                    <img className='h-72 mx-auto' src={picture} alt="T-Shirt" />
                </div>
                <div className='mt-3'>
                    <h4 className='text-xl'>Name: {name}</h4>
                    <p>Price: <span className='text-orange-500 font-bold'>${price}</span></p>
                </div>
            </div>
            <button onClick={() => addToCart(tshirt)} className='bottom-0 rounded-b-lg py-3 absolute w-full bg-red-300 hover:bg-amber-400'>Add To Cart</button>
        </div>
    );
};

export default Tshirt;