import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useContext } from 'react';
import TopCompanyJobsContext from '../../Context/TopCompanyJobs';
import { useNavigate } from 'react-router-dom';
import JobContext from '../../Context/Jobcontext';

const NextArrow = ({ onClick }) => (
    <button onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
        <GrFormNext className="text-xl text-gray-600" />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
        <GrFormPrevious className="text-xl text-gray-600" />
    </button>
);

const TopCompany = () => {
    const { getKeyword } = useContext(TopCompanyJobsContext)
    const { jobs } = useContext(JobContext)
    const navigate = useNavigate()

    const groupedByCategory = jobs.reduce((acc, job) => {
        if (!acc[job.category]) {
            acc[job.category] = []
        }
        acc[job.category].push(job)
        return acc
    }, {})
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


    return (
        <div className='bg-gradient-to-b from-gray-50 to-rose-50'>
            <div className="max-w-7xl mx-auto p-6 relative mt-20">
                <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Top companies hiring now</h1>
                <div className="mb-10 relative">
                    <Slider {...sliderSettings}>
                        {Object.entries(groupedByCategory).map(([category, jobList], index) => (
                            <div key={index} className="px-2">
                                <div onClick={() => {
                                    getKeyword(category);
                                    navigate(`/top-companies-job/${jobList[0].title}`);
                                    scrollTo(0, 0);
                                }}
                                    className="cursor-pointer border border-gray-200 px-4 py-4 rounded-lg bg-white overflow-hidden transition-shadow h-full hover:scale-105">
                                    <h2 className='text-lg font-semibold mb-2 '>{category}</h2>
                                    <p className='text-gray-600 mb-3'>{jobList[0].text}</p>
                                    <div className='flex items-center gap-3 flex-wrap'>
                                        {jobList.map((job, logoIndex) => (
                                            <img
                                                key={logoIndex}
                                                className='w-8 h-8 object-contain'
                                                src={job.company_logo}
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
        </div>
    )
}
export default TopCompany
