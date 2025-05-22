import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from 'react-slick';
const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 '>
        <GrFormNext className="text-xl text-gray-600" />
    </button>
)
const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Previous"
    >
        <GrFormPrevious className="text-xl text-gray-600" />
    </button>
);

const cards = [
    {
        logo: 'https://img.naukimg.com/logo_images/groups/v2/3835862.gif',
        title: 'Jio',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'True 5g Provider'
    },
    {
        logo: 'https://img.naukimg.com/logo_images/groups/v2/3835862.gif',
        title: 'Jio',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'True 5g Provider'
    },
    {
        logo: 'https://img.naukimg.com/logo_images/groups/v2/3835862.gif',
        title: 'Jio',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'True 5g Provider'
    },
    {
        logo: 'https://img.naukimg.com/logo_images/groups/v2/3835862.gif',
        title: 'Jio',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'True 5g Provider'
    },
    {
        logo: 'https://img.naukimg.com/logo_images/groups/v2/3835862.gif',
        title: 'Jio',
        ratings: 'https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg',
        numberOfRatings: 4.0,
        reviewText: '600+ Reviews',
        descp: 'True 5g Provider'
    },

]

const FeatureCompany = () => {

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
        <div>
            <h2 className='text-4xl text-center text-gray-800 font-semibold'>Features Company Actively Hireing</h2>
            {/* <div className='flex flex-col w-50 border items-center '>
                <img src="https://img.naukimg.com/logo_images/groups/v2/445608.gif" alt="" />
                <div>
                    <h2 className='text-center'>Apple</h2>
                    <div className='flex gap-3'>
                        <img src="https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg" alt="" />
                        <p>4.3</p>
                        <span className='w-0 h-2 border border-gray-50 '></span>
                        <p>604 reviews</p>
                    </div>
                </div>

            </div> */}
            <Slider {...sliderSettings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-2"> {/* This adds space between slides */}
                        <div className="border border-gray-200 px-4 py-4 rounded-lg bg-white hover:shadow-2xl overflow-hidden transition-shadow h-full ">
                            <img src={card.logo} alt="" />
                            <h2 className='text-lg font-semibold mb-2'>{card.title}</h2>

                            <div className='flex'>
                                <img src={card.ratings} alt="" />
                                <p>{card.numberOfRatings}</p>
                                <p>{card.reviewText}</p>
                            </div>
                            <p>{card.descp}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeatureCompany;