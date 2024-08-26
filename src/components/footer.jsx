import { Link } from 'react-router-dom';
import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear();
    return (
        <footer className='p-4 bg-[#151515] text-[#fff] px-6 sm:px-8 text-center w-full'>
            <div className='mt-8 mb-4 flex flex-col items-center text-center'>
                <h3 className='text-[#fff] font-[600] text-[20px]'>Contact Us</h3>
                <div className='flex gap-4 mt-3 mb-[1.5rem]'>
                    <Link href="#">
                        <svg width="18" height="18" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" fill="white"/>
                        </svg>
                    </Link>
                    <Link href="#">
                        <svg width="18" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.213 2.65605C20.4495 2.99352 19.6399 3.21529 18.811 3.31405C19.6838 2.79084 20.3369 1.96857 20.649 1.00005C19.829 1.48805 18.93 1.83005 17.994 2.01505C17.3646 1.34163 16.5304 0.895012 15.621 0.744633C14.7116 0.594255 13.7779 0.74854 12.9653 1.1835C12.1526 1.61846 11.5064 2.30973 11.1271 3.14984C10.7478 3.98995 10.6567 4.93183 10.868 5.82905C9.20488 5.74609 7.57783 5.31413 6.09257 4.56125C4.60731 3.80837 3.29707 2.75141 2.247 1.45905C1.87538 2.09754 1.68005 2.82329 1.681 3.56205C1.681 5.01205 2.42 6.29305 3.541 7.04305C2.87719 7.02092 2.2281 6.84169 1.647 6.52005V6.57105C1.64697 7.53692 1.98103 8.47307 2.59253 9.22072C3.20403 9.96837 4.05531 10.4815 5.002 10.673C4.38567 10.8404 3.73928 10.8651 3.112 10.745C3.37892 11.5764 3.89921 12.3035 4.6 12.8244C5.30078 13.3454 6.14696 13.6341 7.02 13.65C6.15219 14.3312 5.15871 14.8348 4.09627 15.1319C3.03384 15.4291 1.92328 15.5141 0.827999 15.382C2.7397 16.6115 4.9651 17.2642 7.238 17.262C14.932 17.262 19.138 10.889 19.138 5.36205C19.138 5.18138 19.134 5.00105 19.126 4.82105C19.9444 4.22936 20.6507 3.49657 21.212 2.65705" fill="white"/>
                        </svg>
                    </Link>
                    <Link href="#">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94 5.00002C6.93973 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46943 6.99929 4.939 6.99902C4.40857 6.99876 3.89996 6.78779 3.52508 6.41253C3.15019 6.03727 2.93973 5.52846 2.94 4.99802C2.94027 4.46759 3.15123 3.95899 3.52649 3.5841C3.90175 3.20922 4.41057 2.99876 4.941 2.99902C5.47143 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="white"/>
                        </svg>
                    </Link>
                    <Link href="#">
                        <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 11C1.5 6.522 1.5 4.282 2.891 2.891C4.282 1.5 6.521 1.5 11 1.5C15.478 1.5 17.718 1.5 19.109 2.891C20.5 4.282 20.5 6.521 20.5 11C20.5 15.478 20.5 17.718 19.109 19.109C17.718 20.5 15.479 20.5 11 20.5C6.522 20.5 4.282 20.5 2.891 19.109C1.5 17.718 1.5 15.479 1.5 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.508 5.5H16.498M15.5 11C15.5 12.1935 15.0259 13.3381 14.182 14.182C13.3381 15.0259 12.1935 15.5 11 15.5C9.80653 15.5 8.66193 15.0259 7.81802 14.182C6.97411 13.3381 6.5 12.1935 6.5 11C6.5 9.80653 6.97411 8.66193 7.81802 7.81802C8.66193 6.97411 9.80653 6.5 11 6.5C12.1935 6.5 13.3381 6.97411 14.182 7.81802C15.0259 8.66193 15.5 9.80653 15.5 11Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <p className='relative sm:left-[27px] text-[0.6rem] sm:text-[0.84rem] text-center mb-2'>Contact us for any details or kindly enter your details below</p>

                <div className='flex items-center relative m-auto'>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email or phone number"
                        className='sm:w-[350px] w-[230px] h-[44px] bg-[#D9D9D9] text-[#8E5858] text-sm px-3 py-1 mb-5 border-none focus:outline-none
                        focus:border-[#000] focus:ring-0 search-input placeholder-[#8E5858] placeholder-[2px]'
                    />
                    <button
                        type="submit"
                        className='absolute hover:bg-[#AD5B5B] bg-[#af0101] sm:px-6 px-3 bottom-[20px] sm:right-[-45px] right-[-20px] h-[44px] p-1 text-[#fff] w-[]
                         focus:outline-none focus:border-transparent focus:ring-0 submit-btn'
                    >
                        Send
                    </button>

                </div>

                <p className='mt-5 sm:text-sm text-[0.7rem]'> &copy; { date} — Timbu Online Store – All Rights Reserved</p>

            </div>
        </footer>
    )
}

export default Footer