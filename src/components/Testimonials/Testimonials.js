import React from 'react';

const Testimonials = () => {
    return (
        <div className='lg:mx-12 mx-6 mt-4'>
            <div className='flex items-center'>
                <h5 className='inline text-[#6672C0] font-semibold'>OUR TESTIMONIALS</h5>
                <div className='border border-[#6672C0] w-48 h-0 ml-5'></div>
            </div>

            <div class="carousel w-full mt-4">
                <div id="slide1" class="carousel-item relative w-full">
                    <div className='mx-auto'>
                        <div class="avatar flex items-center justify-center mx-auto mt-2">
                            <div class="w-20 h-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                            <div class="w-16 h-16 mx-4 rounded-full">
                                <img src="https://placeimg.com/192/192/people" className='opacity-50' />
                            </div>
                            <div class="w-16 h-16 rounded-full">
                                <img src="https://placeimg.com/192/192/people" className='opacity-50' />
                            </div>
                        </div>
                        <div className='mt-10 '>
                            <p className='lg:w-2/4 mx-auto text-center text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis accusamus autem qui corrupti neque quis pariatur. Illum, est libero?</p>
                            <h5 className='text-center mt-4 font-bold text-purple-500'>Md. Danish Ansari</h5>
                            <h5 className='text-center font-semibold text-purple-500'>Learner, Govt. Employee @UPPCL</h5>
                        </div>
                    </div>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="text-black">❮</a>
                        <a href="#slide2" class="text-black">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <div className='mx-auto'>
                        <div class="avatar flex items-center justify-center mx-auto mt-2">
                            <div class="w-16 h-16 rounded-full">
                                <img src="https://placeimg.com/192/192/people" className='opacity-50' />
                            </div>
                            <div class="w-20 h-20 mx-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                            <div class="w-16 h-16 rounded-full">
                                <img src="https://placeimg.com/192/192/people" className='opacity-50' />
                            </div>
                        </div>
                        <div className='mt-10 '>
                            <p className='lg:w-2/4 mx-auto text-center text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis accusamus autem qui corrupti neque quis pariatur. Illum, est libero?</p>
                            <h5 className='text-center mt-4 font-bold text-purple-500'>Md. Danish Ansari</h5>
                            <h5 className='text-center font-semibold text-purple-500'>Learner, Govt. Employee @UPPCL</h5>
                        </div>
                    </div>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="text-black">❮</a>
                        <a href="#slide3" class="text-black">❯</a>
                    </div>
                </div>

                <div id="slide3" class="carousel-item relative w-full">
                    <div className='mx-auto'>
                        <div class="avatar flex items-center justify-center mx-auto mt-2">
                            <div class="w-16 h-16 rounded-full">
                                <img src="https://placeimg.com/192/192/people" className='opacity-50' />
                            </div>
                            <div class="w-16 h-16 mx-4 rounded-full">
                                <img src="https://placeimg.com/192/192/people" className='opacity-50' />
                            </div>
                            <div class="w-20 h-20  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className='mt-10 '>
                            <p className='lg:w-2/4 mx-auto text-center text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis accusamus autem qui corrupti neque quis pariatur. Illum, est libero?</p>
                            <h5 className='text-center mt-4 font-bold text-purple-500'>Md. Danish Ansari</h5>
                            <h5 className='text-center font-semibold text-purple-500'>Learner, Govt. Employee @UPPCL</h5>
                        </div>
                    </div>

                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="text-black">❮</a>
                        <a href="#slide1" class="text-black">❯</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;