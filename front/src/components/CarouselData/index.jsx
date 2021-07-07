import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './index.css';

// 이컴포넌트에서 각각의 데이터의 carousel 을 만들어서 return 해주면될듯
const CarouselData = ({data}) => {
    console.log(data);


    const settings = {
        dots:false,
        infinite:false,
        slideToShow:1,
        autoplay:true,
    }

    return(
        <div className="carousel_section">
            <span>
                {data.mainTitle}
            </span>
            <Slider {...settings}>
                {data.data.map((data)=>{
                    return(
                        <div className="carousel">
                            <img src={data.src}  />
                            <span>{data.title}</span>
                            <span>{data.year}</span>
                            <span>{data.country}</span>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default CarouselData;