import React from 'react'
import SidebarBoxes from './SidebarBoxes'
import SidebarDefaultItems from './SidebarDefaultItems'

import newLogo from "../../../public/sidebar-images/new-svgrepo-com.svg";
import popular from "../../../public/sidebar-images/Popular.svg";
import following from "../../../public/sidebar-images/Following.svg";



const Sidebar = () => {
  return (
    <div className='bg-body-background'>
      {/* For the Top Box */}
      <SidebarBoxes>
        <SidebarDefaultItems image={newLogo} name='Newest and Recent' content={'Find the latest update'} link='https://www.google.com/' />
        <SidebarDefaultItems image={popular} name='Popular of the Day' content={'Shorts featured today by creators'} link='https://www.google.com/' />
        <SidebarDefaultItems image={following} name='Following' content={'Explore from your favorite person'} link='https://www.google.com/' />
      </SidebarBoxes>

      {/* For the Popular Tags  */}
      <SidebarBoxes>
        <h1 className='text-white font-sans text-xl pt-3 ml-4 pb-3'>
          Popular Tags {`->`}
        </h1>
        <SidebarDefaultItems image={following} name={`#javascript`} content={'Explore from your favorite person'} statsContent='2033, in trend in Bangladesh' link='https://www.google.com/' />
        <SidebarDefaultItems image={following} name={`#bitcoin`} content={'Explore from your favorite person'} statsContent='43,432, pointed by this tag' link='https://www.google.com/' />
        <SidebarDefaultItems image={following} name={`#design`} content={'Explore from your favorite person'} statsContent='51,314, in trend in Bangladesh' link='https://www.google.com/' />
      </SidebarBoxes>

      {/* For pinned groups */}

      <SidebarBoxes>
        <h1 className='text-white font-sans text-xl pt-3 ml-4 pb-3'>
          Popular Tags {`->`}
        </h1>
        <SidebarDefaultItems image={following} name={`#javascript`} content={'Explore from your favorite person'} statsContent='2033, in trend in Bangladesh' link='https://www.google.com/' />
        <SidebarDefaultItems image={following} name={`#bitcoin`} content={'Explore from your favorite person'} statsContent='43,432, pointed by this tag' link='https://www.google.com/' />
        <SidebarDefaultItems image={following} name={`#design`} content={'Explore from your favorite person'} statsContent='51,314, in trend in Bangladesh' link='https://www.google.com/' />
      </SidebarBoxes>

    </div>
  )
}

export default Sidebar