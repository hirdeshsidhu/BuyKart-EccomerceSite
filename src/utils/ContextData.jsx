import axios from 'axios';
import { React, createContext, useEffect, useState } from 'react'



export const Context = createContext();
function ContextData({ children }) {
  const [products, setProducts] = useState([]);
  const [CategoryData, setCategoryData] = useState([]);
  const [BrandData, setBrandData] = useState([])
  const data = {
    products,
    setProducts,
    CategoryData,
    BrandData
  }
  const getProducts = async () => {
    try {
      const res = await axios("https://fakestoreapi.in/api/products?limit=150");
      const ProductData = res.data.products
      setProducts(ProductData);

      const getUniqueCategory = (items, property) => {
        let newV = items?.map((item) => {
          return item[property];
        })
        newV = (["All",...new Set(newV)])
        return newV;
      }
      setCategoryData(getUniqueCategory(ProductData, "category"));
      setBrandData(getUniqueCategory(ProductData, "brand"));

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  // const getUniqueCategory = (products, property) => {
  //   let newVal = products?.map((item) => {
  //     return item[property];
  //   })
  //   newVal = [...new Set(newVal)];
  //   return newVal;
  // }
  // const CategoryData = getUniqueCategory(products, "category");

  return (
    <div>
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default ContextData
