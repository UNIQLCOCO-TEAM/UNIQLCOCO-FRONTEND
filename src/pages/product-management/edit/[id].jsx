import React from 'react'
import Navbar from '../../../../components/dashboard/navbar'
import { useRouter } from 'next/router'
import EditForm from '../../../../components/product-management/editForm'

const EditProduct = () => {
    const router = useRouter()
    const {id} = router.query
  return (
    <div className='flex-1 min-h-screen bg-greenbg'>
        <Navbar currentPath={router.pathname}/>
        <div className='flex flex-col p-8 gap-8'>
          <h1 className='text-xxl font-bold text-green1'>EDIT PRODUCT</h1>
          <EditForm />
        </div>
    </div>
  )
}

export default EditProduct
