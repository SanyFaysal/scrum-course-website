import React from 'react';
import Timer from './Timer';
const Banner = () => {
    const props = {
        initialHours: 23,
        initialMinute: 56,
        initialSeconds: 59,
    }
    return (
        <div>
            <div class="flex flex-col justify-around lg:flex-row-reverse items-center overflow-hidden px-6 lg:px-0">
                <div className='flex lg:mb-0 mb-16'>
                    <div class="avatar flex-col lg:mt-[120px] mt-[50px]  items-end shadow-black">
                        <div class="w-[60px] h-[60px] mb-6 rounded-full lg:mr-[-50px] mr-[-80px] shadow-2xl">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4vrHPDJ3RBj6sMzutPgpq2Vz75a36W7FS7VbTgdxbXwnSLFio56wctGWugQ-xWUI9g0&usqp=CAU" alt='' />
                        </div>
                        <div class="lg:w-[100px] lg:h-[100px] w-[75px] h-[75px] lg:mb-10 mb-8 rounded-full lg:mr-[-10px] mr-[-10px]">
                            <img src="https://cdn.ucberkeleybootcamp.com/wp-content/uploads/sites/106/2021/03/CDG_blog_post_image_02-850x412.jpg" alt='' />
                        </div>
                        <div class="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] rounded-full lg:mr-0 mr-[-20px]">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Computer_keyboard.png" alt='' />
                        </div>
                    </div>
                    <div className=' lg:mr-[-170px] mr-[-50px] lg:mt-[30px] mt-[100px] ml-6'>
                        <img src="https://media.istockphoto.com/photos/businessman-at-work-picture-id613523856?k=20&m=613523856&s=612x612&w=0&h=nIZxSvPDe_sZZYEhsRoQyFpilL2APIRY_LoexXUwlsk=" class="lg:w-[550px] lg:h-[550px] w-[250px] h-[250px] rounded-full" alt='' />
                    </div>
                </div>
                <div>
                    <button className='bg-white text-purple-500 px-4 py-1 rounded-2xl'>
                        #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
                    </button>
                    <h1 class="text-4xl font-semibold py-5 text-white">Unleash Your SCRUM Skills, <br />Grab More Attention To Résumé</h1>
                    <button class="  px-3 py-1 font-bold border-2 text-white rounded-3xl">ENROLL NOW</button>
                    <div className='my-12'>
                        <small className="mb-5 border-b text-white text-center">10% OFF on all courses* | Offer Valid For</small>
                        <Timer
                            props={props}
                        ></Timer>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Banner;