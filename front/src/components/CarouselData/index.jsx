import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './index.css';

// 이컴포넌트에서 각각의 데이터의 carousel 을 만들어서 return 해주면될듯
const CarouselData = ({data}) => {
    // console.log(data.data);


    const settings = {
        dots:false,
        infinite:true,
        slidesToShow:5,
        slidesToScroll:5,
        autoplay:false,
        responsive:[
            {
                breakpoint:1050,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:4,
                    infinite:false,
                    dots:false
                }
            }
        ]
    }

    return(
            <div className="carousel_section" >
                <div>
                    <span className="mainTitle-text">
                        {data.mainTitle}
                    </span>
                </div>
  
                <Slider {...settings}>
                    {data.data.map((data)=>(
                            <div className="carousel-card">
                                <img src={data.src} style={{width:'189px',height:'275px',margin:0,padding:0}}  />
                                <span>{data.title}</span>
                                <span>{data.year}</span>
                                <span>{data.country}</span>
                            </div>
                    ))}
                </Slider>
            </div>
    )
}

export default CarouselData;