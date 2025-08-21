    import React, { useContext } from 'react'
    import { Context } from '../utils/ContextData'

    function Category() {
        const { products, setProducts,CategoryData } = useContext(Context);
        
        console.log(CategoryData);
        return (
            <div id='cat' className='bg-[#101829] p-5' >
                <div id='cat-track' className='flex items-center justify-around max-w-7xl  gap-4'>
                    {
                        CategoryData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <button className='capitalize px-4 py-2 text-sm font-medium text-white bg-[#1e293b] rounded-lg 
                    hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer'>{item.replace("-", " ")}</button>
                                </div>

                            )
                        })

                    }
                    {/* if wanna remove the second half remove this 👇👇 */}
                   
                </div>

            </div>

        )
    }

    export default Category
