import React from 'react';

const Contact = () => {
    return (
        <div className='lg:flex  justify-between items-center bg-[#5F72BE] py-4 rounded-lg px-8 lg:mx-12 my-16'>
            <div className='text-white '>
                <h2 className='font-semibold'>Email Us</h2>
                <p>Connect with us in case of any queries, complaints or feedbacks...</p>
            </div>
            <div className='lg:mt-0 mt-4'>
                <label for="my-modal" className='px-12 bg-[#2D81F7] text-white rounded-lg py-2 '>CONTACT US</label>
            </div>
        </div>
    );
};

export default Contact;