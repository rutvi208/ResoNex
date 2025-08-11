

const HeroSection = () => {
    return (
    <div>
      {/* <h1>Landing Page</h1> <h1 className="bold-heading text-2xl">Landing Page</h1>*/}
      <section className="w-full flex flex-col items-center justify-center text-center px-6 md:px-10">
        <div className="max-w-6xl w-full py-8 sm:py-12 lg:py-20 xl:py-24">
          {/* Label */}
          <p className="text-sm sm:text-base uppercase text-[var(--buttoncolor)] tracking-wider mb-4">
            Actionable Business Insights
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:7xl xl:text-8xl font-bold xl:leading-24 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
            Lead with Data. Accelerate with Automation.
          </h1>

          {/* Description */}
          <p className="mt-6 text-[var(--foreground)] lg:max-w-2xl mx-auto text-lg md:text-xl">
            From actionable analytics to seamless automation, ResoNex delivers the insights and
            tools you need to drive efficiency and stay ahead. Trusted by CIOs, CEOs, CFOs, and
            CHROs shaping tomorrow`s organizations.
          </p>

          {/* Buttons */}
          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kpi-library"
              className="bg-purple-800 hover:bg-purple-900 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition"
            >
              Explore 300+ Proven KPIs.
            </a>
            <a
              href="#discovery"
              className="border border-purple-800 text-purple-800 hover:bg-purple-50 text-sm font-semibold px-6 py-3 rounded-full transition"
            >
              Book your free Discovery Section
            </a>
          </div> */}
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#">
              <button className="bg-[var(--buttoncolor)] semibold-text text-base text-white rounded-lg md:rounded-xl py-2.5 px-8 ">Explore 300+ Proven KPIs</button>
            </a>
            <a href="#">
              <button className="bg-none border-2 border-[var(--buttoncolor)] semibold-text text-base text-[var(--buttoncolor)] rounded-lg md:rounded-xl py-2 px-8 ">Book your free Discovery Section</button>
            </a>
          </div>
        </div>
      </section>
    </div>
    );
}

export default HeroSection;