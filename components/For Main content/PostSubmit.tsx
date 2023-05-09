import Image from 'next/image'
import React, { useState } from 'react'




const PostSubmit = () => {

    const [search, setSearch] = useState("")
    

  return (
      <div>
          {/* <Image src={ } /> */}
          <input onChange={(e) => (setSearch(e.target.value))} value={search}></input>
          <button className=' rounded-xl bg-orange text-white font-sans text-xl' type='submit'>Create Post</button>
    </div>
  )
}

export default PostSubmit