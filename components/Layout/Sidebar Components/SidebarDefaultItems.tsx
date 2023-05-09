import Image from 'next/image'
import React from 'react'


interface SidebarDefaultItemsProps{
    image?: any,
    name: string,
    content?: string,
    link?: string,
    statsContent?: string,


}



const SidebarDefaultItems: React.FC<SidebarDefaultItemsProps> = ({
    image, name, link, content,statsContent
}) => {
  return (
      <div className='flex flex-row rounded-md  items-center py-2 px-4 left-0'>
          <div className='Icon mr-6 '>
              <Image src={image} alt='' width={30} height={30}/>
          </div>
          <a href={link}>
          <div className='Information left-0'>
              <h1 className='text-white'>
                  {name}
                  </h1>
                  {statsContent ? 
                      <p className=' text-gray-500 text-xs pt-1'>{statsContent} </p> : <p className=' text-gray-500 text-xs'>
                          {content}
                      </p> 
            }
              
          </div>
          </a>
    </div>
  )
}

export default SidebarDefaultItems