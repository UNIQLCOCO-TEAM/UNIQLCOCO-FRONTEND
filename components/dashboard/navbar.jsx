import React from 'react'
import Image from 'next/image'
import { 
    FaChartSimple,
    FaBoxArchive, 
    } from "react-icons/fa6";
import Link from 'next/link';
import { useRouter } from 'next/router'

const Navbar = ({ currentPath }) => {
    const router = useRouter()
    const thisPath = router.pathname
    const dyanamicClass = thisPath === currentPath ? "flex items-center gap-2 text-greenapp hover:text-green-700": 
    "flex items-center gap-2 text-black hover:text-green-700"
    const staticClass = "flex items-center gap-2 text-black hover:text-green-700"

    // console.log(thisPath === currentPath, thisPath, currentPath)
  return (
    <nav className="bg-white font-sukhumvit">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center sm:gap-7 gap-5">
                    <div className="flex items-center sm:items-strech justify-center">
                        <div className="flex flex-shrink-0 items-center">
                            <Image
                                src="/LOGO2.png"
                                alt="Your Company"
                                width={48} 
                                height={48} 
                            />
                            <Image
                                className='ml-3'
                                src="/LOGO1.png"
                                alt="Your Company"
                                width={48} 
                                height={48} 
                            />
                        </div>
                    </div>
                        <div className='flex sm:gap-12 gap-5'>
                            <div>  
                                <Link href={'/dashboard'} className={'/dashboard' === thisPath
                                    ? dyanamicClass : staticClass
                                    }>
                                    <FaChartSimple className='text-xl'/>
                                    <h1 className='hidden sm:flex text-xl'>Dashboard</h1>
                                </Link>
                            </div>
                            <div>
                                <Link href={'/product-management'} className={thisPath.startsWith('/product-management')
                                    ? dyanamicClass : staticClass
                                    }>
                                    <FaBoxArchive className='text-xl'/>
                                    <h1 className='hidden sm:flex text-xl'>Product</h1>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar