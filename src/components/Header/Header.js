import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = () => {
    /* Rectangle 1 */
    return (
        <div className='lg:h-[92vh]' style={{ backgroundImage: `url("https://i.ibb.co/z2hv6ng/Screenshot-279.png")` }} >
            <Banner></Banner>
        </div >
    );
}
export default Header;