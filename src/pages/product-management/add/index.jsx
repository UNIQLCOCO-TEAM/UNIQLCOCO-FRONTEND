import React from 'react'
import Navbar from '../../../../components/dashboard/navbar'
import AddForm from '../../../../components/product-management/addForm'
import { useRouter } from 'next/router'

const AddProducts = () => {
  const router = useRouter()

  return (
    <div className='flex-1 min-h-screen bg-greenbg'>
        <Navbar currentPath={router.pathname} />
        <div className='flex flex-col p-8 gap-8'>
          <h1 className='text-xxl font-bold text-green1'>ADD PRODUCT</h1>
          <AddForm />
        </div>
    </div>
  )
}

export default AddProducts
