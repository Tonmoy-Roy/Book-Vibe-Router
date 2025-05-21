import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet> 
            {/* Navbar er child ache tai Outlet deya hoise.bakigular child nai*/}
        </div>
    );
};

export default Root;