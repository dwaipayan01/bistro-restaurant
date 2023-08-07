import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {

    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="mt-16">
            
            <SectionTitle subHeading={"What our clients say"} heading={"Testimonials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
          reviews.map(review=><SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-16 my-5">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
     <p className="text-4xl mt-5"><FaQuoteLeft></FaQuoteLeft></p>
              <p className="my-5">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;