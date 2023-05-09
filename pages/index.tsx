import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        {/* <h1 className='text-xl font-semibold shadow-sm h-16'>
        Hello World
        </h1> */}

        {/* <div className="grid grid-cols-2 grid-rows-2">
          <div className="bg-red-500 col-span-1 row-span-1 h-10 w-10"></div>
          <div className="bg-blue-500 col-span-1 row-span-1 h-10 w-10"></div>
          <div className="bg-green-500 col-span-1 row-span-1 h-10 w-10 "></div>
          <div className="bg-yellow-500 col-span-1 row-span-1 h-10 w-10"></div> 
        </div> */}
      </div>
    </>
  )
}
