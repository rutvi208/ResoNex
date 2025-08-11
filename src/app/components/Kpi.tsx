

const Kpi = () => {
    return (
        <div>
            <section className=" text-white py-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl xl:text-5xl font-bold mb-4">
                    KPIs tailored to your sector
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                    Unlock Benchmark Data to Make Confident, Data-Backed Decisions
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 max-w-3xl mx-auto mb-12">
                    Access a curated library of over 300 industry-specific KPIs and operational benchmarks—
                    built for leaders who demand results. Compare your performance across regions, industries,
                    and business functions to spot opportunities, streamline costs, and drive growth.
                    </p>

                    {/* Cards */}
                    <div className="grid gap-6 md:grid-cols-3 mb-10">
                    <div className="bg-white text-gray-700 rounded-2xl shadow p-6">
                        <h3 className="font-bold text-lg mb-2">Sector-Smart Insights:</h3>
                        <p className="text-sm">
                        Instantly see key metrics like Cost per Delivery, Average Order Value, and Customer
                        Acquisition Cost for your industry and geography.
                        </p>
                    </div>
                    <div className="bg-white text-gray-700 rounded-2xl shadow p-6">
                        <h3 className="font-bold text-lg mb-2">Global & Regional Benchmarks:</h3>
                        <p className="text-sm">
                        Benchmark your business against high-performing peers both globally and locally —
                        identify strengths and address gaps with precision.
                        </p>
                    </div>
                    <div className="bg-white text-gray-700 rounded-2xl shadow p-6">
                        <h3 className="font-bold text-lg mb-2">C-Suite Clarity:</h3>
                        <p className="text-sm">
                        Get the insights most relevant to CEOs, CFOs, CIOs, and CHROs for faster,
                        smarter executive decisions.
                        </p>
                    </div>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <span className="italic text-gray-300">Unlock Your Competitive Edge</span>
                    <a
                        href="#"
                        className="px-5 py-2 rounded-full text-sm font-semibold text-purple-900 bg-gradient-to-r from-yellow-200 to-purple-200 hover:opacity-90 transition"
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