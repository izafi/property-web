import React from 'react'
import { LiaStarSolid } from "react-icons/lia";

const Testimonials = () => {
    return (
        <div id='Testimonials' className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center gap-10 py-20">

            <div className="flex flex-col justify-center items-center gap-5">

                <h1 className="text-4xl font-bold">Customer Testimonials</h1>

                <p className="text-lg font-normal text-[#364153] text-center">Real Stories from Those Who Found Home with Us</p>
            </div>

            <div className='grid grid-cols-2 justify-center items-center gap-10'>

                {/* box 1 */}

                <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] p-[12px] group cursor-pointer'>
                    <div className='h-20 w-full flex flex-row justify-start items-center gap-5 mb-2 overflow-hidden'>
                        <img className='h-18 object-cover rounded-t-[12px]' src="/imgi_9_profile_img_1-zaNAVS_M.png" alt="project-image" />
                        <div className='flex flex-col items-start justify-center'>
                            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Donald Jackman</h1>
                            <h2 className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>Marketing Manager</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-[16px] text-start text-[#4a5565] font-normal loading-[24px]'>From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.</p>
                        <div className="flex items-center mt-3 text-[14px]">
                            <span className="text-yellow-400"><LiaStarSolid /></span>
                            <span className="text-yellow-400"><LiaStarSolid /></span>
                            <span className="text-yellow-400"><LiaStarSolid /></span>
                            <span className="text-yellow-400"><LiaStarSolid /></span>
                            <span className="text-yellow-400"><LiaStarSolid /></span>
                        </div>
                    </div>
                </div>


                {/* box 2 */}

                <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] p-[12px] group cursor-pointer'>
                    <div className='h-20 w-full flex flex-row justify-start items-center gap-5 mb-2 overflow-hidden'>
                        <img className='h-18 object-cover rounded-t-[12px]' src="/imgi_10_profile_img_2-dUNED7vt.png" alt="project-image" />
                        <div className='flex flex-col items-start justify-center'>
                            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Richard Nelson</h1>
                            <h2 className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>UI/UX Designer</h2>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <p className='text-[16px] text-start text-[#4a5565] font-normal loading-[24px]'>From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.</p>
                        <div className="flex items-center mt-3 text-[14px]">
                            <span className="text-yellow-400 "><LiaStarSolid /></span>
                            <span className="text-yellow-400 "><LiaStarSolid /></span>
                            <span className="text-yellow-400 "><LiaStarSolid /></span>
                            <span className="text-yellow-400 "><LiaStarSolid /></span>
                            <span className="text-gray-200 "><LiaStarSolid /></span>
                        </div>
                    </div>
                </div>

            </div>


            {/* box 3 */}


            <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] p-[12px] group cursor-pointer'>
                <div className='h-20 w-full flex flex-row justify-start items-center gap-5 mb-2 overflow-hidden'>
                    <img className='h-18 object-cover rounded-t-[12px]' src="/imgi_11_profile_img_3-JahKdPEp.png" alt="project-image" />
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>James Washington</h1>
                        <h2 className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>Co-Founder</h2>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-[16px] text-start text-[#4a5565] font-normal loading-[24px]'>From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.</p>
                    <div className="flex items-center mt-3 text-[14px]">
                        <span className="text-yellow-400 "><LiaStarSolid /></span>
                        <span className="text-yellow-400"><LiaStarSolid /></span>
                        <span className="text-yellow-400"><LiaStarSolid /></span>
                        <span className="text-yellow-400"><LiaStarSolid /></span>
                        <span className="text-yellow-400"><LiaStarSolid /></span>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Testimonials
