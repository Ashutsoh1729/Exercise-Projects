
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage,faBell } from "@fortawesome/free-solid-svg-icons"


interface NavbarRightComponentProps {
    name: string;
    icon1?: any;
    icon2?: any;


}

const NavbarRightComponent: React.FC<NavbarRightComponentProps> = ({
    name,
    icon1,
    icon2
}) => {
    return (
        <div className='flex items-center justify-end mr-16'>

            <div className=' flex items-center w-32 '>
            <div className='w-5 mr-4  p-2 ml-2 flex flex-row items-center'>
                <div className=' h-auto p-2 mr-2'>
                    <FontAwesomeIcon className='h-5 mx-1 pr-1 text-white' icon={faMessage} />
                </div>
                <div className=' h-auto  w-auto mr-2'>
                        <FontAwesomeIcon className='h-5 mx-1 pr-1 text-white' icon={faBell} />
                </div>
                <div className='h-auto  '>
                        <div className='box text-white text-xl'>
                        {name}
                    </div>

                </div>
        </div>

            </div>
      </div>
  )
}

export default NavbarRightComponent