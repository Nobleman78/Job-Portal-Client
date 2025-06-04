import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FeatureCompanyDetails = () => {
    const { title } = useParams();
    const [company, setCompany] = useState([]);
    const [activeButton, setActiveButton] = useState(0)

    const cards = [
        {
            logo: 'https://www.robi.com.bd/_next/static/media/robi-logo-2.d08ae93d.svg',
            image: 'https://www.tbsnews.net/sites/default/files/styles/social_share/public/images/2024/02/15/article_bannerr_0.jpg',
            title: 'Robi',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            des: 'Bangladesh largest Telecom Company',
            subcompany: [
                'Retail', 'RetailFMCGGems', ' JewelleryTextile', ' ApparelBeauty', 'Personal Care'

            ],
            reviewText: '600+ Reviews',
            descp: 'True 5g Provider',

        },
        {
            logo: 'https://media.licdn.com/dms/image/v2/C510BAQGhLfXPZtoQQQ/company-logo_200_200/company-logo_200_200/0/1631303719187?e=2147483647&v=beta&t=mGtLv24hFqc13UCFHXJUxT-Dm0mekQtxBqpGbiUvAj0',
            title: 'Basundhara',
            image: 'https://c8.alamy.com/comp/E2E4BW/bangladesh-dhaka-dacca-bashundhara-city-is-one-of-the-biggest-shopping-E2E4BW.jpg',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 5.0,
            reviewText: '400+ Reviews',
            subcompany: [
                'Retail', 'RetailFMCGGems', ' JewelleryTextile', ' ApparelBeauty', 'Personal Care'

            ],
            descp: 'Real Estate Company',
            overview: [{
                About: 'The Bashundhara Group is one of the largest and most diversified conglomerates in Bangladesh, with a strong presence in multiple industries, including real estate, manufacturing, trading, media, and more. Established in 1987 by Ahmed Akbar Sobhan, the group has grown into a major economic force in the country.',
                Business: [
                    'Real Estate and Construction', 'Manufacturing and Industrial', 'Media and Communication', 'Hospitality and Lifestyle', 'Healthcare abd Pharmaseuticals'
                ],
                image: 'https://today.thefinancialexpress.com.bd/uploads/1582472002.jpg'

            }
            ]
        },
        {
            logo: 'https://jamunagroup.com.bd/images/logo/1662050814-company-logo.png',
            title: 'Jamuna',
            image: 'https://jamunagroup.com.bd/images/videos/1669727065-9An2vn98aU-company-slider-video.jpg',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            subcompany: [
                'Retail', 'RetailFMCGGems', ' JewelleryTextile', ' ApparelBeauty', 'Personal Care'

            ],
            reviewText: '600+ Reviews',
            descp: 'True 5g Provider'
        },
        {
            logo: 'https://www.rongdhanugroup.com/static/media/BrandLogo.24f5619616b73e7505d92dadd08bdd17.svg',
            title: 'Rangdhanu',
            image: 'https://media.licdn.com/dms/image/v2/D561BAQFZTAOg6wXDVg/company-background_10000/company-background_10000/0/1660122935783/rongdhanu_group_cover?e=2147483647&v=beta&t=b0a634mPP3o6rYCWGUf9pBKpAAgjpFZglu0Okmdb__o',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            reviewText: '600+ Reviews',
            subcompany: [
                'Retail', 'RetailFMCGGems', ' JewelleryTextile', ' ApparelBeauty', 'Personal Care'

            ],
            descp: 'Largest Conglomerates'
        },
        {
            logo: 'https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg',
            title: '10 Minutes School',
            image: 'https://tfe-bd.sgp1.cdn.digitaloceanspaces.com/uploads/1618824591.jpg',
            ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
            numberOfRatings: 4.0,
            subcompany: [
                'Retail', 'RetailFMCGGems', ' JewelleryTextile', ' ApparelBeauty', 'Personal Care'

            ],
            reviewText: '1000+ Reviews',
            descp: 'Largest Educational Platform'
        },

    ]
    const button = [
        'OverView', 'Why Join Us', 'Jobs', 'Diversity'
    ]
    useEffect(() => {
        const filteredCards = cards.filter(card =>
            card.title.toLowerCase().includes(title.toLowerCase())
        );
        setCompany(filteredCards);
    }, [title]);

    return (
        <div>
            {company.map((comp, index) => (
                <div key={index}>
                    <img className='w-full h-90' src={comp.image} alt="" />
                    <div className='px-10 flex mt-10 gap-4' >
                        <img className='w-50 h-40  border border-gray-400 rounded-xl' src={comp.logo} alt={comp.title} />
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2 items-center'>
                                <h2 className='font-bold text-3xl'>{comp.title}</h2>
                                <img className='w-4' src={comp.ratings} alt="" />
                                <p className='text-lg text-gray-600'>{comp.numberOfRatings}</p>
                                <p className='text-gray-600 text-lg'>({comp.reviewText})</p>
                            </div>
                            <div>
                                <p className='text-gray-600'>{comp.des}</p>
                            </div>
                            <div className='flex gap-2 '>
                                {comp.subcompany.map((company, index) => (
                                    <div key={index} className=' border px-2 py-1 rounded-2xl' >
                                        {company}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex gap-2 px-10 '>
                {button.map((btn, index) => {
                    return (
                        <button onClick={() => setActiveButton(index)} key={index} className={`cursor-pointer mt-5 px-5 py-1 ${activeButton === index ? 'border-b-3' :
                            ''
                            }`}>
                            {btn}
                        </button>)
                })}
            </div>
            <div className='px-10 flex gap-3'>
                <div className='w-2/3'>
                    {company.map((comp, index) => (
                        <div key={index}>
                            {comp.overview.map(p => (
                                <div className={`${activeButton === index ? 'block' : 'hidden'} shadow-2xl px-5 py-5  mt-3 rounded-2xl`}>
                                    <h2>About Us</h2>
                                    <div className='flex gap-5 mt-5'>
                                        <img className='w-100 h-50 rounded-2xl' src={p.image} alt="" />
                                        <h2 >{p.About}</h2>
                                    </div>
                                </div>
                            ))}

                        </div>
                    ))}
                </div>
                <div className='w-1/3 flex flex-col'>
                    <div className='flex border border-gray-300 rounded-2xl mt-3 py-5 px-5 h-50'>
                        <div className='w-2/3'>
                            <div className='flex flex-col gap-2 '>
                                <h2 className='text-md'>Love Jobs By Bashundhara?</h2>
                                <p className='text-gray-600 text-sm'>Register with us and let company recruiters find you</p>
                            </div>
                            <button className='bg-red-400 mt-10 text-white px-4 py-2 rounded-full'>Register</button>
                        </div>
                        <div className='w-1/2'>
                            <img className='w-40 ' src="https://static.naukimg.com/s/7/109/assets/images/cp-register.be877ebb.png" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 border border-gray-300 rounded-2xl mt-3 py-5 px-5 '>

                        <h2 className='text-lg font-semibold'>Key Highlights At Basundhara</h2>
                        <div className='flex  gap-5'>
                            <img className='w-13 h-13' src="https://static.naukimg.com/s/7/109/assets/images/img_Skill-ot.00a62188.png" alt="" />
                            <div className=''>
                                <h2 className='font-semibold'>Skill Development</h2>
                                <p className='text-gray-600'>Highly Rated</p>
                            </div>
                        </div>
                        <div className='flex  gap-5'>
                            <img className='w-13 h-13' src="https://static.naukimg.com/s/7/109/assets/images/img_Job-Security-ot.4ec3d090.png" alt="" />
                            <div className=''>
                                <h2 className='font-semibold'>Job Security</h2>
                                <p className='text-gray-600'>Highly Rated</p>
                            </div>
                        </div>
                        <div className='flex  gap-5'>
                            <img className='w-13 h-13' src="https://static.naukimg.com/s/7/109/assets/images/img_Salary-ot.7d8c7157.png" alt="" />
                            <div className=''>
                                <h2 className='font-semibold'>Salary and Benefits</h2>
                                <p className='text-gray-600'>Highly Rated</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FeatureCompanyDetails;