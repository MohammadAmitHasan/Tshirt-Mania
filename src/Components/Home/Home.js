import React from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../TShirt/Tshirt';

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            <div className='order-2 md:order-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 m-8'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                    ></Tshirt>)
                }
            </div>

            <div className='bg-red-200 order-1 md:order-2'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;