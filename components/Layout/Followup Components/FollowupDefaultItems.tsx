import Image from 'next/image'
import React from 'react'


interface FollowupDefaultItemsProps {
    image?: any,
    name: string,
    content?: string,
    link?: string,
    statsContent?: string,
    date: number,
    month: string,
}




const FollowupDefaultItems:React.FC<FollowupDefaultItemsProps> = ({
    image, name, link, content, statsContent,date,month
}) => {
    return (
        <div className='grid grid-cols-4   items-center py-2 px-4 left-0 rounded-md'>
            <div className='bg-month-bg mr-4 p-2 rounded-md col-span-1'>
                <ul className='flex flex-col items-center justify-center'>
                    {/* For the Month name */}
                    <li className='text-month'>{month }</li>
                    {/* For the date number */}
                    <li className='text-date text-2xl mt-1'>{date}</li>
                </ul>
            </div>
            <div className=' col-span-3 relative top-0'>
            <a href={link} className=' '>
                <div className='Information left-0 pt-0'>
                    <h1 className='text-white relative '>
                        {name}
                    </h1>
                    {statsContent ?
                        <p className=' text-gray-500 text-xs pt-1'>{statsContent} </p> : <p className=' text-gray-500 text-xs pt-1'>
                            {content}
                        </p>
                    }

                </div>
            </a>
            </div>
        </div>
    )
}

export default FollowupDefaultItems











































