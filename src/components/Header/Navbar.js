import React from 'react';

const Navbar = () => {
    const li = <>
        <li><a>Item 1</a></li>
        <li tabindex="0">
            <a href=""> HOME</a>
        </li>
        <li><a>ABOUT</a></li>
        <li><a>COURSES</a></li>
        <li><a>BLOGS</a></li>
    </>
    return (
        <div class="navbar bg-black text-white">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">
                    <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.959 8.30101L28.288 14.206L26.548 15.472L17.925 10.014L9.38596 15.47L7.65796 14.2L16.885 8.30601C17.1941 8.10716 17.5537 8.00101 17.9212 8.00013C18.2888 7.99924 18.6489 8.10365 18.959 8.30101Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.834984 13.913C-0.323016 13.063 -0.267016 11.264 0.940984 10.493L16.885 0.305002C17.1941 0.106153 17.5537 6.67082e-06 17.9213 -0.000879416C18.2888 -0.0017655 18.6489 0.102646 18.959 0.300002L35.052 10.487C36.269 11.257 36.325 13.067 35.157 13.917L19.066 25.627C18.38 26.127 17.465 26.124 16.78 25.622L0.834984 13.912V13.913ZM2.01798 12.177L17.925 2.014L33.982 12.178L33.987 12.181L33.988 12.184C33.9957 12.1999 33.9998 12.2173 34 12.235C34.0008 12.2539 33.9974 12.2726 33.99 12.29C33.9899 12.2919 33.9892 12.2936 33.988 12.295L33.981 12.301L17.926 23.982L2.01898 12.301C2.01641 12.2993 2.01406 12.2973 2.01198 12.295L2.00898 12.289C2.00206 12.2719 1.99899 12.2534 1.99998 12.235C2.00018 12.2173 2.00428 12.1999 2.01198 12.184L2.01298 12.181L2.01798 12.177Z" fill="white" />
                        <path d="M2.23698 17.664L3.96498 18.934L2.01798 20.177C2.0162 20.1782 2.01453 20.1795 2.01298 20.181L2.01198 20.184C2.00442 20.1996 2.00032 20.2167 1.99998 20.234C1.99885 20.2543 2.00262 20.2745 2.01098 20.293C2.01128 20.2937 2.01161 20.2943 2.01198 20.295L2.01898 20.301L17.926 31.982L33.981 20.301L33.988 20.295L33.989 20.293L33.991 20.29C33.998 20.2726 34.0011 20.2538 34 20.235C33.9998 20.2173 33.9957 20.1999 33.988 20.184L33.987 20.181L33.982 20.178L32.002 18.924L33.742 17.659L35.052 18.488C36.269 19.258 36.325 21.068 35.157 21.918L19.066 33.627C18.38 34.127 17.465 34.124 16.78 33.622L0.834984 21.912C-0.323016 21.062 -0.267016 19.264 0.940984 18.492L2.23698 17.664Z" fill="white" />
                    </svg>
                    <svg className='ml-4' width="90" height="12" viewBox="0 0 90 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.074 11.224C3.64467 11.224 3.234 11.1633 2.842 11.042C2.45 10.9207 2.09067 10.7387 1.764 10.496C1.43733 10.2533 1.15267 9.95933 0.91 9.614C0.667333 9.25933 0.476 8.84867 0.336 8.382L2.114 7.682C2.24467 8.186 2.47333 8.606 2.8 8.942C3.12667 9.26867 3.556 9.432 4.088 9.432C4.284 9.432 4.47067 9.40867 4.648 9.362C4.83467 9.306 4.998 9.23133 5.138 9.138C5.28733 9.03533 5.404 8.90933 5.488 8.76C5.572 8.61067 5.614 8.438 5.614 8.242C5.614 8.05533 5.58133 7.88733 5.516 7.738C5.45067 7.58867 5.33867 7.44867 5.18 7.318C5.03067 7.18733 4.83 7.06133 4.578 6.94C4.33533 6.81867 4.032 6.69267 3.668 6.562L3.052 6.338C2.78133 6.24467 2.506 6.11867 2.226 5.96C1.95533 5.80133 1.708 5.61 1.484 5.386C1.26 5.162 1.07333 4.90067 0.924 4.602C0.784 4.294 0.714 3.94867 0.714 3.566C0.714 3.174 0.788667 2.81 0.938 2.474C1.09667 2.12867 1.316 1.83 1.596 1.578C1.88533 1.31667 2.226 1.116 2.618 0.976C3.01933 0.826666 3.46267 0.751999 3.948 0.751999C4.452 0.751999 4.886 0.821999 5.25 0.962C5.62333 1.09267 5.936 1.26533 6.188 1.48C6.44933 1.68533 6.65933 1.914 6.818 2.166C6.97667 2.418 7.09333 2.656 7.168 2.88L5.502 3.58C5.40867 3.3 5.236 3.048 4.984 2.824C4.74133 2.6 4.40533 2.488 3.976 2.488C3.56533 2.488 3.22467 2.586 2.954 2.782C2.68333 2.96867 2.548 3.216 2.548 3.524C2.548 3.82267 2.67867 4.07933 2.94 4.294C3.20133 4.49933 3.61667 4.7 4.186 4.896L4.816 5.106C5.21733 5.246 5.58133 5.40933 5.908 5.596C6.244 5.77333 6.52867 5.988 6.762 6.24C7.00467 6.492 7.18667 6.78133 7.308 7.108C7.43867 7.42533 7.504 7.794 7.504 8.214C7.504 8.73667 7.39667 9.18933 7.182 9.572C6.97667 9.94533 6.71067 10.2533 6.384 10.496C6.05733 10.7387 5.68867 10.9207 5.278 11.042C4.86733 11.1633 4.466 11.224 4.074 11.224ZM17.8247 9.39C17.3301 9.98733 16.7467 10.4447 16.0747 10.762C15.4027 11.07 14.6514 11.224 13.8207 11.224C13.0741 11.224 12.3787 11.0887 11.7347 10.818C11.1001 10.5473 10.5494 10.1787 10.0827 9.712C9.61607 9.24533 9.2474 8.69467 8.97673 8.06C8.70607 7.416 8.57073 6.72533 8.57073 5.988C8.57073 5.25067 8.70607 4.56467 8.97673 3.93C9.2474 3.286 9.61607 2.73067 10.0827 2.264C10.5494 1.79733 11.1001 1.42867 11.7347 1.158C12.3787 0.887333 13.0741 0.751999 13.8207 0.751999C14.6234 0.751999 15.3281 0.891999 15.9347 1.172C16.5507 1.452 17.0967 1.858 17.5727 2.39L16.2427 3.678C15.9441 3.33267 15.5987 3.05733 15.2067 2.852C14.8241 2.64667 14.3667 2.544 13.8347 2.544C13.3681 2.544 12.9294 2.628 12.5187 2.796C12.1081 2.95467 11.7487 3.18333 11.4407 3.482C11.1421 3.78067 10.9041 4.14467 10.7267 4.574C10.5494 4.994 10.4607 5.46533 10.4607 5.988C10.4607 6.51067 10.5494 6.98667 10.7267 7.416C10.9041 7.836 11.1421 8.19533 11.4407 8.494C11.7487 8.79267 12.1081 9.026 12.5187 9.194C12.9294 9.35267 13.3681 9.432 13.8347 9.432C14.3947 9.432 14.8894 9.32 15.3187 9.096C15.7574 8.86267 16.1447 8.536 16.4807 8.116L17.8247 9.39ZM19.342 0.976H22.996C23.5 0.976 23.9573 1.05533 24.368 1.214C24.7787 1.37267 25.1287 1.592 25.418 1.872C25.7167 2.152 25.9453 2.488 26.104 2.88C26.2627 3.26267 26.342 3.68267 26.342 4.14C26.342 4.476 26.286 4.79333 26.174 5.092C26.062 5.38133 25.908 5.64733 25.712 5.89C25.516 6.12333 25.2873 6.33333 25.026 6.52C24.7647 6.69733 24.4893 6.83733 24.2 6.94L24.186 7.038L26.874 10.888V11H24.704L22.114 7.234H21.232V11H19.342V0.976ZM22.982 5.498C23.4113 5.498 23.7613 5.36733 24.032 5.106C24.312 4.84467 24.452 4.51333 24.452 4.112C24.452 3.93467 24.4193 3.762 24.354 3.594C24.298 3.426 24.2093 3.27667 24.088 3.146C23.9667 3.01533 23.8127 2.91267 23.626 2.838C23.4487 2.754 23.2433 2.712 23.01 2.712H21.232V5.498H22.982ZM31.6916 11.224C31.1036 11.224 30.567 11.1307 30.0816 10.944C29.6056 10.748 29.1996 10.468 28.8636 10.104C28.5276 9.74 28.2663 9.30133 28.0796 8.788C27.893 8.26533 27.7996 7.67267 27.7996 7.01V0.976H29.6896V7.122C29.6896 7.458 29.7316 7.766 29.8156 8.046C29.8996 8.326 30.0256 8.56867 30.1936 8.774C30.3616 8.97933 30.5716 9.14267 30.8236 9.264C31.0756 9.376 31.365 9.432 31.6916 9.432C32.0276 9.432 32.3216 9.376 32.5736 9.264C32.8256 9.14267 33.0356 8.97933 33.2036 8.774C33.3716 8.56867 33.4976 8.326 33.5816 8.046C33.6656 7.766 33.7076 7.458 33.7076 7.122V0.976H35.5976V7.01C35.5976 7.63533 35.5043 8.20933 35.3176 8.732C35.1403 9.24533 34.879 9.68867 34.5336 10.062C34.1976 10.426 33.787 10.7107 33.3016 10.916C32.8256 11.1213 32.289 11.224 31.6916 11.224ZM37.3889 0.976H39.2509L42.3169 6.282H42.4289L45.4949 0.976H47.3709V11H45.4949V6.058L45.6069 4.378H45.4949L42.9469 8.872H41.8129L39.2509 4.378H39.1389L39.2509 6.058V11H37.3889V0.976ZM48.3477 0.976H50.3917L52.4637 7.01L52.8277 8.298H52.9397L53.3317 7.01L55.4877 0.976H57.5317L53.8777 11H51.8897L48.3477 0.976ZM60.5933 2.768V5.092H64.6113V6.884H60.5933V9.208H65.0593V11H58.7033V0.976H65.0593V2.768H60.5933ZM66.7971 0.976H70.4511C70.9551 0.976 71.4124 1.05533 71.8231 1.214C72.2337 1.37267 72.5837 1.592 72.8731 1.872C73.1717 2.152 73.4004 2.488 73.5591 2.88C73.7177 3.26267 73.7971 3.68267 73.7971 4.14C73.7971 4.476 73.7411 4.79333 73.6291 5.092C73.5171 5.38133 73.3631 5.64733 73.1671 5.89C72.9711 6.12333 72.7424 6.33333 72.4811 6.52C72.2197 6.69733 71.9444 6.83733 71.6551 6.94L71.6411 7.038L74.3291 10.888V11H72.1591L69.5691 7.234H68.6871V11H66.7971V0.976ZM70.4371 5.498C70.8664 5.498 71.2164 5.36733 71.4871 5.106C71.7671 4.84467 71.9071 4.51333 71.9071 4.112C71.9071 3.93467 71.8744 3.762 71.8091 3.594C71.7531 3.426 71.6644 3.27667 71.5431 3.146C71.4217 3.01533 71.2677 2.91267 71.0811 2.838C70.9037 2.754 70.6984 2.712 70.4651 2.712H68.6871V5.498H70.4371ZM78.5447 11.224C78.1154 11.224 77.7047 11.1633 77.3127 11.042C76.9207 10.9207 76.5614 10.7387 76.2347 10.496C75.908 10.2533 75.6234 9.95933 75.3807 9.614C75.138 9.25933 74.9467 8.84867 74.8067 8.382L76.5847 7.682C76.7154 8.186 76.944 8.606 77.2707 8.942C77.5974 9.26867 78.0267 9.432 78.5587 9.432C78.7547 9.432 78.9414 9.40867 79.1187 9.362C79.3054 9.306 79.4687 9.23133 79.6087 9.138C79.758 9.03533 79.8747 8.90933 79.9587 8.76C80.0427 8.61067 80.0847 8.438 80.0847 8.242C80.0847 8.05533 80.052 7.88733 79.9867 7.738C79.9214 7.58867 79.8094 7.44867 79.6507 7.318C79.5014 7.18733 79.3007 7.06133 79.0487 6.94C78.806 6.81867 78.5027 6.69267 78.1387 6.562L77.5227 6.338C77.252 6.24467 76.9767 6.11867 76.6967 5.96C76.426 5.80133 76.1787 5.61 75.9547 5.386C75.7307 5.162 75.544 4.90067 75.3947 4.602C75.2547 4.294 75.1847 3.94867 75.1847 3.566C75.1847 3.174 75.2594 2.81 75.4087 2.474C75.5674 2.12867 75.7867 1.83 76.0667 1.578C76.356 1.31667 76.6967 1.116 77.0887 0.976C77.49 0.826666 77.9334 0.751999 78.4187 0.751999C78.9227 0.751999 79.3567 0.821999 79.7207 0.962C80.094 1.09267 80.4067 1.26533 80.6587 1.48C80.92 1.68533 81.13 1.914 81.2887 2.166C81.4474 2.418 81.564 2.656 81.6387 2.88L79.9727 3.58C79.8794 3.3 79.7067 3.048 79.4547 2.824C79.212 2.6 78.876 2.488 78.4467 2.488C78.036 2.488 77.6954 2.586 77.4247 2.782C77.154 2.96867 77.0187 3.216 77.0187 3.524C77.0187 3.82267 77.1494 4.07933 77.4107 4.294C77.672 4.49933 78.0874 4.7 78.6567 4.896L79.2867 5.106C79.688 5.246 80.052 5.40933 80.3787 5.596C80.7147 5.77333 80.9994 5.988 81.2327 6.24C81.4754 6.492 81.6574 6.78133 81.7787 7.108C81.9094 7.42533 81.9747 7.794 81.9747 8.214C81.9747 8.73667 81.8674 9.18933 81.6527 9.572C81.4474 9.94533 81.1814 10.2533 80.8547 10.496C80.528 10.7387 80.1594 10.9207 79.7487 11.042C79.338 11.1633 78.9367 11.224 78.5447 11.224ZM85.4214 2.768V5.092H89.4394V6.884H85.4214V9.208H89.8874V11H83.5314V0.976H89.8874V2.768H85.4214Z" fill="white" />
                    </svg>
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {li}
                </ul>
            </div>
            <div class="navbar-end">
                <a href='#' class="" >LOGIN</a>
                <a href='#' class="border-white border ml-4 px-3 py-1 rounded-2xl">SIGN UP</a>
            </div>
        </div>
    );
};

export default Navbar;