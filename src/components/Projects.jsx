import React from 'react'

const Project = () => {
  return (
    <div id='Projects' className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center gap-5 py-20">

      <div className="flex flex-col justify-center items-center gap-5">

        <h1 className="text-4xl font-bold">Projects Completed</h1>

        <p className="text-lg font-normal text-[#364153] text-center">Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
      </div>

      <div className='grid grid-cols-3 grid-rows-2 gap-5'>

        {/* box 1 */}

        <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] pb-[6px] group cursor-pointer'>
          <div className='h-70 w-full o bg-[#F5F5F5] flex justify-center items-center mb-2 overflow-hidden'>
            <img className='h-70 w-full bject-cover rounded-t-[12px] transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[12px]' src="/imgi_3_project_img_1-3elwKRsQ.jpg" alt="project-image" />
          </div>
          <div className='p-[16px] flex flex-col justify-center items-start'>
            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Skyline Haven</h1>
            <p className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>California</p>
            <span className='mt-2'>
              <h1 className='text-[16px] text-[#364153] font-semibold loading-[24px]'> $2,50,000</h1>
            </span>
          </div>
        </div>


        {/* box 2 */}

        <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] pb-[6px] group cursor-pointer'>
          <div className='h-70 w-full bg-[#F5F5F5] flex justify-center items-center mb-2 overflow-hidden'>
            <img className='h-70 w-full object-cover rounded-t-[12px] transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[12px]' src="/imgi_4_project_img_2-DnQUAazb.jpg" alt="project-image" />
          </div>
          <div className='p-[16px] flex flex-col justify-center items-left'>
            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Vista Verde</h1>
            <p className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>San Francisco</p>
            <span className='mt-2'>
              <h1 className='text-[16px] text-[#364153] font-semibold loading-[24px]'> $2,50,000</h1>
            </span>
          </div>
        </div>

        {/* box 3 */}


        <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] pb-[6px] group cursor-pointer'>
          <div className='h-70 w-full bg-[#F5F5F5] flex justify-center items-center mb-2 overflow-hidden'>
            <img className='h-70 w-full object-cover rounded-t-[12px] transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[12px]' src="/imgi_5_project_img_3-3sNYAKXT.jpg" alt="project-image" />
          </div>
          <div className='p-[16px] flex flex-col justify-center items-left'>
            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Serenity Suites</h1>
            <p className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>Chicago</p>
            <span className='mt-2'>
              <h1 className='text-[16px] text-[#364153] font-semibold loading-[24px]'> $2,50,000</h1>
            </span>
          </div>
        </div>

        {/* box 4 */}


        <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] pb-[6px] group cursor-pointer'>
          <div className='h-70 w-full bg-[#F5F5F5] flex justify-center items-center mb-2 overflow-hidden'>
            <img className='h-70 w-full object-cover rounded-t-[12px] transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[12px]' src="/imgi_6_project_img_4-C5CE8mdZ.jpg" alt="project-image" />
          </div>
          <div className='p-[16px] flex flex-col justify-center items-left'>
            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Central Square</h1>
            <p className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>Los Angeles

            </p>
            <span className='mt-2'>
              <h1 className='text-[16px] text-[#364153] font-semibold loading-[24px]'> $2,50,000</h1>
            </span>
          </div>
        </div>

        {/* box 5 */}


        <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] pb-[6px] group cursor-pointer'>
          <div className='h-70 w-full  bg-[#F5F5F5] flex justify-center items-center mb-2 overflow-hidden'>
            <img className='h-70 w-full object-cover rounded-t-[12px] transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[12px]' src="/imgi_7_project_img_5-DXUdfqvc.jpg" alt="project-image" />
          </div>
          <div className='p-[16px] flex flex-col justify-center items-left '>
            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Vista Verde</h1>
            <p className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>San Francisco</p>
            <span className='mt-2'>
              <h1 className='text-[16px] text-[#364153] font-semibold loading-[24px]'> $2,50,000</h1>
            </span>
          </div>
        </div>

        {/* box 6 */}


        <div className='w-85 flex flex-col justify-center items-left shadow-md rounded-[12px] pb-[6px] group cursor-pointer'>
          <div className='h-70 w-full  bg-[#F5F5F5] flex justify-center items-center mb-2 overflow-hidden'>
            <img className='h-70 w-full object-cover rounded-t-[12px] transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[12px]' src="/imgi_8_project_img_6-PJDGxfJF.jpg" alt="project-image" />
          </div>
          <div className='p-[16px] flex flex-col justify-center items-left '>
            <h1 className='text-[20px] text-[#1e2939] font-semibold loading-[28px]'>Serenity Suites</h1>
            <p className='text-[16px] text-[#4a5565] font-normal loading-[24px]'>Chicago</p>
            <span className='mt-2'>
              <h1 className='text-[16px] text-[#364153] font-semibold loading-[24px]'> $2,50,000</h1>
            </span>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Project
