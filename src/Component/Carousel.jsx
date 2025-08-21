import React, { useContext, useEffect } from 'react'
import { Context } from '../utils/ContextData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { MdNavigateNext } from 'react-icons/md';
import { GrPrevious } from 'react-icons/gr';
import Category from './Category';

function Carousel() {
    const { products, setProducts } = useContext(Context);
    function SampleNextArrow(props){
        const {onClick} = props;
        return(
            <div
                onClick = {onClick}
                className="absolute top-1/2 right-4 z-10 cursor-pointer transform -translate-y-1/2 text-black rounded-full bg-gray-200 hover:text-white/40 p-2">
                <MdNavigateNext className='text-2xl' />
            </div>
        )
    }
    function SamplePrevArrow(props){
        const {onClick} = props;
        return(
            <div onClick={onClick} className='absolute top-1/2 left-4 cursor-pointer rounded-full text-black hover:text-white bg-gray-200 transform -translate-y-1/2 z-10 p-2'>
                <GrPrevious className='text-2xl' />
            </div>
        )

    }

    // console.log(products);
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        nextArrow:<SampleNextArrow />,
        prevArrow:<SamplePrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings} >
                {
                    products?.slice(0, 7)?.map((item, index) => {
                        return (
                            <div key={index} className='h-[400px] md:h-[650px] bg-gradient-to-r from-[#001833] via-[#164882] to-[#2590ff] '>
                                <div className='flex gap-10 justify-center h-[600px] items-center px-4'>
                                    <div>
                                        <h3 className='text-red-500'>Powering your world with the best items</h3>
                                        <h1 className='text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white '>{item.title}</h1>
                                        <p className='text-gray-400 line-clamp-3 md:w-[500px]'>{item.description}</p>
                                        <button className='bg-gradient-to-r from-red-500 to-purple-800 cursor-pointer rounded-md mt-2 px-3 py-1 active:scale-95 hover: hover:from-red-400 hover:to-purple-700'>Shop Now</button>
                                    </div>
                                    <div>
                                        <img src={item.image} alt={item.title} className='h-[550px] rounded-full hover:scale-110' />
                                    </div>
                                </div>
                            </div>)
                    })
                }
                <div>
                    <h3>1</h3>
                </div>
            </Slider>
            <Category />
        </div>
    )
}

export default Carousel
