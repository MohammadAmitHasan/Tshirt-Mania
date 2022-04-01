import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-slate-800 text-white h-12 text-xl flex items-center justify-between px-8'>
            <h4 className='text-2xl font-serif font-bold text-yellow-400'>Tshirt-Mania</h4>
            <div>
                <Link className='px-2 py-1 hover:bg-red-400 mx-2 rounded' to={'/'}>Home</Link>
                <Link className='px-2 py-1 hover:bg-red-400 mx-2 rounded' to={'/orderoverview'}>Order Overview</Link>
            </div>
        </nav>
    );
};

export default Header;