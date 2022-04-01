import React from 'react';

const Tshirt = ({ tshirt }) => {
    const { picture, name, price, _id } = tshirt;
    return (
        <div className='border-2 shadow-xl relative rounded-lg'>
            <div className='p-4 mb-10'>
                <div>
                    <img src={picture} alt="T-Shirt" />
                </div>
                <div className='mt-2'>
                    <h4 className='text-xl'>Name: {name}</h4>
                    <p>Price: <span className='text-orange-500 font-bold'>${price}</span></p>
                </div>
            </div>
            <button className='bottom-0 rounded-b-lg py-3 absolute w-full bg-red-300 hover:bg-amber-400'>Add To Cart</button>
        </div>
    );
};

export default Tshirt;