import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 '>
        <GrFormNext className="text-xl text-gray-600" />
    </button>
)
const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
        <GrFormPrevious className="text-xl text-gray-600" />
    </button>
);

const cards = [
    {
        logo: 'https://www.robi.com.bd/_next/static/media/robi-logo-2.d08ae93d.svg',
        title: 'Robi',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'True 5g Provider'
    },
    {
        logo: 'https://media.licdn.com/dms/image/v2/C510BAQGhLfXPZtoQQQ/company-logo_200_200/company-logo_200_200/0/1631303719187?e=2147483647&v=beta&t=mGtLv24hFqc13UCFHXJUxT-Dm0mekQtxBqpGbiUvAj0',
        title: 'Basundhara',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 5.0,
        reviewText: '400+ Reviews',
        descp: 'Real Estate Company'
    },
    {
        logo: 'https://jamunagroup.com.bd/images/logo/1662050814-company-logo.png',
        title: 'Jamuna',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'Real Estate Company'
    },
    {
        logo: 'https://www.rongdhanugroup.com/static/media/BrandLogo.24f5619616b73e7505d92dadd08bdd17.svg',
        title: 'Rongdhanu',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'Largest Conglomerates'
    },
    {
        logo: 'https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg',
        title: '10 Minutes School',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '1000+ Reviews',
        descp: 'Largest Educational Platform'
    },

]

const FeatureCompany = () => {
    const navigate = useNavigate();

    const handleCardClick = (title) => {
        navigate(`/featurescompanydetails/${title}`); // Navigate to company details page
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className='mt-10 px-3'>
            <h2 className='text-4xl text-center text-gray-800 font-semibold'>Features Company Actively Hireing</h2>
            <Slider {...sliderSettings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-2 mt-10 " >
                        <div onClick={() => { handleCardClick(card.title), scrollTo(0, 0) }} className="cursor-pointer border border-gray-200 px-4 py-4 rounded-lg bg-white hover:shadow-2xl overflow-hidden transition-shadow h-full flex flex-col items-center justify-center gap-4">
                            <img className='w-30 h-10' src={card.logo} alt="" />
                            <div className='flex flex-col items-center justify-center border px-4 py-2 rounded-xl border-rose-100 bg-rose-100'>
                                <h2 className='text-lg font-semibold mb-2'>{card.title}</h2>
                                <div className='flex gap-2 items-center'>
                                    <img src={card.ratings} alt="" />
                                    <p>{card.numberOfRatings}</p>
                                    <span className='w-0 h-4 border border-gray-500'></span>
                                    <p>{card.reviewText}</p>
                                </div>
                            </div>
                            <p>{card.descp}</p>
                            <button className='bg-blue-500 px-4 py-2 rounded-full text-white'>View Jobs</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeatureCompany;