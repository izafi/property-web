import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around items-center p-4 text-white">
      <div >
        <img className='h-10 w-auto' src="/logo.svg" alt="" />
      </div>
      <div>
        <ul className='flex flex-row justify-center items-center gap-8'>
          <a className='group' href="#"><li className='text-white text-[16px] font-normal hover:text-[#6a7282] duration-300 ease-in-out '>Home</li></a>
          <a className='group' href="#About"><li className='text-white text-[16px] font-normal hover:text-[#6a7282] duration-300 ease-in-out '>About</li></a>
          <a className='group' href="#Projects"><li className='text-white text-[16px] font-normal hover:text-[#6a7282] duration-300 ease-in-out '>Project</li></a>
          <a className='group' href="#Testimonials"><li className='text-white text-[16px] font-normal hover:text-[#6a7282] duration-300 ease-in-out '>Testimonial</li></a>
        </ul>
      </div>

      <div className='flex flex-row justify-center items-center gap-5'>
        <a href='#Contact' className='bg-white text-black px-8  py-2 rounded-[20px] cursor-pointer'>
          Contact us
        </a>
      </div>
    </div>
  )
}

export default Navbar
