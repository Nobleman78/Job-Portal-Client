import React from 'react';

const Download = () => {
    return (
        <div className='mt-20 flex bg-gradient-to-b from-sky-50 to-sky-100 rounded-2xl px-10 '>          
            <div className='w-1/2 flex flex-col gap-4 py-10'>
                <h2 className='text-3xl font-semibold text-gray-800 '>Stand out among recruiters with a video profile</h2>
                <p>Available for both Android and iOS apps</p>
                <input className='w-80 px-3 py-2 border border-gray-200 rounded-full outline-none shadow-none bg-white'  type="number" placeholder='Enter Your Mobile Number' />
                <div className='flex gap-4 '>
                    <img className='w-35 h-10' src="https://static.naukimg.com/s/0/0/i/download-app-link/GplayOneThemeHd.png" alt="" />
                    <img className='w-35 h-10' src="https://static.naukimg.com/s/0/0/i/download-app-link/AppstoreOneThemeHd.png" alt="" />
                </div>
            </div>
            <div className='w-1/2'>
                <img className='' src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroupOneTheme.png" alt="" />     
            </div>

        </div>
    );
};

export default Download;