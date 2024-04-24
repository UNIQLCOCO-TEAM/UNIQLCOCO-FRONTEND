import React from 'react'
import { FaCirclePlus, FaTrash, FaFloppyDisk, FaXmark  } from "react-icons/fa6";
import { useRouter } from 'next/router';

const AddForm = () => {
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)
        const productName = formData.get('name');
        const price = formData.get('price');
        const description = formData.get('description');
        const type = formData.get('type');
        const color = formData.get('color');
        const inventoryS = formData.get('s');
        const inventoryM = formData.get('m');
        const inventoryL = formData.get('l');
        const inventoryXL = formData.get('xl');
        const inventoryXXL = formData.get('xxl');
        
        const productData = {
            id: 0, // Temp ID
            name: productName,
            inventory: {
                s: inventoryS,
                m: inventoryM,
                l: inventoryL,
                xl: inventoryXL,
                xxl: inventoryXXL, 
            },
            sold: {
                s: "0",
                m: "0",
                l: "0",
                xl: "0",
                xxl: "0", 
            },
            price: price,
            path: "", // Temp path
            type: type,
            description: description,
        }
        console.log('Form Data:', productData
        )
    }

  return (
    <div className='grid xl:flex xl:justify-center col-span-1 gap-12'>
        <div className='xl:col-start-2 flex flex-col sm:items-center gap-5'>
            <div className=' bg-slate-200 w-auto sm:w-72 h-72 rounded-lg'>
            </div>
            <div className='flex gap-3 justify-between sm:w-72 xl:w-full'>
                <button
                    className='flex items-center gap-2 px-5 py-2 bg-[#9CB97B] rounded-lg
                    hover:bg-green-900 font-semibold
                    text-white'
                    onClick={() => {}} 
                >
                    <FaCirclePlus className='text-white'/>
                    Add Picture
                </button>
                <button
                    className='flex items-center gap-2 px-5 py-2 bg-[#ff4234da] rounded-lg
                    hover:bg-red-900 font-semibold
                    text-white'
                    onClick={() => {}} 
                >
                    <FaTrash className='text-white'/>
                    Delete
                </button>
            </div>
        </div>
        <div className='xl:col-start-3 col-span-1'>
            <form 
                // ref={formRef}
                className='bg-white p-8 rounded-lg grid md:grid-cols-4 
                    md:gap-y-8 gap-x-2 gap-y-5
                    xl:w-[50rem]' 
                onSubmit={handleSubmit}
            >
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="productName"
                        className="text-[#202020] font-semibold"
                    >
                        Name
                    </label>
                </div>
                <input
                    className="md:col-span-3 p-1 py-2 border border-[#9CB97B] rounded-lg
                                focus:outline-none focus:border-[#8FA477]"
                    id="productName"
                    name='name'
                    type="text"
                    placeholder="Product Name"
                />
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="price"
                        className="text-[#202020] font-semibold"
                    >
                        Price
                    </label>
                </div>
                <input
                    className="md:col-span-2 p-1 py-2 border border-[#9CB97B] rounded-lg
                                focus:outline-none focus:border-[#8FA477]"
                    id="price"
                    name='price'
                    type="text"
                    placeholder="฿฿฿"
                />
                <div className="md:col-span-1 md:flex hidden items-center">
                    <span className="text-[#202020] font-semibold">THB</span>
                </div>
                <div className="md:col-span-1 flex items-start">
                    <label
                        htmlFor="description"
                        className="text-[#202020] font-semibold"
                    >
                        Description
                    </label>
                </div>
                <textarea
                    className="md:col-span-3 p-1 py-2 border border-[#9CB97B] rounded-lg
                                focus:outline-none focus:border-[#8FA477] sm:resize-none"
                    rows={4}
                    id="description"
                    name='description'
                    type="text"
                    placeholder="Description..."
                />
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="type"
                        className="text-[#202020] font-semibold"
                    >
                        Type
                    </label>
                </div>
                <div className='md:col-span-3'>
                    <select
                        className="px-5 py-2 border border-grey1 rounded-lg"
                        name="type" 
                        id="type"
                    >
                        <option value="shirt">Shirt</option>
                        <option value="pants">Pant</option>
                    </select>
                </div>
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="color"
                        className="text-[#202020] font-semibold"
                    >
                        Color
                    </label>
                </div>
                <input
                    className="md:col-span-3 border-2 border-grey1 rounded-lg
                                focus:outline-none focus:border-[#8FA477]"
                    id="color"
                    name='color'
                    type="color"
                />
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="inventory-s"
                        className="text-[#202020] font-semibold"
                    >
                        Inventory
                    </label>
                </div>
                <div className="md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div className='mr-5'>
                        <span className="text-[#202020]">S</span>
                    </div>
                    <input
                        className="border border-greenapp rounded-lg
                                    focus:outline-none focus:border-[#8FA477]
                                    md:col-span-2"
                        name='s'
                        id="inventory-s"
                        type="text"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-[#202020]">M</span>
                    </div>
                    <input
                        className="border border-greenapp rounded-lg
                                    focus:outline-none focus:border-[#8FA477]
                                    md:col-span-2"
                        name='m'
                        id="inventory-m"
                        type="text"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-[#202020]">L</span>
                    </div>
                    <input
                        className="border border-greenapp rounded-lg
                                    focus:outline-none focus:border-[#8FA477]
                                    md:col-span-2"
                        name='l'
                        id="inventory-l"
                        type="text"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-[#202020]">XL</span>
                    </div>
                    <input
                        className="border border-greenapp rounded-lg
                                    focus:outline-none focus:border-[#8FA477]
                                    md:col-span-2"
                        id="inventory-xl"
                        name='xl'
                        type="text"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-[#202020]">XXL</span>
                    </div>
                    <input
                        className="border border-greenapp rounded-lg
                                    focus:outline-none focus:border-[#8FA477]
                                    md:col-span-2"
                        name='xxl'
                        id="inventory-xxl"
                        type="text"
                    />
                </div>
                <div className='md:col-span-4 flex gap-3 justify-end'>
                    <button
                        className='flex items-center gap-2 px-5 py-2 bg-[#9CB97B] rounded-lg
                        hover:bg-green-900 font-semibold
                        text-white'
                        type='submit' 
                    >
                        <FaFloppyDisk className='text-white'/>
                        Save
                    </button>
                    <button
                        className='flex items-center gap-2 px-5 py-2 bg-lightgrey rounded-lg
                        hover:bg-red-900 font-semibold'
                        onClick={() => {router.push('/product-management')}} 
                    >
                        <FaXmark className='text-grey1'/>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddForm
