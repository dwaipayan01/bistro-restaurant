import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import category1 from "../../../assets/home/slide1.jpg";
import category2 from "../../../assets/home/slide2.jpg";
import category3 from "../../../assets/home/slide3.jpg";
import category4 from "../../../assets/home/slide4.jpg";
import category5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <>
        <SectionTitle heading={"Order Online"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={category1} alt="" />
            <h3 className='uppercase text-white text-center -mt-16 font-bold'>Salads</h3>
            </SwiperSlide>
        <SwiperSlide>
        <img src={category2} alt="" />
            <h3 className='uppercase text-white text-center -mt-16 font-bold'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={category3} alt="" />
            <h3 className='uppercase text-white text-center -mt-16 font-bold'>Souaps</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={category4} alt="" />
            <h3 className='uppercase text-white text-center -mt-16 font-bold'>Desarts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={category5} alt="" />
            <h3 className='uppercase text-white text-center -mt-16 font-bold'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Category;