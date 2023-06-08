import "react-responsive-carousel/lib/styles/carousel.min.css";




const Banner = () => {
    return (

        <div className="carousel w-full h-[500px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/7G7kWnL/yoga-4489430-640-1.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    
                    <a href="#slide3" className="btn btn-circle  bg-amber-400">❮</a>
                    <div>
                        <h1 className="font-semibold text-3xl text-white mb-4">Our best <br /> Gym Fitness <span className="text-amber-400 ">with Your Body</span> </h1>
                        <div className="space-x-8">
                            <button className="btn bg-amber-400 text-white">Get started</button>
                            <button className="btn  btn-outline text-black">Contact us</button>
                        </div>
                    </div>
                    <a href="#slide2" className="btn btn-circle  bg-amber-400">❯</a>
                   
                </div>
               
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/xGPbqZL/yoga-2662234-640.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle  bg-amber-400">❮</a>
                    <div>
                        <h1 className="font-semibold text-3xl text-white mb-4">Stronger & Stronger <br /> Gym Fitness <span className="text-amber-400 ">Everyday</span> </h1>
                        <div className="space-x-8">
                            <button className="btn bg-amber-400 text-white">Get started</button>
                            <button className="btn  btn-outline text-white">Contact us</button>
                        </div>
                    </div>
                    <a href="#slide3" className="btn btn-circle  bg-amber-400">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/tKhzJdx/ease-3134828-640.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle  bg-amber-400">❮</a>
                    <div>
                        <h1 className="font-semibold text-3xl text-white mb-4">Is Enough <br /> To Keep <span className="text-amber-400 ">Your Fitness Level</span> </h1>
                        <div className="space-x-8">
                            <button className="btn bg-amber-400 text-white">Get started</button>
                            <button className="btn  btn-outline text-white">Contact us</button>
                        </div>
                    </div>
                    <a href="#slide1" className="btn btn-circle  bg-amber-400">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;