import React, { useContext, useState } from 'react'
import { Context } from '../utils/ContextData';
import FilterSection from '../Component/FilterSection';
import ProductCard from '../Component/ProductCard';

function Products() {
  const { products, setProducts } = useContext(Context);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 5000])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }

  const filteredProducts = products?.filter((item) => {
    const inSearch = (item.title).toLowerCase().includes(search.toLowerCase());
    const inPriceRange = item.price >= priceRange[0] && item.price <= priceRange[1];
    let inCategory;
    if(category==="All"){
      inCategory = true;
    }else if(item.category===category){
      inCategory = true;
    }else{
      inCategory = false;
    }
    let inBrand;
    if(brand === "All"){
      inBrand = true;
    }else if(item.brand===brand){
      inBrand = true;
    }else{
      inBrand = false;
    }
    return inSearch && inPriceRange && inCategory && inBrand
  })

  return (
    <div>
      <div className='relative'>
        {
          products?.length > 0 ? (
            <div className='flex gap-17 '>
              <div className='w-1/6 fixed top-[60px] left-0'>
                <FilterSection search={search} setSearch={setSearch} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />

              </div>
              <div className='ml-[300px] grid grid-cols-4 gap-7  mt-10'>
                {
                  filteredProducts?.map((item, index) => {
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
