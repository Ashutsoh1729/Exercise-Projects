import React from 'react'

interface FollowupProps {
    children: React.ReactNode;
}
const FollowupBox: React.FC<FollowupProps> = ({
    children
}) => {
  return (

        <div className=' bg-sidebar-box flex flex-col rounded-xl mr-8 ml-2 my-7 pt-2'>
            {children}
        </div>
  )
}

export default FollowupBox






