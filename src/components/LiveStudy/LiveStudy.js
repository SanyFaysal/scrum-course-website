import React from 'react';

const LiveStudy = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 lg:mx-12 mx-6'>
            <div className='my-auto lg:pr-[310px]'>
                <h2 className='text-purple-500 text-[32px] font-bold'>Start learning with us right now!</h2>
                <p className='my-5'>Choose from 100+ online video courses with new updates.</p>
                <button class="btn btn-outline btn-primary btn-sm rounded-3xl">Enroll Now</button>
            </div>
            <div className='mx-16'>
                <div className='flex justify-start items-center items-center '>
                    <h5 className='font-bold mr-2 text-orange-500'>Live<br />
                        Exams</h5>
                    <div className='bg-orange-50 inline-block rounded-full p-8  mr-0'>
                        <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44 9.33333C42.9391 9.33333 41.9217 9.75476 41.1716 10.5049C40.4214 11.2551 40 12.2725 40 13.3333V16H48V13.3333C48 12.2725 47.5786 11.2551 46.8284 10.5049C46.0783 9.75476 45.0609 9.33333 44 9.33333ZM48 18.6667H40V40.6667L44 46.6667L48 40.6667V18.6667ZM0 4V44C0 45.0609 0.421427 46.0783 1.17157 46.8284C1.92172 47.5786 2.93913 48 4 48H33.3333C34.3942 48 35.4116 47.5786 36.1618 46.8284C36.9119 46.0783 37.3333 45.0609 37.3333 44V4C37.3333 2.93913 36.9119 1.92172 36.1618 1.17157C35.4116 0.421427 34.3942 0 33.3333 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4ZM18.6667 12C18.6667 11.6464 18.8071 11.3072 19.0572 11.0572C19.3072 10.8071 19.6464 10.6667 20 10.6667H30.6667C31.0203 10.6667 31.3594 10.8071 31.6095 11.0572C31.8595 11.3072 32 11.6464 32 12C32 12.3536 31.8595 12.6928 31.6095 12.9428C31.3594 13.1929 31.0203 13.3333 30.6667 13.3333H20C19.6464 13.3333 19.3072 13.1929 19.0572 12.9428C18.8071 12.6928 18.6667 12.3536 18.6667 12ZM20 16C19.6464 16 19.3072 16.1405 19.0572 16.3905C18.8071 16.6406 18.6667 16.9797 18.6667 17.3333C18.6667 17.687 18.8071 18.0261 19.0572 18.2761C19.3072 18.5262 19.6464 18.6667 20 18.6667H30.6667C31.0203 18.6667 31.3594 18.5262 31.6095 18.2761C31.8595 18.0261 32 17.687 32 17.3333C32 16.9797 31.8595 16.6406 31.6095 16.3905C31.3594 16.1405 31.0203 16 30.6667 16H20ZM18.6667 29.3333C18.6667 28.9797 18.8071 28.6406 19.0572 28.3905C19.3072 28.1405 19.6464 28 20 28H30.6667C31.0203 28 31.3594 28.1405 31.6095 28.3905C31.8595 28.6406 32 28.9797 32 29.3333C32 29.687 31.8595 30.0261 31.6095 30.2761C31.3594 30.5262 31.0203 30.6667 30.6667 30.6667H20C19.6464 30.6667 19.3072 30.5262 19.0572 30.2761C18.8071 30.0261 18.6667 29.687 18.6667 29.3333ZM20 33.3333C19.6464 33.3333 19.3072 33.4738 19.0572 33.7239C18.8071 33.9739 18.6667 34.313 18.6667 34.6667C18.6667 35.0203 18.8071 35.3594 19.0572 35.6095C19.3072 35.8595 19.6464 36 20 36H30.6667C31.0203 36 31.3594 35.8595 31.6095 35.6095C31.8595 35.3594 32 35.0203 32 34.6667C32 34.313 31.8595 33.9739 31.6095 33.7239C31.3594 33.4738 31.0203 33.3333 30.6667 33.3333H20ZM8 29.3333V33.3333H12V29.3333H8ZM6.66667 26.6667H13.3333C13.687 26.6667 14.0261 26.8071 14.2761 27.0572C14.5262 27.3072 14.6667 27.6464 14.6667 28V34.6667C14.6667 35.0203 14.5262 35.3594 14.2761 35.6095C14.0261 35.8595 13.687 36 13.3333 36H6.66667C6.31305 36 5.97391 35.8595 5.72386 35.6095C5.47381 35.3594 5.33333 35.0203 5.33333 34.6667V28C5.33333 27.6464 5.47381 27.3072 5.72386 27.0572C5.97391 26.8071 6.31305 26.6667 6.66667 26.6667ZM15.6093 12.9427C15.8522 12.6912 15.9866 12.3544 15.9836 12.0048C15.9805 11.6552 15.8403 11.3208 15.5931 11.0736C15.3459 10.8264 15.0115 10.6861 14.6619 10.6831C14.3123 10.6801 13.9755 10.8145 13.724 11.0573L9.33333 15.448L7.60933 13.724C7.35786 13.4811 7.02106 13.3467 6.67147 13.3498C6.32187 13.3528 5.98745 13.493 5.74024 13.7402C5.49303 13.9875 5.35281 14.3219 5.34977 14.6715C5.34673 15.0211 5.48112 15.3579 5.724 15.6093L9.33333 19.2187L15.6093 12.9427Z" fill="#FFAD3B" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-end items-center  lg:mt-[-40px]'>
                    <h5 className='font-bold mr-2 text-red-500'>1000+<br />
                        Lessons
                    </h5>
                    <div className='bg-red-50 inline-block rounded-full p-8 ml-0'>
                        <svg width="64" height="64" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.33333 53.6666C3.86667 53.6666 2.61067 53.1449 1.56533 52.1013C0.521777 51.056 0 49.8 0 48.3333V5.66665C0 4.19998 0.521777 2.94398 1.56533 1.89865C2.61067 0.85509 3.86667 0.333313 5.33333 0.333313H37.3333C38.8 0.333313 40.056 0.85509 41.1013 1.89865C42.1449 2.94398 42.6667 4.19998 42.6667 5.66665V24.5333C42.2222 24.4444 41.744 24.3884 41.232 24.3653C40.7218 24.344 40.3111 24.3333 40 24.3333C34.8889 24.3333 30.4996 26.144 26.832 29.7653C23.1662 33.3884 21.3333 37.8 21.3333 43C21.3333 44.9111 21.6222 46.7778 22.2 48.6C22.7778 50.4222 23.6222 52.1111 24.7333 53.6666H5.33333ZM40 56.3333C36.3111 56.3333 33.1671 55.0338 30.568 52.4346C27.9671 49.8338 26.6667 46.6889 26.6667 43C26.6667 39.3111 27.9671 36.1662 30.568 33.5653C33.1671 30.9662 36.3111 29.6666 40 29.6666C43.6889 29.6666 46.8338 30.9662 49.4347 33.5653C52.0338 36.1662 53.3333 39.3111 53.3333 43C53.3333 46.6889 52.0338 49.8338 49.4347 52.4346C46.8338 55.0338 43.6889 56.3333 40 56.3333ZM38.7333 48.4L45.5333 44.1333C45.9333 43.8666 46.1333 43.4889 46.1333 43C46.1333 42.5111 45.9333 42.1333 45.5333 41.8666L38.7333 37.6C38.2444 37.3333 37.7778 37.3226 37.3333 37.568C36.8889 37.8115 36.6667 38.2 36.6667 38.7333V47.2666C36.6667 47.8 36.8889 48.1893 37.3333 48.4346C37.7778 48.6782 38.2444 48.6666 38.7333 48.4V48.4ZM12.6667 23.1333L17.3333 20.3333L22 23.1333C22.4444 23.4 22.8889 23.4 23.3333 23.1333C23.7778 22.8666 24 22.4889 24 22V5.66665H10.6667V22C10.6667 22.4889 10.8889 22.8666 11.3333 23.1333C11.7778 23.4 12.2222 23.4 12.6667 23.1333Z" fill="#EB5757" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-start items-center  lg:mt-[-40px]'>
                    <h5 className='font-bold mr-2 text-blue-500'>Live<br />
                        Classes
                    </h5>
                    <div className='bg-blue-50 inline-block   rounded-full p-8'>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8V45.3333H37.8493V42.6667H10.6667V10.6667H46.6667V13.4933H49.3333V8H8ZM49.3333 21.3333C49.3333 22.0406 49.0524 22.7189 48.5523 23.219C48.0522 23.719 47.3739 24 46.6667 24C45.9594 24 45.2811 23.719 44.781 23.219C44.281 22.7189 44 22.0406 44 21.3333C44 20.6261 44.281 19.9478 44.781 19.4477C45.2811 18.9476 45.9594 18.6667 46.6667 18.6667C47.3739 18.6667 48.0522 18.9476 48.5523 19.4477C49.0524 19.9478 49.3333 20.6261 49.3333 21.3333ZM52 21.3333C52 22.7478 51.4381 24.1044 50.4379 25.1046C49.4377 26.1048 48.0812 26.6667 46.6667 26.6667C45.2522 26.6667 43.8956 26.1048 42.8954 25.1046C41.8952 24.1044 41.3333 22.7478 41.3333 21.3333C41.3333 19.9188 41.8952 18.5623 42.8954 17.5621C43.8956 16.5619 45.2522 16 46.6667 16C48.0812 16 49.4377 16.5619 50.4379 17.5621C51.4381 18.5623 52 19.9188 52 21.3333Z" fill="#2D81F7" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40.124 29.1067C40.8676 28.3968 41.856 28.0005 42.884 28H48.3267C50.2787 28 52.096 28.664 53.496 29.9867C54.8427 31.2587 55.544 32.8893 55.8307 34.4347C56.2813 36.864 55.8147 39.5187 54.6667 41.872V52.6667C54.6667 53.5032 54.3522 54.3091 53.7857 54.9245C53.2191 55.5399 52.4419 55.9198 51.6083 55.9888C50.7746 56.0578 49.9455 55.8108 49.2855 55.2969C48.6255 54.783 48.1828 54.0398 48.0453 53.2147L47.3333 48.9427L46.6213 53.2147C46.4838 54.0398 46.0412 54.783 45.3811 55.2969C44.7211 55.8108 43.892 56.0578 43.0584 55.9888C42.2248 55.9198 41.4475 55.5399 40.881 54.9245C40.3144 54.3091 40 53.5032 40 52.6667V40.124C39.3919 40.4751 38.7021 40.66 38 40.66H31.1973C30.1365 40.66 29.119 40.2386 28.3689 39.4884C27.6188 38.7383 27.1973 37.7209 27.1973 36.66C27.1973 35.5991 27.6188 34.5817 28.3689 33.8316C29.119 33.0814 30.1365 32.66 31.1973 32.66H36.3973L40.124 29.1053V29.1067ZM42.6667 44.6333V52.6667C42.6671 52.8337 42.7302 52.9944 42.8435 53.1171C42.9568 53.2398 43.112 53.3155 43.2785 53.3293C43.4449 53.343 43.6104 53.2938 43.7423 53.1913C43.8742 53.0889 43.9628 52.9407 43.9907 52.776L45.3813 44.4347C45.4331 44.1233 45.5936 43.8405 45.8343 43.6363C46.0751 43.4322 46.3804 43.3201 46.696 43.32H47.9707C48.2863 43.3201 48.5916 43.4322 48.8323 43.6363C49.073 43.8405 49.2336 44.1233 49.2853 44.4347L50.676 52.776C50.7038 52.9407 50.7925 53.0889 50.9243 53.1913C51.0562 53.2938 51.2218 53.343 51.3882 53.3293C51.5546 53.3155 51.7098 53.2398 51.8231 53.1171C51.9364 52.9944 51.9995 52.8337 52 52.6667V41.5547C52 41.3412 52.0512 41.1309 52.1493 40.9413C53.1787 38.9547 53.5533 36.7773 53.2093 34.9213C53 33.7933 52.5107 32.724 51.6653 31.9253C50.8027 31.1107 49.6587 30.6667 48.3267 30.6667H42.8853C42.5427 30.6667 42.212 30.7987 41.964 31.0347L37.852 34.9573C37.6042 35.1941 37.2747 35.3264 36.932 35.3267H31.1973C30.8437 35.3267 30.5046 35.4671 30.2545 35.7172C30.0045 35.9672 29.864 36.3064 29.864 36.66C29.864 37.0136 30.0045 37.3528 30.2545 37.6028C30.5046 37.8529 30.8437 37.9933 31.1973 37.9933H38C38.3427 37.993 38.6722 37.8608 38.92 37.624L40.4133 36.2C40.6023 36.0199 40.8399 35.8992 41.0968 35.8529C41.3536 35.8066 41.6185 35.8367 41.8584 35.9395C42.0983 36.0423 42.3028 36.2132 42.4465 36.4311C42.5901 36.649 42.6667 36.9043 42.6667 37.1653V44.6347V44.6333Z" fill="#2D81F7" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-end items-center  lg:mt-[-40px]'>
                    <h5 className='font-bold mr-2 text-green-500'>1000+<br />
                        Lessons
                    </h5>
                    <div className='bg-green-50 inline-block   rounded-full p-8'>
                        <svg width="64" height="64" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8 35.2C20.561 35.2 20.322 35.235 20.094 35.309C18.798 35.73 17.435 36 16 36C14.565 36 13.202 35.73 11.905 35.309C11.677 35.235 11.439 35.2 11.2 35.2C4.99401 35.2 -0.032991 40.248 8.95999e-06 46.462C0.014009 49.088 2.17301 51.2 4.80001 51.2H27.2C29.827 51.2 31.986 49.088 32 46.462C32.033 40.248 27.006 35.2 20.8 35.2ZM16 32C21.302 32 25.6 27.702 25.6 22.4C25.6 17.098 21.302 12.8 16 12.8C10.698 12.8 6.40001 17.098 6.40001 22.4C6.40001 27.702 10.698 32 16 32ZM59.2 0H20.8C18.153 0 16 2.225 16 4.959V9.6C18.342 9.6 20.51 10.278 22.4 11.38V6.4H57.6V35.2H51.2V28.8H38.4V35.2H30.776C32.686 36.869 34.088 39.073 34.745 41.6H59.2C61.847 41.6 64 39.375 64 36.641V4.959C64 2.225 61.847 0 59.2 0Z" fill="#08BD80" />
                        </svg>
                    </div>
                </div>
                <div className='flex justify-start items-center  lg:mt-[-40px]'>
                    <h5 className='font-bold mr-2 text-orange-500'>100 K+<br />
                        Views
                    </h5>
                    <div className='bg-orange-50 inline-block  rounded-full p-8'>
                        <svg width="64" height="64" viewBox="0 0 60 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.88 21.32C57.5277 15.2353 53.444 9.97323 48.1336 6.18417C42.8232 2.39511 36.519 0.245146 30 0C23.481 0.245146 17.1768 2.39511 11.8664 6.18417C6.55604 9.97323 2.47233 15.2353 0.120004 21.32C-0.0388619 21.7594 -0.0388619 22.2406 0.120004 22.68C2.47233 28.7647 6.55604 34.0268 11.8664 37.8158C17.1768 41.6049 23.481 43.7549 30 44C36.519 43.7549 42.8232 41.6049 48.1336 37.8158C53.444 34.0268 57.5277 28.7647 59.88 22.68C60.0389 22.2406 60.0389 21.7594 59.88 21.32ZM30 35C27.4288 35 24.9154 34.2376 22.7776 32.8091C20.6398 31.3806 18.9735 29.3503 17.9896 26.9749C17.0056 24.5994 16.7482 21.9856 17.2498 19.4638C17.7514 16.9421 18.9895 14.6257 20.8076 12.8076C22.6257 10.9895 24.9421 9.7514 27.4638 9.24979C29.9856 8.74818 32.5994 9.00563 34.9749 9.98957C37.3503 10.9735 39.3806 12.6397 40.8091 14.7776C42.2376 16.9154 43 19.4288 43 22C42.9947 25.4462 41.6234 28.7497 39.1866 31.1865C36.7497 33.6234 33.4462 34.9947 30 35Z" fill="#FE5702" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveStudy;