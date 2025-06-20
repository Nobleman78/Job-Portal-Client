import React, { useContext, useState } from 'react';
import JobContext from '../../Context/Jobcontext';

const SponsorCompany = () => {
    const services = ['All', 'IT Services', 'Technology', 'Healthcare & Life Scenerios', 'Manufacturing '];
    const {spornsorCompany} = useContext(JobContext)
   
    const [activeService, setActiveService] = useState('All');
    const filteredCompanies =
        activeService === 'All' ? spornsorCompany
            : spornsorCompany.filter(company => {
                const activeServiceLower = activeService.toLowerCase();
                const categoryWords = company.productCategory.toLowerCase().split(/\s+/);
                
                return activeServiceLower.split(/\s+/).some(word => categoryWords.includes(word)

                );
            })
    // company.productCategory.toLowerCase().split(' ').includes(activeService));

    return (
        <div className='bg-gradient-to-b from-gray-50 to-red-50'>
            <div className='mt-25 px-3 py-5'>
                <h2 className='text-4xl font-semibold text-gray-800 text-center'>Sponsored companies</h2>
                {/* Service Filter Button Start */}
                <div className='flex items-center justify-center gap-5 mt-5 cursor-pointer'>
                    {services.map((service, id) => (
                        <div key={id} className={`border border-gray-300 px-3 py-1 rounded-full transition-colors ${activeService === service
                            ? 'bg-gray-200 font-medium'
                            : 'bg-white hover:bg-gray-100'
                            }`} onClick={() => setActiveService(service)}>
                            {service}
                        </div>
                    ))}
                </div>
                {/* Service Filter Button End */}
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4'>
                    {filteredCompanies.map((company, index) => {
                        return (
                            <div key={index} className='border bg-white border-gray-300 cursor-pointer px-5 py-3 flex flex-col gap-3 items-center justify-center rounded-3xl'>
                                <img className='w-20 h-20' src={company.image} alt="" />
                                <h2>{company.name}</h2>
                                <div className='flex items-center gap-2 text-gray-600'>
                                    <img src={company.star} alt="" />
                                    <p>{company.numberOfReviewsStar}</p>
                                    <span className='w-0 h-3 border border-gray-700'></span>
                                    <p>{company.numberOfReviews} Reviews</p></div>
                                <div className='flex items-center text-gray-700  gap-2 text-xs cursor-pointer '>
                                    <h1 className='border px-2 py-1 rounded-full border-gray-300'>{company.productCategory}</h1>
                                    <h1 className='border px-2 py-1 rounded-full border-gray-300'>{company.serviceProvide}</h1>
                                </div>
                            </div>
                        )


                    })}
                </div>
            </div>
        </div>
    );
};

export default SponsorCompany;