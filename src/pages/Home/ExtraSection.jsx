import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const ExtraSection = () => {
    return (
        <section className="mt-8">

            <h1 className="text-3xl font-bold text-center ">From the Blog</h1>
            <p className="text-2xl font-semibold text-center text-amber-300 mb-6">Reinvigorate Mind, Body & Soul</p>

            
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
                <SwiperSlide><img src="https://i.ibb.co/stsPyHj/5.jpg" alt="" />
                    <h3 className="text-4xl text-center text-amber-400 uppercase -mt-16">Inspiration</h3>
                   
                </SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/fpxspdf/1.jpg" alt="" /><h3 className="text-4xl text-amber-400 text-center uppercase -mt-16">Workshop</h3></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/2cwnykt/7-580x410.jpg" alt="" /><h3 className="text-4xl text-amber-400 text-center uppercase -mt-16">News</h3></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/4mT8Ftw/4-580x410.jpg" alt="" /><h3 className="text-4xl text-amber-400 text-center uppercase -mt-16">Inspiration</h3></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/qn8JwT4/2-580x410.jpg" alt="" /><h3 className="text-4xl text-amber-400 text-center uppercase -mt-16">news</h3></SwiperSlide>

            </Swiper>
        </section>
    );
};

export default ExtraSection;