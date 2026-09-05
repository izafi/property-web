import React from 'react'

const Contact = () => {
    return (
        <div id='Contact' className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center gap-10 py-20">

            <div className="flex flex-col justify-center items-center gap-5">

                <h1 className="text-4xl font-bold">Contact With Us</h1>

                <p className="text-lg font-normal text-[#364153] text-center">Ready to Make a Move? Let’s Build Your Future Together</p>
            </div>

            <section className="w-[70%] min-h-screen flex justify-center items-center py-16 px-6">
                <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-10">
                    <h2 className="text-[24px] font-semibold text-[#1e2939] mb-10">
                        Get in Touch
                    </h2>

                    <form className="flex flex-col gap-7">

                        {/* Full Name */}
                        <div>
                            <label className="block text-[16px] font-normal text-[#4a5565] mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full h-14 border border-[#CBD5E1] rounded-lg px-4 text-[16px] outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[16px] font-normal text-[#4a5565] mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-14 border border-[#CBD5E1] rounded-lg px-4 text-[16px] outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-[16px] font-normal text-[#4a5565] mb-2">
                                Message
                            </label>

                            <textarea
                                rows="6"
                                placeholder="Enter your message"
                                className="w-full border border-[#CBD5E1] rounded-lg p-4 text-[17px] r6size-none outline-none"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full h-12 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg text-white text-[16px] font-normal transition duration-300 cursor-pointer"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </section>

            <div className="flex flex-row justify-around items-center mt-10 w-full px-50 gap-10 ">

                <div className='flex flex-col justify-start items-start text-center gap-5 shadow-md  rounded-b-[12px] w-[50%] h-100 p-8'>
                    <h1 className='text-[24px] text-[#1e2939] font-semibold text-start'>Our Contact Details</h1>
                    <p className='text-[16px] text-[#364153] font-normal text-start'>Have any questions? Reach out to us directly, and we’ll get back to you as soon as possible!</p>
                    <span className='flex flex-col items-start gap-1'>
                        <h3 className='text-[16px] font-semibold text-[#1e2939] '>Address:</h3>
                        <p className='text-[16px] font-normal text-[#1e2939] '>1234 Real Estate St, Dream City, DC 56789</p>
                    </span>

                    <span className='flex flex-col items-start gap-1'>
                        <h3 className='text-[16px] font-semibold text-[#1e2939] '>Phone:</h3>
                        <p className='text-[16px] font-normal text-[#1e2939] '>+1 (234) 567-890</p>
                    </span>

                    <span className='flex flex-col items-start gap-1'>
                        <h3 className='text-[16px] font-semibold text-[#1e2939] '>Email:</h3>
                        <p className='text-[16px] font-normal text-[#1e2939] '>contact@realestate.com</p>
                    </span>


                </div>

                <div className='flex flex-col justify-start items-start text-center gap-5 shadow-md  rounded-b-[12px] w-[50%] h-100 p-8'>
                    <h1 className='text-[24px] text-[#1e2939] font-semibold text-start'>Our Contact Details</h1>
                    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318123.4569272311!2d-74.30916497101786!3d40.69719335376391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2s!4v1784708141463!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>


                </div>



            </div>

        </div>
    )
}

export default Contact
