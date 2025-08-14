import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
import { IoChevronDown } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import Navlogo from '@/assets/ResoNex30.png';
import Sales from '@/assets/Icons/Sales.svg';
import Demo from '@/assets/Icons/Demo.svg';
import Team from '@/assets/Icons/Team.svg';
import Partner from '@/assets/Icons/Partner.svg';
import ScrollButtom from '@/app/components/ScrollButton';

const Footer = () => {
    return (
        <div>
            <ScrollButtom/>
            <section className="container overflow-x-hidden mx-auto px-4 py-12 sm:px-8 ">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 xl:gap-20 w-full sm:max-w-7xl sm:mx-auto">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 min-w-0">
                    <div className="mb-8">
                        <Link href={"/"}><Image src={Navlogo} alt="ResoNex Logo" width={160} height={40} /></Link>
                    </div>
                    <h3 className="text-lg lg:text-xl semibold-text mb-2">
                        Let’s Drive Transformation Together
                    </h3>
                    <p className="text-base mb-6">
                        Ready to unlock powerful business insights or explore how advanced
                        automation, cloud, or data solutions can accelerate your growth?
                        Our team is here to provide answers, expert guidance, and the next
                        steps to future-proof your enterprise.
                    </p>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 my-8 lg:my-10 w-full">
                        <button className="flex items-center justify-center gap-1 sm:gap-2 border border-[#D4D4D4] rounded-lg lg:rounded-xl px-0 sm:px-5 py-1.5 text-sm medium-text hover:bg-gray-100">
                            <span className="px-1"><Image src={Sales} alt="Talk to Sales" /></span>Talk to Sales
                        </button>
                        <button className="flex items-center justify-center gap-1 sm:gap-2 border border-[#D4D4D4] rounded-lg lg:rounded-xl px-0 sm:px-5 py-1.5 text-sm medium-text hover:bg-gray-100">
                            <span className="px-1"><Image src={Demo} alt="Request Demo" /></span>Request Demo
                        </button>
                        <button className="flex items-center justify-center gap-1 sm:gap-2 border border-[#D4D4D4] rounded-lg lg:rounded-xl px-0 sm:px-5 py-1.5 text-sm medium-text hover:bg-gray-100">
                            <span className="px-1"><Image src={Team} alt="Join Our Team" /></span>Join Our Team
                        </button>
                        <button className="flex items-center justify-center gap-1 sm:gap-2 border border-[#D4D4D4] rounded-lg lg:rounded-xl px-0 sm:px-5 py-1.5 text-sm medium-text hover:bg-gray-100">
                            <span className="px-1"><Image src={Partner} alt="Partner with Us" /></span>Partner with Us
                        </button>
                    </div>

                    {/* Contact Info */}
                    <h4 className="medium-text text-base lg:text-lg mb-4 xl:mb-5">
                        Contact Us
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 mb-2 xl:mb-3">
                        <div className="flex items-center gap-3">
                            <HiOutlineEnvelope className="text-[var(--foreground)] w-5 h-5 sm:w-6 sm:h-6" />
                            <a href="mailto:business@resonextech.com">business@resonextech.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <PiPhoneCall className="text-[var(--foreground)] w-5 h-5 sm:w-6 sm:h-6" />
                            <a href="tel:+971502149342">+971502149342</a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                        <HiOutlineLocationMarker className="text-[var(--foreground)] w-12 h-12 sm:w-6 sm:h-6 sm:mt-1" />
                        <span className="xl:w-8/12">
                        ResoNex Technologies L.L.C-FZ, Meydan Grandstand, 6th floor,
                        Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                        </span>
                    </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="border border-[#EDEDED] sm:max-w-4xl bg-white rounded-2xl p-6 shadow-sm">
                            <h4 className="mb-4 xl:mb-6 semibold-text text-base lg:text-xl w-fit tracking-tight bg-gradient-to-br from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                            Feel free to get in touch
                            </h4>
                            <form className="space-y-4">
                                <input
                                    required
                                    type="text"
                                    maxLength={100}
                                    placeholder="Full Name"
                                    className="w-full  border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                />
                                <div className="flex gap-2">
                                    <div className="relative">
                                    <select className="appearance-none border border-[#D4D4D4] bg-[#F8F8F8] rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]">
                                    <option>+971</option>
                                    <option>+91</option>
                                    <option>+1</option>
                                    </select>
                                    {/* Custom Chevron */}
                                    <IoChevronDown
                                    className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none hover:text-[var(--buttoncolor)]"
                                    size={18}
                                    />
                                    </div>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="Contact Number"
                                        pattern="[0-9]{10,15}"
                                        maxLength={10}
                                        title="Please enter a valid phone number (10 digits)"
                                        className="flex-1 border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                    />
                                </div>
                                <input
                                    required
                                    type="text"
                                    maxLength={100}
                                    placeholder="Company Name"
                                    className="w-full border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                />
                                <input
                                    required
                                    type="email"
                                    maxLength={100}
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    title="Please enter a valid email address (e.g., name@example.com)"
                                    placeholder="E-mail ID"
                                    className="w-full border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                />
                                <textarea
                                    required
                                    placeholder="Description"
                                    maxLength={500}
                                    // rows="3"
                                    className="w-full border border-[#D4D4D4] bg-[#F8F8F8] text-[var(--foreground)] placeholder-[#A2A2A2] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--buttoncolor)]"
                                ></textarea>
                                <div className="mt-4 lg:mt-6 flex items-center justify-center">
                                    <a href="#">
                                        <button type="submit" className="bg-[var(--buttoncolor)] semibold-text text-base text-white rounded-lg md:rounded-xl py-2.5 px-8 ">Submit</button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 lg:mt-12 xl:mt-16 text-sm ">
                    © 2025 ResoNex. All rights reserved. |{" "}
                    <a href="#" className="hover:underline">
                    Privacy Policy
                    </a>{" "}
                    |{" "}
                    <a href="#" className="hover:underline">
                    Terms of Services
                    </a>
                </div>
                </section>
        </div>
    )
}

export default Footer;