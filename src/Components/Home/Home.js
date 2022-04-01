import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../TShirt/Tshirt';

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const exist = cart.find(tshirt => tshirt._id === item._id);
        if (!exist) {
            const cartItems = [...cart, item];
            setCart(cartItems);
        }
        else {
            alert('Already Selected');
        }
    }

    const removeFromCart = (item) => {
        const rest = cart.filter(tshirt => tshirt._id !== item._id);
        setCart(rest);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            <div className='order-2 md:order-1 md:col-span-2 lg:col-span-3 m-8'>
                <h1 className='text-3xl font-semibold text-center mb-4'>Best Selling TShirts</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        tshirts.map(tshirt => <Tshirt
                            key={tshirt._id}
                            tshirt={tshirt}
                            addToCart={addToCart}
                        ></Tshirt>)
                    }
                </div>
            </div>

            <div className='bg-red-200 order-1 md:order-2'>
                <Cart
                    removeFromCart={removeFromCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;