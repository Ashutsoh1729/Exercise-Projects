import React, { ReactElement } from 'react'

import Image from 'next/image';

interface NavbarLeftComponentProps {
  image: string |   any ,
  name: string
}

const NavbarLeftComponent:React.FC<NavbarLeftComponentProps> = ({image,name}) => {
  return (
    <div className='flex items-center'>

    <div className="flex items-center">
      {/* <img src="../../public/next.svg" alt="Brand Logo" className="w-8 h-8 mr-2" /> */}
      <Image src={image} width={32} height={32} className='mr-2' alt={'../../pages/images/pixeles.jpeg'} />
      <h1 className="text-xl font-bold text-orange">{ name }</h1>
    </div>
    </div>
  )
}

export default NavbarLeftComponent