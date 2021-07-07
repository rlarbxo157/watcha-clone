import React from 'react'
import CarouselData from './CarouselData';
import './section.css';

export const dummyData = [
    {
        mainTitle:"박스오피스 순위",
        data:[
            {
              title:"블랙 위도우",
              years:"2021",
              country:"미국",
              src:"https://an2-img.amz.wtchn.net/image/v2/633235f3eddc1e16567928114bd1b575.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1TOTZkMnQ2Y0hWNGVYQnVjM0p5TldRMVpXSmpkaUlzSW5GMVlXeHBkSGtpT2pnd0xDSjNhV1IwYUNJNk5Ea3dmUS52WEJQSUsxZE1lVlVMRWhMTk4zRzJiYUQxd3JPWmhYVFVpcFRTVDBkZlJn"
            },
            {
              title:"크루엘라",
              years:"2021",
              country:"미국",
              src:"https://an2-img.amz.wtchn.net/image/v2/6248167d52254e38f2b1c8754e67c321.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpJeE1qSTVNekV4T1RRM01UWXdPVEl4SWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1LU0FaeWo1bGh2aVMtdVE1RmVjT2ppeUJCUUtJelJDSkpJelZzbmVra2M"
            }
        ]
    },
    {
        mainTitle:"왓챠 영화 순위",
        data:[
            {
              title:"블랙 위도우",
              years:"2021",
              country:"미국",
              src:"https://an2-img.amz.wtchn.net/image/v2/633235f3eddc1e16567928114bd1b575.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1TOTZkMnQ2Y0hWNGVYQnVjM0p5TldRMVpXSmpkaUlzSW5GMVlXeHBkSGtpT2pnd0xDSjNhV1IwYUNJNk5Ea3dmUS52WEJQSUsxZE1lVlVMRWhMTk4zRzJiYUQxd3JPWmhYVFVpcFRTVDBkZlJn"
            },
            {
              title:"크루엘라",
              years:"2021",
              country:"미국",
              src:"https://an2-img.amz.wtchn.net/image/v2/6248167d52254e38f2b1c8754e67c321.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPamN3TUN3aWNHRjBhQ0k2SWk5Mk1pOXpkRzl5WlM5cGJXRm5aUzh4TmpJeE1qSTVNekV4T1RRM01UWXdPVEl4SWl3aWNYVmhiR2wwZVNJNk9EQXNJbmRwWkhSb0lqbzBPVEI5Lk1LU0FaeWo1bGh2aVMtdVE1RmVjT2ppeUJCUUtJelJDSkpJelZzbmVra2M"
            }
        ]
    }
]


const Section = () => {
    return(
        <div className="section">
            <span className="section_title">
                {dummyData.map((data)=>(
                    <div className="section">
                        <CarouselData data={data} />
                    </div>
                ))}
            </span>
            {/* 여기서 carousel구현 따로 컴포넌트로빼야되나? */}
        </div>
    )
}
export default Section;