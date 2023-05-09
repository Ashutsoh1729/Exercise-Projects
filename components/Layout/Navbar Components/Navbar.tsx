import React from 'react'

import logo from '../../../public/favicon.ico'
import NavbarLeftComponent from './NavbarLeftComponent';
import NavbarMiddleComponent from './NavbarMiddleComponent';
import NavbarRightComponent from './NavbarRightComponent';


const Navbar = () => {


    return (
        <nav className="grid grid-cols-3 px-4 py-2 bg-comBg shadow z-50">
            <NavbarLeftComponent image={logo} name="KnowledgeChain" />
            <NavbarMiddleComponent />
            <NavbarRightComponent name='Kanha' />

        </nav>
    );
}

export default Navbar