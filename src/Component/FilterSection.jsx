import React, { useContext } from 'react'
import { Context } from '../utils/ContextData';

function FilterSection() {
    const { CategoryData, BrandData } = useContext(Context);
    return (
        <div className='bg-zinc-300 h-screen py-4 px-4 outline-none'>
            <input type="text" placeholder='Search... ' className='px-3 py-1 border rounded' />
            <h1 className='mt-5 text-xl font-semibold'>Category</h1>
            <div className='flex flex-col gap-4 mt-5'>
                {
                    CategoryData?.map((item, index) => {
                        return (
                            <div className='flex items-center gap-4'>
                                <input type="checkbox" name="" id="" />
                                <button className='px-3 py-1 cursor-pointer rounded-md uppercase '>{item}</button>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-xl mt-5 font-semibold mb-3'>Brand</h1>
            <select name="" id="" className='bg-white w-full p-2 border-gray-600 rounded-md border-2'>
                {
                    BrandData?.map((item, index) => {
                        return <option key={item} value={item}>{item.toUpperCase()}</option>
                    })
                }
            </select>
            <h1 className='xl font-semibold mt-3'>Price Range</h1>
            <div className='flex flex-col gap-3'>
                <label htmlFor="">Price Range $0 - $5000</label>
                <input type="range" name="" id="" />
            </div>
            <button className='px-3 py-1 bg-red-500 rounded-md cursor-pointer mt-3 text-white hover:bg-red-400 active:scale-95'>Reset</button>
        </div>
    )
}

export default FilterSection
