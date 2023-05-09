import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faHeadphones, faSearch,faCalendar } from "@fortawesome/free-solid-svg-icons"


interface NavbarMiddleComponentProps {
    icon?: React.ReactElement<SVGImageElement>;
}

const NavbarMiddleComponent = () => {

    const [searchQuery, setSearchQuery] = useState("");

    return (
    <div className='flex items-center'>
      <div>
          <div className="flex items-center lg:visible">
              <button className="p-2 mr-2 text-white  hover:bg-orange hover: rounded-md ">
                  <FontAwesomeIcon className='h-5 mx-1'  icon={faHome} />
              </button>
              <button className="p-2 mr-2 text-white  hover:bg-orange hover: rounded-md  ">
                  <FontAwesomeIcon className='h-5 mx-1'  icon={faCalendar} />
              </button>
              <button className="p-2 mr-2 text-white  hover:bg-orange hover: rounded-md  ">
                  <FontAwesomeIcon className='h-5 mx-1' icon={faUsers} />
              </button>
              <button className="p-2 mr-2  text-white transition-transform   hover:bg-orange hover: rounded-md ">
                  <FontAwesomeIcon className='h-5 mx-1'  icon={faHeadphones} />
              </button>
              <div className="relative">
                  <input
                      type="text"
                      placeholder="Search"
                            className="w-64 h-9 py-1 pl-8 pr-2 text-sm bg-search-bar-color text-search-bar-text-color  rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                  </div>
              </div>
          </div>
            </div>
        </div>
  )
}

export default NavbarMiddleComponent