import React, { useState } from 'react'
import { FaCirclePlus, FaTrash, FaFloppyDisk, FaXmark } from "react-icons/fa6";
import { withRouter, useRouter } from 'next/router';
import Image from 'next/image';

const EditForm = ({ router: { query } }) => {
    const route = useRouter()
    const thisData = JSON.parse(query.data);
    const [description, setDescription] = useState(thisData.description);

    /** Functions **/

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target)
        const description = formData.get('description');

        thisData.description = description
        console.log(thisData.description)
    }
  return (
    <div className='grid xl:flex xl:justify-center col-span-1 gap-12'>
        <div className='xl:col-start-2 flex flex-col sm:items-center gap-5'>
            <div className='flex justify-center w-auto sm:w-72 rounded-lg border-1'>
                <Image 
                    src={thisData.path}
                    alt="a picture of product"
                    width={720} 
                    height={720}
                    className='h-auto w-full' 
                />
            </div>
            <div className='flex gap-3 justify-between sm:w-72 xl:w-full'>
                <button
                    className='flex items-center gap-2 px-5 py-2 bg-greenapp rounded-lg
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
                className='bg-white p-8 rounded-lg grid md:grid-cols-4 
                    md:gap-y-8 gap-x-2 gap-y-5
                    xl:w-[50rem]' 
                onSubmit={handleSubmit}
            >
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="productName"
                        className="text-grey1 font-semibold"
                    >
                        Name
                    </label>
                </div>
                <input
                    className="md:col-span-3 p-2 border border-grey1 rounded-lg
                                focus:outline-none focus:border-green1 bg-lightgrey"
                    id="productName"
                    name='name'
                    type="text"
                    placeholder="Product Name"
                    value={thisData.name}
                    disabled="disabled"
                />
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="price"
                        className="text-grey1 font-semibold"
                    >
                        Price
                    </label>
                </div>
                <input
                    className="md:col-span-2 p-2 border border-grey1 rounded-lg
                                focus:outline-none focus:border-green1 bg-lightgrey"
                    id="price"
                    name='price'
                    type="text"
                    placeholder="฿฿฿"
                    value={thisData.price}
                    disabled="disabled"
                />
                <div className="md:col-span-1 md:flex hidden items-center">
                    <span className="text-grey1 font-semibold">THB</span>
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
                    className="py-2 px-2 md:col-span-3 border border-greenapp rounded-lg
                                focus:outline-none focus:border-green1 sm:resize-none"
                    rows={4}
                    id="description"
                    name='description'
                    type="text"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}
                />
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="type"
                        className="text-grey1 font-semibold"
                    >
                        Type
                    </label>
                </div>
                <div className='md:col-span-3'>
                    <select
                        className="px-5 py-2 border border-grey1 rounded-lg bg-lightgrey"
                        name="type" 
                        id="type"
                        value={thisData.type}
                    >
                        <option value="shirt">Shirt</option>
                        <option value="pants">Pants</option>
                    </select>
                </div>
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="color"
                        className="text-grey1 font-semibold"
                    >
                        Color
                    </label>
                </div>
                <input
                    className="md:col-span-3 border-2 border-grey1 rounded-lg
                                focus:outline-none focus:border-green1 bg-lightgrey"
                    id="color"
                    name='color'
                    type="color"
                    value={thisData.color}
                    disabled="disable"
                />
                <div className="md:col-span-1 flex items-center">
                    <label
                        htmlFor="inventory-s"
                        className="text-grey1 font-semibold"
                    >
                        Inventory
                    </label>
                </div>
                <div className="md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div className='mr-5'>
                        <span className="text-grey1">S</span>
                    </div>
                    <input
                        className="py-2 px-2 border border-grey1 rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 bg-lightgrey"
                        id="inventory-s"
                        name='s'
                        type="text"
                        value={thisData.inventory.s}
                        disabled="disabled"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-grey1">M</span>
                    </div>
                    <input
                        className="py-2 px-2 border border-grey1 rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 bg-lightgrey"
                        id="inventory-m"
                        name='m'
                        type="text"
                        value={thisData.inventory.m}
                        disabled="disabled"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-grey1">L</span>
                    </div>
                    <input
                        className="py-2 px-2 border border-grey1 rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 bg-lightgrey"
                        id="inventory-l"
                        name='l'
                        type="text"
                        value={thisData.inventory.l}
                        disabled="disabled"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-grey1">XL</span>
                    </div>
                    <input
                        className="py-2 px-2 border border-grey1 rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 bg-lightgrey"
                        id="inventory-xl"
                        name='xl'
                        type="text"
                        value={thisData.inventory.xl}
                        disabled="disabled"
                    />
                </div>
                <div className="md:col-start-2 md:col-span-3 grid md:grid-cols-3 items-center gap-4">
                    <div>
                        <span className="text-grey1">XXL</span>
                    </div>
                    <input
                        className="py-2 px-2 border border-grey1 rounded-lg
                                    focus:outline-none focus:border-green1
                                    md:col-span-2 bg-lightgrey"
                        id="inventory-xxl"
                        name='xxl'
                        type="text"
                        value={thisData.inventory.xxl}
                        disabled="disabled"
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
                        onClick={() => {route.push('/product-management')}} 
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

export default withRouter(EditForm)
