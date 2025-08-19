import Image from "next/image";
import CtaBg from '@/assets/CTA-bg.png';

const CtaSection = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 md:px-12 sm:py-8 lg:py-12">
                <div className='relative w-full'>
                    <Image
                    src={CtaBg}
                    alt="Services Background"
                    className='absolute inset-0 w-full h-full'
                    loading="lazy" />
                    <div className='relative z-10'>
                        <div className="py-20 lg:py-24 text-center">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold lg:leadig-14 xl:leading-16 tracking-tight bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent">
                            Ready to accelerate your digital transformation?
                            </h2>
                            <div className="mt-8 lg:mt-10">
                                <a href="#">
                                    <button className="bg-[var(--buttoncolor)] semibold-text text-base text-white rounded-lg md:rounded-xl py-2.5 px-8 ">Let’s chart the course together</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CtaSection;