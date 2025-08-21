import React from 'react'

function ProductCard({item}) {
  return (
    <div className='w-[260px] hover:scale-105 p-4 bg-zinc-300  border relative border-gray-100 rounded-2xl shadow-2xl cursor-pointer transition-all'>
      <img className='h-[65%] rounded-md  mb-2' src={item.image} />
      <h1 className='text-xl font-bold line-clamp-2 mb-1'>{item.title}</h1>
      <h3 className='font-semibold my-1'>${item.price}</h3>
      <button className='px-3 py-1 text-white bg-red-500 active:scale-95 hover:bg-red-400 cursor-pointer rounded-md shadow'>Add to Cart</button>

      
    </div>
  )
}

export default ProductCard
