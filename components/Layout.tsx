import React, { ReactNode } from 'react'
import Navbar from './Layout/Navbar Components/Navbar';
import Sidebar from './Layout/Sidebar Components/Sidebar';
import Followup from './Layout/Followup Components/Followup';

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (<div className='h-screen bg-body-background'>
    <Navbar />
    <div className='container h-full  xl:px-30  bg-body-background'>
      <div className='grid grid-cols-4 h-full '>
        <Sidebar />
        <div className='col-span-3 lg:col-span-2 bg-body-background'>
          {children}
        </div>
        <Followup />
      </div>
    </div>
  </div>
  )
}

export default Layout