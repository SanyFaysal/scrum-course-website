import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactModal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully ');
        e.target.reset()
        console.log(e);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='text-4xl text-[#5F72BE] font-bold text-center'>Contact From Here</h1>
                    <div class="card lg:w-96 w-80 mx-auto">
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Your Name" required class="input input-bordered w-full max-w-xs" />
                                <input type="text" placeholder="Email Address" required class="input my-3 input-bordered w-full max-w-xs" />
                                <textarea class="textarea" placeholder="Your Message" required className='textarea textarea-bordered w-full max-w-xs'></textarea>
                                <button type='submit' class="btn btn-success w-full max-w-xs mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ContactModal;