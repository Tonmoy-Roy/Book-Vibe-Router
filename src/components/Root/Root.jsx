import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            {/* Navbar er child ache tai Outlet deya hoise.bakigular child nai*/}
        </div>

    );
};

export default Root;