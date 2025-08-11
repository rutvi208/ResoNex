

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="bg-white max-w-6xl w-full rounded-3xl px-6 md:px-14 pt-8 pb-14">
            {/* Heading  */}
            <div className="text-center">
                <h1 className="text-sm lg:text-base tracking-widest text-[var(--buttoncolor)] mb-2 lg:mb-5">
                    TRANSFORM, PROTECT & ACCELERATE
                </h1>
                <h1 className="text-3xl md:text-4xl lg:5xl xl:text-6xl font-bold xl:leading-24 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                    IT Services for the Modern Enterprise
                </h1>
            </div>

            {/* Tabs */}
            <div className="mt-24 mb-16 flex flex-wrap justify-center gap-8 text-[#BBBBBB] font-medium">
                <button className="relative text-[var(--buttoncolor)] medium-text lg:text-xl after:absolute before:bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[var(--buttoncolor)]">
                AI Services
                </button>
                <button className="hover:text-[var(--foreground)] medium-text lg:text-xl tracking-tight">Data Services</button>
                <button className="hover:text-[var(--foreground)] medium-text lg:text-xl tracking-tight">Cloud Services</button>
                <button className="hover:text-[var(--foreground)] medium-text lg:text-xl tracking-tight">Security Services</button>
                <button className="hover:text-[var(--foreground)] medium-text lg:text-xl tracking-tight">Infrastructure Services</button>
                {/* <button className="hover:text-[var(--foreground)] medium-text lg:text-xl tracking-tight">Automation & Integration Services</button> */}
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 xl:gap-14">
                {/* Left Column */}
                <div>
                <p className="text-[var(--foreground)] medium-text lg:text-xl lg:leading-6 mb-10">
                    Accelerate innovation with transformative AI capabilities.
                </p>

                <div className="space-y-3">
                    <div className="bg-[#F8F8F8] border-[1px] border-[#EDEDED] rounded-lg px-5 py-5 flex items-center gap-4">
                    <span className="text-[var(--buttoncolor)] semibold-text text-lg lg:text-2xl">55%</span>
                    <span className="text-[var(--foreground)] text-sm">Reduction in Manual Effort</span>
                    </div>
                    <div className="bg-[#F8F8F8] border-[1px] border-[#EDEDED] rounded-lg px-5 py-5 flex items-center gap-4">
                    <span className="text-[var(--buttoncolor)] semibold-text text-lg lg:text-2xl">80%</span>
                    <span className="text-[var(--foreground)] text-sm">Quicker Decision-Making</span>
                    </div>
                    <div className="bg-[#F8F8F8] border-[1px] border-[#EDEDED] rounded-lg px-5 py-5 flex items-center gap-4">
                    <span className="text-[var(--buttoncolor)] semibold-text text-lg lg:text-2xl">90%</span>
                    <span className="text-[var(--foreground)] text-sm">AI Adoption Rate with Training</span>
                    </div>
                </div>
                </div>

                {/* Right Column */}
                <div>
                <p className="text-[var(--foreground)] lg:text-xl lg:leading-7">
                    Deploy next-gen AI solutions - from machine learning to natural language processing - to automate,
                    personalize, and optimize core business functions.
                </p>

                <h3 className="text-[var(--foreground)] text-lg lg:text-xl medium-text leading-6 mt-12 mb-4">Key Capabilities:</h3>
                <ul className="grid grid-cols-1 gap-y-4 gap-x-2 text-[var(--foreground)] text-sm lg:text-base list-disc list-inside">
                    <li>Custom AI Application Development</li>
                    <li>Computer Vision Solutions</li>
                    <li>Generative AI & Conversational AI</li>
                    <li>AI Strategy & Consulting</li>
                    <li>Predictive Analytics & Modeling</li>
                </ul>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Services;