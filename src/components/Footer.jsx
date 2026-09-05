import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-12 px-6 lg:px-32">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Real Estate</h2>
                    <p className="text-gray-400 mb-6">We craft spaces that fit your dreams. Whether you're buying, selling, or investing, we are here to guide you every step of the way.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#Home" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#About" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#Projects" className="text-gray-400 hover:text-white">Projects</a></li>
                        <li><a href="#Contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-400 mb-3">1234 Real Estate St, Dream City, DC 56789</p>
                    <p className="text-gray-400 mb-3">Phone: +1 (234) 567-890</p>
                    <p className="text-gray-400 mb-3">Email: contact@realestate.com</p>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-600 pt-6 text-center">
                <p className="text-gray-400 text-sm">© 2025 Real Estate. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
