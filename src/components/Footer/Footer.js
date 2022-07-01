import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black pt-16 pb-3 lg:px-24 px-6'>
            <div class="lg:border-b-[1px] mb-10 pb-0  border-[#363636] lg:flex lg:flex-row text-white flex-col justify-around  ">
                <div className='lg:pr-16 lg:border-r-[1px] border-[#363636] pb-12'>
                    <h2 className='text-[24px] font-[700]'>Logo</h2>
                    <p className='text-[14px] lg:my-4 text-[#8C8C8C]'>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                    <div className='lg:flex justify-between mt-6'>
                        <div className='flex'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#343538" />
                                <path d="M31.3084 30.2751C31.3084 30.5751 31.2417 30.8834 31.1 31.1834C30.9584 31.4834 30.775 31.7667 30.5334 32.0334C30.125 32.4834 29.675 32.8084 29.1667 33.0167C28.6667 33.2251 28.125 33.3334 27.5417 33.3334C26.6917 33.3334 25.7834 33.1334 24.825 32.7251C23.8667 32.3167 22.9084 31.7667 21.9584 31.0751C21 30.3751 20.0917 29.6001 19.225 28.7417C18.3667 27.8751 17.5917 26.9667 16.9 26.0167C16.2167 25.0667 15.6667 24.1167 15.2667 23.1751C14.8667 22.2251 14.6667 21.3167 14.6667 20.4501C14.6667 19.8834 14.7667 19.3417 14.9667 18.8417C15.1667 18.3334 15.4834 17.8667 15.925 17.4501C16.4584 16.9251 17.0417 16.6667 17.6584 16.6667C17.8917 16.6667 18.125 16.7167 18.3334 16.8167C18.55 16.9167 18.7417 17.0667 18.8917 17.2834L20.825 20.0084C20.975 20.2167 21.0834 20.4084 21.1584 20.5917C21.2334 20.7667 21.275 20.9417 21.275 21.1001C21.275 21.3001 21.2167 21.5001 21.1 21.6917C20.9917 21.8834 20.8334 22.0834 20.6334 22.2834L20 22.9417C19.9084 23.0334 19.8667 23.1417 19.8667 23.2751C19.8667 23.3417 19.875 23.4001 19.8917 23.4667C19.9167 23.5334 19.9417 23.5834 19.9584 23.6334C20.1084 23.9084 20.3667 24.2667 20.7334 24.7001C21.1084 25.1334 21.5084 25.5751 21.9417 26.0167C22.3917 26.4584 22.825 26.8667 23.2667 27.2417C23.7 27.6084 24.0584 27.8584 24.3417 28.0084C24.3834 28.0251 24.4334 28.0501 24.4917 28.0751C24.5584 28.1001 24.625 28.1084 24.7 28.1084C24.8417 28.1084 24.95 28.0584 25.0417 27.9667L25.675 27.3417C25.8834 27.1334 26.0834 26.9751 26.275 26.8751C26.4667 26.7584 26.6584 26.7001 26.8667 26.7001C27.025 26.7001 27.1917 26.7334 27.375 26.8084C27.5584 26.8834 27.75 26.9917 27.9584 27.1334L30.7167 29.0917C30.9334 29.2417 31.0834 29.4167 31.175 29.6251C31.2584 29.8334 31.3084 30.0417 31.3084 30.2751Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" />
                                <path d="M28.4167 22.5002C28.4167 22.0002 28.0251 21.2335 27.4417 20.6085C26.9084 20.0335 26.2001 19.5835 25.5001 19.5835" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M31.3334 22.5001C31.3334 19.2751 28.7251 16.6667 25.5001 16.6667" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <div className='ml-4'>
                                <h5 className='text-[12px] font-[400]'>Have a question?</h5>
                                <p className='text-[16px] font-semibold'>310-437-2766</p>
                            </div>
                        </div>
                        <div className='flex mt-4 lg:mt-0'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#343538" />
                                <path d="M28.1667 31.0834H19.8333C17.3333 31.0834 15.6667 29.8334 15.6667 26.9167V21.0834C15.6667 18.1667 17.3333 16.9167 19.8333 16.9167H28.1667C30.6667 16.9167 32.3333 18.1667 32.3333 21.0834V26.9167C32.3333 29.8334 30.6667 31.0834 28.1667 31.0834Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.1667 21.5L25.5583 23.5833C24.7 24.2667 23.2917 24.2667 22.4333 23.5833L19.8333 21.5" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <div className='ml-4'>
                                <h5 className='text-[12px] font-[400]'> Contact us at</h5>
                                <p className='text-[16px] font-semibold'>unreal@outlook.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-16 mt-10 lg:mt-0 pb-12'>
                    <h2 className='text-[24px] font-[700]'>Newsletter</h2>
                    <p className='text-[14px] my-4 text-[#8C8C8C]'>Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
                    <div class="form-control  mt-6">
                        <label class="relative block ">
                            <span class="absolute inset-y-0 left-4 flex items-center pl-2">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" >
                                    <path d="M11.3333 13.6666H4.66667C2.66667 13.6666 1.33334 12.6666 1.33334 10.3333V5.66659C1.33334 3.33325 2.66667 2.33325 4.66667 2.33325H11.3333C13.3333 2.33325 14.6667 3.33325 14.6667 5.66659V10.3333C14.6667 12.6666 13.3333 13.6666 11.3333 13.6666Z" stroke="#8C8C8C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.3333 6L9.24666 7.66667C8.55999 8.21333 7.43333 8.21333 6.74666 7.66667L4.66666 6" stroke="#8C8C8C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </span>
                            <input class=" placeholder:text-slate-400 block bg-[#343538] w-full rounded-3xl py-4 pl-16 pr-3 shadow-sm focus:outline-none   sm:text-sm" placeholder="Enter Your Email" type="text" name="search" />
                            <span class="absolute inset-y-0 right-4 flex items-center pr-2">
                                <button className='bg-[#537CE6] py-1 px-5 rounded-2xl btn-sm'>Submit</button>

                            </span>
                        </label>
                    </div>

                </div>

            </div>
            <div>
                <ul className='grid lg:grid-cols-10 grid-cols-4 align-center text-justify text-[18px] text-gray-500'>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>Jobs</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Privacy policy</a></li>
                    <li><a href='#'>Sitemap</a></li>
                    <li><a href='#'>Terms of Use</a></li>
                </ul>
                <div className='lg:flex justify-between  mx-auto center mt-8'>
                    <div className='flex mb-3 lg:mb-0 '>
                        <a href="#" className=" mr-1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="#343538" />
                                <path d="M25.6667 21.75V24.1667H27.8333C28 24.1667 28.0833 24.3333 28.0833 24.5L27.75 26.0833C27.75 26.1667 27.5833 26.25 27.5 26.25H25.6667V32.3333H23.1667V26.3333H21.75C21.5833 26.3333 21.5 26.25 21.5 26.0833V24.5C21.5 24.3333 21.5833 24.25 21.75 24.25H23.1667V21.5C23.1667 20.0833 24.25 19 25.6667 19H27.9167C28.0833 19 28.1667 19.0833 28.1667 19.25V21.25C28.1667 21.4167 28.0833 21.5 27.9167 21.5H25.9167C25.75 21.5 25.6667 21.5833 25.6667 21.75Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M26.5 32.3334H21.5C17.3334 32.3334 15.6667 30.6667 15.6667 26.5001V21.5001C15.6667 17.3334 17.3334 15.6667 21.5 15.6667H26.5C30.6667 15.6667 32.3334 17.3334 32.3334 21.5001V26.5001C32.3334 30.6667 30.6667 32.3334 26.5 32.3334Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className=" mx-1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="#343538" />
                                <path d="M28.1667 30.6666H19.8333C17.3333 30.6666 15.6667 28.9999 15.6667 26.4999V21.4999C15.6667 18.9999 17.3333 17.3333 19.8333 17.3333H28.1667C30.6667 17.3333 32.3333 18.9999 32.3333 21.4999V26.4999C32.3333 28.9999 30.6667 30.6666 28.1667 30.6666Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.5 21.9168L25.5833 23.1668C26.3333 23.6668 26.3333 24.4168 25.5833 24.9168L23.5 26.1668C22.6667 26.6668 22 26.2501 22 25.3334V22.8334C22 21.7501 22.6667 21.4168 23.5 21.9168Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#" className=" mx-1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="#343538" />
                                <path d="M29.4167 17.9917C27.25 21.7834 23.075 23.9584 18.725 23.5667L16.0833 23.325" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.5833 30.1417C20.75 26.3501 24.925 24.1751 29.275 24.5667L31.9167 24.8084" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24 32.3334C28.6024 32.3334 32.3333 28.6025 32.3333 24.0001C32.3333 19.3977 28.6024 15.6667 24 15.6667C19.3976 15.6667 15.6667 19.3977 15.6667 24.0001C15.6667 28.6025 19.3976 32.3334 24 32.3334Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.3583 16.5L23.0083 19.7917C24.7833 21.9917 26.0417 24.55 26.7083 27.2917L27.7167 31.45" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>

                        <a href="#" className=" mx-1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="#343538" />
                                <path d="M24 15.6667H21.25C19.6667 15.6667 18.4167 16.9167 18.4167 18.4167C18.4167 19.9167 19.6667 21.1667 21.1667 21.1667H24V15.6667Z" stroke="white" stroke-miterlimit="10" />
                                <path d="M24 21.25H21.25C19.75 21.25 18.5 22.5 18.5 24C18.5 25.5 19.75 26.75 21.25 26.75H24V21.25Z" stroke="white" stroke-miterlimit="10" />
                                <path d="M24 26.75H21.25C19.75 26.75 18.5 28 18.5 29.5C18.5 31 19.75 32.25 21.25 32.25C22.75 32.25 24 31 24 29.5V26.75Z" stroke="white" stroke-miterlimit="10" />
                                <path d="M24 15.6667H26.75C28.25 15.6667 29.5 16.9167 29.5 18.4167C29.5 19.9167 28.25 21.1667 26.75 21.1667H24V15.6667Z" stroke="white" stroke-miterlimit="10" />
                                <path d="M26.75 21.25C28.25 21.25 29.5 22.5 29.5 24C29.5 25.5 28.25 26.75 26.75 26.75C25.25 26.75 24 25.5 24 24C24 22.5 25.25 21.25 26.75 21.25Z" stroke="white" stroke-miterlimit="10" />
                            </svg>
                        </a>
                        <a href="#" className=" mx-1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7452 10.7452 0 24 0V0C37.2548 0 48 10.7452 48 24V24C48 37.2548 37.2548 48 24 48V48C10.7452 48 0 37.2548 0 24V24Z" fill="#343538" />
                                <path d="M19.75 31.1667C21 31.9167 22.5 32.3334 24 32.3334C28.5833 32.3334 32.3333 28.5834 32.3333 24.0001C32.3333 19.4167 28.5833 15.6667 24 15.6667C19.4167 15.6667 15.6667 19.4167 15.6667 24.0001C15.6667 25.5001 16.0833 26.9167 16.75 28.1667L16.1071 30.6394C15.9124 31.3883 16.6056 32.0652 17.3496 31.8526L19.75 31.1667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.75 26.3737C27.75 26.5087 27.72 26.6475 27.6561 26.7825C27.5923 26.9175 27.5096 27.045 27.4007 27.165C27.2167 27.3675 27.0139 27.5138 26.7848 27.6075C26.5595 27.7013 26.3153 27.75 26.0525 27.75C25.6694 27.75 25.26 27.66 24.8281 27.4763C24.3962 27.2925 23.9643 27.045 23.5362 26.7338C23.1043 26.4188 22.6949 26.07 22.3043 25.6837C21.9175 25.2937 21.5682 24.885 21.2565 24.4575C20.9485 24.03 20.7007 23.6025 20.5204 23.1788C20.3401 22.7513 20.25 22.3425 20.25 21.9525C20.25 21.6975 20.2951 21.4538 20.3852 21.2288C20.4753 21 20.6181 20.79 20.8171 20.6025C21.0575 20.3663 21.3204 20.25 21.5983 20.25C21.7034 20.25 21.8086 20.2725 21.9025 20.3175C22.0001 20.3625 22.0865 20.43 22.1541 20.5275L23.0254 21.7538C23.093 21.8475 23.1418 21.9338 23.1756 22.0163C23.2094 22.095 23.2282 22.1738 23.2282 22.245C23.2282 22.335 23.2019 22.425 23.1493 22.5112C23.1005 22.5975 23.0292 22.6875 22.939 22.7775L22.6536 23.0737C22.6123 23.115 22.5935 23.1638 22.5935 23.2238C22.5935 23.2538 22.5973 23.28 22.6048 23.31C22.616 23.34 22.6273 23.3625 22.6348 23.385C22.7024 23.5087 22.8189 23.67 22.9841 23.865C23.1531 24.06 23.3334 24.2588 23.5287 24.4575C23.7315 24.6563 23.9268 24.84 24.1258 25.0087C24.3211 25.1737 24.4826 25.2862 24.6103 25.3537C24.6291 25.3612 24.6516 25.3725 24.6779 25.3837C24.7079 25.395 24.738 25.3987 24.7718 25.3987C24.8356 25.3987 24.8845 25.3763 24.9258 25.335L25.2112 25.0538C25.3051 24.96 25.3952 24.8887 25.4816 24.8438C25.568 24.7912 25.6544 24.765 25.7482 24.765C25.8196 24.765 25.8947 24.78 25.9773 24.8138C26.06 24.8475 26.1463 24.8963 26.2402 24.96L27.4834 25.8412C27.581 25.9087 27.6486 25.9875 27.6899 26.0812C27.7275 26.175 27.75 26.2687 27.75 26.3737Z" stroke="white" stroke-miterlimit="10" />
                            </svg>
                        </a>

                    </div>
                    <div className='text-gray-500'>
                        <h5>© 2000-2021, All Rights Reserved</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;