import React from 'react'
import FollowupBox from './FollowupBox'
import FollowupDefaultItems from './FollowupDefaultItems'
import newLogo from "../../../public/sidebar-images/new-svgrepo-com.svg";


// Not needed actually

// interface FollowupProps {
//     components: React.ReactNode;  
// }

const Followup = () => {
    return (
        <div className='bg-body-background'>
            <FollowupBox>
                <h1 className='text-white font-sans text-xl pt-3 ml-4 pb-3'>
                    Meetups {`->`}
                </h1>
                <FollowupDefaultItems image={newLogo} name='Newest and Recent' content={'Find the latest update'} link='https://www.google.com/' month='FEB' date={3} />
                <FollowupDefaultItems image={newLogo} name='Newest and Recent' content={'Find the latest update'} link='https://www.google.com/' month='FEB' date={5} />
            </FollowupBox>
        </div>
    )
}

export default Followup