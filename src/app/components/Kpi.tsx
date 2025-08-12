

const Kpi = () => {
    return (
        <div>
            <section className=" text-white py-8 sm:py-12 lg:py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                    KPIs tailored to your sector
                    </h2>
                    <p className="text-lg lg:text-xl text-white mb-8 lg:mb-20">
                    Unlock Benchmark Data to Make Confident, Data-Backed Decisions
                    </p>

                    {/* Description */}
                    <p className="text-white text-lg lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-10">
                    Access a curated library of over 300 industry-specific KPIs and operational benchmarks—
                    built for leaders who demand results. Compare your performance across regions, industries,
                    and business functions to spot opportunities, streamline costs, and drive growth.
                    </p>

                    {/* Cards */}
                    <div className="grid gap-6 md:grid-cols-3 mb-10 lg:mb-16">
                        <div className="bg-white text-[var(--foreground)] rounded-2xl lg:rounded-[1.25rem] p-6 lg:p-7">
                            <h3 className="semibold-text text-left text-lg lg:text-2xl mb-2 lg:mb-4">Sector-Smart Insights:</h3>
                            <p className="text-base lg:text-lg text-left">
                            Instantly see key metrics like Cost per Delivery, Average Order Value, and Customer
                            Acquisition Cost for your industry and geography.
                            </p>
                        </div>
                        <div className="bg-white text-[var(--foreground)] rounded-2xl lg:rounded-[1.25rem] p-6 lg:p-7">
                            <h3 className="semibold-text text-left text-lg lg:text-2xl mb-2 lg:mb-4">Global & Regional Benchmarks:</h3>
                            <p className="text-base lg:text-lg text-left">
                            Benchmark your business against high-performing peers both globally and locally —
                            identify strengths and address gaps with precision.
                            </p>
                        </div>
                        <div className="bg-white text-[var(--foreground)] rounded-2xl lg:rounded-[1.25rem] p-6 lg:p-7">
                            <h3 className="semibold-text text-left text-lg lg:text-2xl mb-2 lg:mb-4">C-Suite Clarity:</h3>
                            <div className="">
                                <p className="text-base lg:text-lg text-left">
                                Get the insights most relevant to CEOs, CFOs, CIOs, and CHROs for faster,
                                smarter executive decisions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <span className="italic text-white medium-text text-lg lg:text-xl">Unlock Your Competitive Edge</span>
                    <a
                        href="#"
                        className="px-5 py-2 rounded-full text-sm font-semibold text-[var(--buttoncolor)] bg-gradient-to-br from-[#DEF4FC] via-[#FFE9E0] to-[#FFFFE0] hover:opacity-90 transition"
                    >
                        Explore KPIs Now!
                    </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Kpi;