
import { useContext } from 'react';
import JobContext from '../../Context/Jobcontext';
const DiscoverJobs = () => {
  const {discoverJobHandler} = useContext(JobContext)
   
    return (
        <div className='relative  bg-gradient-to-b from-rose-50 to-rose-100 mt-20 rounded-2xl'>
            <div className='px-20 py-10'>
                <img className='h-50' src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png" alt="" />
                <h2 className='text-2xl font-semibold '>Discover Jobs across popular roles</h2>
                <p>Select a role and we'll show you relevant jobs for it!</p>

            </div>
            <div className='absolute top-[-25px] right-10 '>
                <div className='grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-200 rounded gap-5 py-25 px-20'>
                    <div onClick={()=>{discoverJobHandler('Software Development'),scrollTo(0,0)}} className="relative border px-4 py-2 w-60 h-20 rounded-xl transition-all  hover:scale-105 hover:z-10 hover:shadow-lg bg-white cursor-pointer group">
                        <h2 className="text-xl overflow-hidden whitespace-nowrap text-ellipsis group-hover:overflow-visible">
                            Software Development
                        </h2>
                        <p>3.1k+ jobs</p>
                    </div>

                   <div  onClick={()=>{discoverJobHandler('Software Development'),scrollTo(0,0)}} className="relative border px-4 py-2 w-60 h-20 rounded-xl transition-all  hover:scale-105 hover:z-10 hover:shadow-lg bg-white cursor-pointer group">
                        <h2 className='text-xl'>Full Stack Developer</h2>
                        <p>2.9k Jobs</p>
                    </div>
                   <div  onClick={()=>{discoverJobHandler('DevOps'),scrollTo(0,0)}} className="relative border px-4 py-2 w-60 h-20 rounded-xl transition-all  hover:scale-105 hover:z-10 hover:shadow-lg bg-white cursor-pointer group">
                        <h2 className='text-xl'>DevOps Engineer</h2>
                        <p>2.9k Jobs</p>
                    </div>
                    <div  onClick={()=>{discoverJobHandler('Frontend'),scrollTo(0,0)}} className="relative border px-4 py-2 w-60 h-20 rounded-xl transition-all hover:scale-105 hover:z-10 hover:shadow-lg bg-white cursor-pointer group">
                        <h2 className='text-xl'>Front End Developer</h2>
                        <p>2.9k Jobs</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DiscoverJobs;