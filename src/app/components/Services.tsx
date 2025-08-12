"use client";
import { useState } from 'react';

type ServiceData = {
    title: string;
    subtitle: string;
    description: string;
    stats: { value: string; label: string }[];
    capabilities: string[];
};

type ServicesDataType = {
    [key: string]: ServiceData;
};

const Services = () => {

    const [activeTab, setActiveTab] = useState('ai');

    const servicesData: ServicesDataType  = {
        ai: {
            title: "AI Services",
            subtitle: "Accelerate innovation with transformative AI capabilities.",
            description: "Deploy next-gen AI solutions—from machine learning to natural language processing—to automate, personalize, and optimize core business functions.",
            stats: [
                { value: "55%", label: "Reduction in Manual Effort" },
                { value: "80%", label: "Quicker Decision-Making" },
                { value: "90%", label: "AI Adoption Rate with Training" }
            ],
            capabilities: [
                "Custom AI Application Development",
                "Generative AI & Conversational AI", 
                "Predictive Analytics & Modeling",
                "Computer Vision Solutions",
                "AI Strategy & Consulting"
            ]
        },
        data: {
            title: "Data Services",
            subtitle: "Drive business decisions with robust data foundations.",
            description: "Enable seamless data flow and reliable analytics for smarter strategies. Our comprehensive Data Services empower organizations to unlock full data value while ensuring security and scalability.",
            stats: [
                { value: "70%", label: "Increase in Data Accuracy" },
                { value: "65%", label: "Faster Data Processing" },
                { value: "90%", label: "Improved Reporting Efficiency" }
            ],
            capabilities: [
                "End-to-End Data Warehousing",
                "Cloud Data Migration & Management",
                "Advanced Data Engineering", 
                "Scalable Analytics Platforms",
                "Robust Database Services"
            ]
        },
        cloud: {
            title: "Cloud Services",
            subtitle: "Transform your operations with secure, agile cloud solutions.",
            description: "Seamlessly migrate, protect, and scale your business in the cloud, ensuring always-on connectivity and resilience for a modern digital workplace.",
            stats: [
                { value: "60%", label: "Lower Infrastructure Costs" },
                { value: "75%", label: "Faster Deployment Times" },
                { value: "99.9%", label: "Cloud Uptime Guarantee" }
            ],
            capabilities: [
                "Hassle-Free Cloud Migration",
                "End-to-End Cloud Security",
                "Cloud Backup & Disaster Recovery",
                "Optimized Cloud Operations", 
                "Modern Workplace Enablement"
            ]
        },
        security: {
            title: "Security Services",
            subtitle: "Safeguard your digital ecosystem with multi-layered security.",
            description: "Protect sensitive data and ensure compliance with proactive, enterprise-grade security spanning all business touchpoints.",
            stats: [
                { value: "90%", label: "Threat Detection Accuracy" },
                { value: "85%", label: "Faster Incident Response" },
                { value: "100%", label: "Compliance Readiness" }
            ],
            capabilities: [
                "Cybersecurity & Threat Protection",
                "Identity & Access Management (IAM)",
                "Application & Email Security",
                "Data & Cloud Governance"
            ]
        },
        infrastructure: {
            title: "Infrastructure Services", 
            subtitle: "Power your business with resilient IT infrastructure.",
            description: "Modernize, protect, and scale your IT assets with our comprehensive infrastructure solutions—ready for today's data-driven demands.",
            stats: [
                { value: "70%", label: "Uptime Improvement" },
                { value: "60%", label: "Quicker Issue Resolution" },
                { value: "50%", label: "Lower Maintenance Costs" }
            ],
            capabilities: [
                "Infrastructure Transformation",
                "Datacenter & Cloud Monitoring",
                "Enterprise Data Protection",
                "Comprehensive IT Support Services"
            ]
        },
        automation: {
            title: "Automation & Integration Services",
            subtitle: "Unlock efficiency through streamlined automation and integration.",
            description: "Automate repetitive tasks and connect business systems to boost productivity, enhance accuracy, and deliver seamless digital experiences.",
            stats: [
                { value: "65%", label: "Productivity Gains" },
                { value: "70%", label: "Reduction in Manual Errors" },
                { value: "80%", label: "Faster Project Delivery" }
            ],
            capabilities: [
                "RPA (Robotic Process Automation)",
                "API Development & System Integrations",
                "Native and Progressive Web App Solutions",
                "Ongoing Application Maintenance"
            ]
        }
    };

    const currentService = servicesData[activeTab] || servicesData.ai;

    const tabs: { id: string; name: string; subname: string }[] = [
        { id: 'ai', name: 'AI', subname: 'Services' },
        { id: 'data', name: 'Data', subname: 'Services' },
        { id: 'cloud', name: 'Cloud', subname: 'Services' },
        { id: 'security', name: 'Security', subname: 'Services' },
        { id: 'infrastructure', name: 'Infrastructure', subname: 'Services' },
        { id: 'automation', name: 'Automation & Integration', subname: 'Services' }
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <section className="bg-white max-w-6xl w-full rounded-3xl px-6 md:px-14 pt-8 pb-14">
            {/* Heading  */}
            <div className="text-center">
                <h1 className="text-sm lg:text-base tracking-widest text-[var(--buttoncolor)] mb-2 lg:mb-5">
                    TRANSFORM, PROTECT & ACCELERATE
                </h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold xl:leading-24 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                    IT Services for the Modern Enterprise
                </h1>
            </div>

            {/* Tabs */}
            <div className="mt-24 mb-16 flex flex-wrap justify-center gap-8 2xl:gap-16 text-[#BBBBBB] font-medium">
                {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-left leading-none hover:text-[var(--foreground)] transition-colors duration-200  medium-text text-xl lg:text-2xl tracking-tight ${
                                activeTab === tab.id ? 'text-[var(--brandcolor)]' : 'text-gray-400'
                            }`}
                        >
                            {tab.name} <br /> 
                            <span className="text-base lg:text-lg">{tab.subname}</span>
                        </button>
                    ))}
                </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 xl:gap-14">
                {/* Left Column */}
                <div>
                <p className="text-[var(--foreground)] medium-text lg:text-xl lg:leading-6 mb-10">
                    {/* Accelerate innovation with transformative AI capabilities. */}
                    {currentService.subtitle}
                </p>

                <div className="space-y-3">
                    {currentService.stats.map((stat: { value: string; label: string }, index: number) => (
                    <div key={index} className="bg-[#F8F8F8] border-[1px] border-[#EDEDED] rounded-lg px-5 py-5 flex items-center gap-4">
                    <span className="text-[var(--buttoncolor)] semibold-text text-lg lg:text-2xl">{stat.value}</span>
                    <span className="text-[var(--foreground)] text-sm">{stat.label}</span>
                    </div>
                       ))}
                </div>
                </div>

                {/* Right Column */}
                <div>
                <p className="text-[var(--foreground)] lg:text-xl lg:leading-7">
                    {/* Deploy next-gen AI solutions - from machine learning to natural language processing - to automate,
                    personalize, and optimize core business functions. */}
                    {currentService.description}
                </p>

                <h3 className="text-[var(--foreground)] text-lg lg:text-xl medium-text leading-6 mt-12 mb-4">Key Capabilities:</h3>
                <ul className="grid grid-cols-1 gap-y-4 gap-x-2 text-[var(--foreground)] text-sm lg:text-base list-disc list-inside">
                    {currentService.capabilities.map((capability: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="text-purple-600 font-bold text-lg">•</span>
                            <span>{capability}</span>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Services;