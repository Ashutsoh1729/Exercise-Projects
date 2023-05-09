import React from 'react'


interface SidebarBoxesProps {
  children: React.ReactNode;

}


const SidebarBoxes: React.FC<SidebarBoxesProps> = ({children}) => {
  return (
      <div className=' bg-sidebar-box flex flex-col rounded-xl ml-8 mr-2 my-7 pt-2'>
          {children}
    </div>
  )
}

export default SidebarBoxes