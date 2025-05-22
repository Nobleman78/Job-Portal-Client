import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import HealthcareOne from '../../assets/Company/Healthcare_one.jpg';
import HealthcareTwo from '../../assets/Company/Healthcare_two.png';
import HealthcareThree from '../../assets/Company/Healthcare_three.jpg';
import InternetOne from '../../assets/Company/Internet_one.png';
import InternetTwo from '../../assets/Company/Internet_two.png';
import InternetThree from '../../assets/Company/Internet_three.jpg';
import BankOne from '../../assets/Company/Bank_one.jpg'
import BankTwo from '../../assets/Company/Bnak_two.png'
import BankThree from '../../assets/Company/Bank_three.avif'
import FinanceOne from '../../assets/Company/FinanceOne.jpg'
import FinanceTwo from '../../assets/Company/FinanceTwo.jpg'
import FinanceThree from '../../assets/Company/FinanceThree.png'
import EducationOne from '../../assets/Company/EducationOne.png'
import EducationTwo from '../../assets/Company/EducationTwo.jpg'
import EducationThree from '../../assets/Company/EducationThree.png'


const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Next"
    >
        <GrFormNext className="text-xl text-gray-600" />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Previous"
    >
        <GrFormPrevious className="text-xl text-gray-600" />
    </button>
);

const Company = () => {
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

    // Data array for cleaner code
    const cards = [
        {
            title: 'Healthcare',
            text: '100 Actively Hiring',
            images: [HealthcareOne, HealthcareTwo, HealthcareThree]
        },
        {
            title: 'Internet',
            text: '100 Actively Hiring',
            images: [InternetOne, InternetTwo, InternetThree]
        },
        {
            title: 'Bank',
            text: '100 Actively Hiring',
            images: [BankOne, BankTwo, BankThree]
        },
        {
            title: 'Finance',
            text: '100 Actively Hiring',
            images: [FinanceOne, FinanceTwo, FinanceThree]
        },
        {
            title: 'Education',
            text: '100 Actively Hiring',
            images: [EducationOne, EducationTwo, EducationThree]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 relative mt-20">
            <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Top companies hiring now</h1>

            <div className="mb-10 relative">
                <Slider {...sliderSettings}>
                    {cards.map((card, index) => (
                        <div key={index} className="px-2"> {/* This adds space between slides */}
                            <div className="border border-gray-200 px-4 py-4 rounded-lg bg-white hover:shadow-2xl overflow-hidden transition-shadow h-full ">
                                <h2 className='text-lg font-semibold mb-2'>{card.title}</h2>
                                <p className='text-gray-600 mb-3'>{card.text}</p>
                                <div className='flex items-center gap-3'>
                                    {card.images.map((img, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            className='w-12 h-8 object-contain'
                                            src={img}
                                            alt=''
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default Company
