import React from 'react';
import bannerimg from '../../assets/Banner.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerimg} className="rounded-lg bg-white md:max-w-5xl" />
            </div>
        </div>
    );
};

export default Banner;