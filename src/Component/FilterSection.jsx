import React, { useContext } from 'react'
import { Context } from '../utils/ContextData';

function FilterSection({ setSearch, search, priceRange, setPriceRange, brand, setBrand, category, setCategory, handleBrandChange, handleCategoryChange }) {
    const { CategoryData, BrandData } = useContext(Context);
    return (
        <div className='bg-zinc-300 h-fit py-4 px-4 outline-none'>
            <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search... ' className='px-3 py-1 border rounded' />
            <h1 className='mt-5 text-xl font-semibold'>Category</h1>
            <div className='flex flex-col gap-4 mt-5'>
                {
                    CategoryData?.map((item, index) => {
                        return (
                            <div className='flex items-center gap-4'>
                                <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCategoryChange} />
                                <button className='px-3 py-1 cursor-pointer rounded-md uppercase '>{item}</button>
                            </div>
                        )
                    })
                }
            </div>
            <h1 className='text-xl mt-5 font-semibold mb-3'>Brand</h1>
            <select name="" id="" className='bg-white w-full p-2 border-gray-600 rounded-md border-2' value={brand} onChange={handleBrandChange}>
                {
                    BrandData?.map((item, index) => {
                        return <option key={item} value={item}>{item.toUpperCase()}</option>
                    })
                }
            </select>
            <h1 className='xl font-semibold mt-3'>Price Range</h1>
            <div className='flex flex-col gap-3'>
                <label htmlFor="">Price Range ${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" min={0} max={5000} name="" id="" value={priceRange[1]} className='w-full'
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
            </div>
            <button className='px-3 py-1 bg-red-500 rounded-md cursor-pointer mt-3 text-white hover:bg-red-400 active:scale-95'
                onClick={() => {
                    setBrand("All")
                    setCategory("All")
                    setPriceRange([0, 5000])
                    setSearch("")
                }}
            >Reset</button>
        </div>
    )
}

export default FilterSection
