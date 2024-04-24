import React, { useState, useEffect } from 'react'
import Navbar from '../../../components/dashboard/navbar'
import Barchart from '../../../components/dashboard/barchart'
import PopTable from '../../../components/dashboard/popTable'
import { 
  FaUser ,
  FaReceipt 
} from "react-icons/fa6";
import { useRouter } from 'next/router'
import ProgressBar from '../../../components/dashboard/progressBar';


const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState("")
  const [totalOrders, setTotalOrders] = useState("")
  const router = useRouter()

  useEffect(() => {
    setTotalUsers("23,000")
    setTotalOrders("20,000")
  }, [])
  
  return (
    <div className='flex-1 min-h-screen bg-greenbg'>
      <Navbar currentPath={router.pathname}/>
      <div className='flex flex-col p-8 gap-8'>
        <div>
          <h1 className='text-xxl font-bold text-green1'>DASHBOARD</h1>
        </div>
        <div className='grid xl:grid-rows-3 xl:grid-flow-col gap-5'> 
          <div className='xl:row-span-2 xl:col-span-2 bg-white px-8 pt-8 pb-5 rounded-lg'>
            <h2 className='text-greenapp text-2xl font-semibold '>Total Revenue</h2>
            <div className='xl:h-full xl:flex xl:items-center'>
              <Barchart />
            </div>
          </div>
          <div className='xl:col-span-2 bg-white p-5 rounded-lg'>
            <div>
              <h2 className='text-xl font-medium mb-6'>Top Seller</h2>
            </div>
            <PopTable />
          </div>
          <div className='xl:col-span-2 flex flex-col gap-5 bg-[#90DEFF] p-5 rounded-lg'>
            <div>
              <h2 className='text-white text-2xl font-semibold'>Total Users</h2>
            </div>
            <div className='flex justify-center h-full w-full'>
              <div className='flex gap-2 items-center'>
                <div className='bg-[#5CCEFE] rounded-full w-fit p-3'>
                  <FaUser  className='text-white text-7xl'/>
                </div>
                <h2 className='text-white text-4xl font-light'>{totalUsers} users</h2>
              </div>
            </div>
          </div>
          <div className='xl:col-span-2 flex flex-col gap-5 bg-[#FF9E45] p-5 rounded-lg'>
            <h2 className='text-white text-2xl font-semibold'>Total Orders</h2>
            <div className='flex justify-center h-full w-full'>
              <div className='flex gap-2 items-center'>
                <div className='bg-[#FF8718] rounded-full w-fit p-3'>
                  <FaReceipt className='text-white text-7xl'/>
                </div>
                <h2 className='text-white text-4xl font-light'>{totalOrders} orders</h2>
              </div>
            </div>
          </div>
          <div className='xl:col-span-2 bg-white p-5 rounded-lg'>
            <h2 className='text-2xl font-semibold'>Status Overview</h2>
            <div className='col-span-1'>
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard