"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';
import RealEstate from '@/assets/CaseStudy/Real-Estate.svg';
import Finance from '@/assets/CaseStudy/Finance.svg';
import Healthcare from '@/assets/CaseStudy/Healthcare.svg';
import Cloud from '@/assets/CaseStudy/Cloud-data-migration.svg';
import Retail from '@/assets/CaseStudy/Retail.svg';
import Hospitality from '@/assets/CaseStudy/Hospitality.svg';

const CaseStudy = () => {
    const caseStudies = [
        {
            category: "Real Estate",
            image: RealEstate,
            title: "Unified Data Hub",
            challenge:
            "Fragmented data from 85,000+ rental homes across 16 US markets led to slow reporting, poor maintenance tracking, and compliance hurdles.",
            impact: [
            "27+ data sources unified via Snowflake, with 150+ automated dashboards",
            "60% faster reporting cycles",
            "40% reduction in maintenance turnaround time",
            "100% regulatory compliance achieved",
            ],
        },
        {
            category: "Finance",
            image: Cloud,
            title: "Cloud Data Migration",
            challenge:
            "Legacy Oracle system caused slow queries and high upgrade costs for huge customer data volumes.",
            impact: [
            "Migrated to Snowflake on AWS, enabling 40% faster query performance",
            "50% lower infrastructure costs with pay-as-you-go model",
            "100% data integrity during migration",
            "Instant, secure access for 5+ teams",
            ],
        },
        {
            category: "Shipping & Logistics",
            image: Finance,
            title: "AI Container Optimization",
            challenge:
            "Manual container stacking led to high costs, excessive labor, and poor yard utilization.",
            impact: [
            "75% reduction in planning time",
            "30% fewer stacking operations",
            "Achieved 100% match with pre-planned layouts",
            "20% fewer yard violations",
            ],
        },
        {
            category: "Hospitality",
            image: Hospitality,
            title: "AI Housekeeping Audit",
            challenge:
            "Manual hotel audits were slow, inconsistent, and labor-intensive.",
            impact: [
            "80% faster audit turnaround time",
            "Reduced audit effort by 60%",
            "Raised guest satisfaction scores by 20%",
            "Enabled real-time room status with automated photo checks",
            ],
        },
        {
            category: "Healthcare",
            image: Healthcare,
            title: "Performance KPI Dashboard",
            challenge:
            "Manual tracking of doctor productivity, revenue, and patient flow restricted operational efficiency.",
            impact: [
            "70% faster access to financial and productivity data",
            "Enabled real-time tracking for 100+ doctors",
            "Grew service utilization by 25%",
            "Improved monthly revenue analysis",
            ],
        },
        {
            category: "Retail & E-commerce",
            image: Retail,
            title: "Automated Order Intelligence",
            challenge:
            "Manual order entry and lack of real-time analytics slowed fulfillment and increased costs.",
            impact: [
            "Eliminated manual order entry, saving 30+ hours/week",
            "95% reduction in order errors",
            "99% on-time shipment rate achieved",
            "Boosted promotion-driven sales by 18%",
            ],
        },
    ];

    // Custom Arrows
    const PrevArrow = ({ onClick}: any) => (
    <button
        className="hidden sm:flex absolute -left-6 xl:-left-12 2xl:-left-16 top-1/2 -translate-y-1/2 z-10 bg-[#EDEDED] text-[var(--foreground)] p-2 xl:p-3 rounded-full"
        onClick={onClick}
    >
        <FaChevronLeft />
    </button>
    );

    const NextArrow = ({ onClick }: any) => (
    <button
        className="hidden sm:flex absolute -right-6 xl:-right-12 2xl:-right-16 top-1/2 -translate-y-1/2 z-10 bg-[#EDEDED] text-[var(--foreground)] p-2 xl:p-3 rounded-full"
        onClick={onClick}
    >
        <FaChevronRight />
    </button>
    );

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
        customPaging: (i: number) => (
        <div
            className={`w-3 h-3 my-4 rounded-full transition-all duration-300 ${
            i === currentSlide  ? "bg-[var(--brandcolor)]" : "bg-gray-400"
            }`}
        ></div>
        ),
        appendDots: (dots: React.ReactNode) => (
        <div>
            <ul>{dots}</ul>
        </div>
        ),
        responsive: [
            {
            breakpoint: 1139, 
            settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
            breakpoint: 639,
            settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <div>
            <div className="bg-white text-white py-12 lg:py-20 relative">
                <div className="text-center mb-12 lg:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold xl:leading-24 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                        Client Success Story
                    </h2>
                    <p className="mt-2 text-[var(--foreground)] medium-text mx-auto text-lg md:text-xl">
                        Real results from our partnerships with leading Middle East companies.
                    </p>
                </div>

                <div className="xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 relative">
                    <Slider {...settings} className="pb-10 [&_.slick-dots]:mt-6">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="h-full">
                        <div className="bg-[#222222] rounded-2xl p-6 flex flex-col justify-between h-full">
                            <div>
                                <div className="justify-between flex flex-row items-center mb-1">
                                    <p className="text-xs sm:text-sm uppercase text-white">
                                        {study.category}
                                    </p>
                                    <Image src={study.image} alt="Category icon" className="w-16" width={4} height={4} />
                                </div>
                                
                                <h3 className="text-xl xl:text-2xl text-white semibold-text tracking-tight mb-4 xl:mb-8">{study.title}</h3>
                                <p className="text-white text-base lg:text-lg medium-text mb-1 lg:mb-2">Challenge:</p>
                                <p className="text-sm lg:text-base text-[#D4D4D4] mb-4 lg:mb-6 xl:mb-8">
                                    {study.challenge}
                                </p>
                                <p className="text-white text-base lg:text-lg medium-text mb-1 lg:mb-2">Impact Delivered:</p>
                                <ul className="list-disc list-outside ms-4 text-sm lg:text-base text-[#D4D4D4] space-y-1 mb-4 xl:mb-8">
                                    {study.impact.map((point, i) => (
                                    <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="2xl:mt-4 flex gap-3 justify-end">
                            <button className="px-4 py-1 rounded-full bg-white text-[#222222] text-sm">
                                View Details
                            </button>
                            <button className="px-4 py-1 rounded-full border border-white text-white text-sm">
                                Download
                            </button>
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

export default CaseStudy;