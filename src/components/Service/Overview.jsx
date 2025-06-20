import React from 'react';

const Overview = () => {
    return (
        <div className='m-10'>
            <div className='flex items-center justify-center gap-10'>
                <div className='flex items-center gap-2'>
                    <img className='w-20' src="https://cdn-icons-png.freepik.com/256/17929/17929237.png?ga=GA1.1.838864398.1749706023&semt=ais_incoming" alt="" />
                    <div>
                        <h2 className='text-2xl'>Vacancies</h2>
                        <p className='text-4xl font-semibold text-blue-400'>1000+</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-20' src="https://cdn-icons-png.freepik.com/256/16939/16939506.png?ga=GA1.1.838864398.1749706023&semt=ais_incoming" alt="" />
                    <div>
                        <h2 className='text-2xl'>Companies</h2>
                        <p className='text-4xl font-semibold text-blue-400'>700+</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-20' src="https://cdn-icons-png.freepik.com/256/18461/18461974.png?ga=GA1.1.838864398.1749706023&semt=ais_incoming" alt="" />
                    <div>
                        <h2 className='text-2xl'>Live Jobs</h2>
                        <p className='text-4xl font-semibold text-blue-400'>500+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;