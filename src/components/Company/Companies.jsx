import React, { useContext } from 'react';
import JobContext from '../../Context/Jobcontext';

const Companies = () => {
    const { company } = useContext(JobContext);

    return (
        <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen py-12 px-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">All Companies</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {company.map((com, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-100"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{com.name}</h2>

                        <div className="space-y-3 text-gray-700">
                            <div className="flex items-center gap-3">
                                {/* Reviews Icon */}
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Reviews: {com.reviews}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Star Icon */}
                                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.055 9.384c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.957z" />
                                </svg>
                                <span>Rating: {com.rating}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Building Icon */}
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 8h6m-6 4h6m-6 4h6m-9 4V5a1 1 0 011-1h10a1 1 0 011 1v16" />
                                </svg>
                                <span>Type: {com.type}</span>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Hiring Status Icon */}
                                {com.hiringStatus === 'Hiring' ? (
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                                <span>Hiring Status: {com.hiringStatus}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Companies;
