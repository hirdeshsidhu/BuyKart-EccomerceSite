import React, { useContext } from 'react'
import { Context } from '../utils/ContextData';
import FilterSection from '../Component/FilterSection';
import ProductCard from '../Component/ProductCard';

function Products() {
  const { products, setProducts } = useContext(Context);
  return (
    <div>
      <div className='relative'>
        {
          products?.length > 0 ? (
            <div className='flex gap-17 '>
              <div className='w-1/6 fixed top-[60px] left-0'> 
                <FilterSection />

              </div>
              <div className='ml-[300px] grid grid-cols-4 gap-7 overflow-y-auto mt-10'>
                {
                  products?.map((item, index) => {
                    return <ProductCard key={index} item={item} />
                  })
                }
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-center h-screen'>
              <div className='w-12 h-12 border-4 border-dashed border-blue-700 rounded-full animate-spin'></div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products
