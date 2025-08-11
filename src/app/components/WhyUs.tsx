import Expertise from '@/assets/WhyUs/Expertise.svg';
import Quality from '@/assets/WhyUs/Quality.svg';
import Model from '@/assets/WhyUs/Model.svg';
import Agility from '@/assets/WhyUs/Agility.svg';
import Discovery from '@/assets/WhyUs/Discovery.svg';
import Strategy from '@/assets/WhyUs/StrategyDev.svg';
import Subject from '@/assets/WhyUs/SubectMatter.svg';
import Scale from '@/assets/WhyUs/ScaleSupport.svg';
import Image from 'next/image';

const WhyUs = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-5 place-content-center max-w-7xl mx-10 2xl:mx-auto py-10 md:py-20 xl:py-24'>
                <div className='bg-white border border-[#EDEDED] rounded-2xl px-8 py-7 max-h-fit '>
                    <h2 className='text-lg xl:text-3xl 2xl:text-[2.50rem] medium-text tracking-tighter bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent '>
                        Why Choose ResoNex?
                    </h2>
                    <div className='lg:mt-10 2xl:mt-12 mb-8'>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 border-b border-b-[#D4D4D4] '>
                            <Image src={Expertise} alt='Middle East Expertise' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Middle East Expertise</h3>
                        </div>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 border-b border-b-[#D4D4D4] '>
                            <Image src={Quality} alt='Enterprise Quality' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Enterprise Quality</h3>
                        </div>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 border-b border-b-[#D4D4D4] '>
                            <Image src={Model} alt='Co-Creation Model' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Co-Creation Model</h3>
                        </div>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 '>
                            <Image src={Agility} alt='Startup Agility' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Startup Agility</h3>
                        </div>
                    </div>
                    <p className='text-base lg:text-lg text-[var(--foreground)] leading-tight'>
                        At ResoNex, we bring a unique blend of regional expertise, enterprise-grade quality, and startup-level agility to every project. Our co-creation model means we work alongside you, not just for you, ensuring rapid results and lasting impact.
                    </p>
                </div>

                <div className='bg-white border border-[#EDEDED] rounded-2xl px-8 py-7 lg:mt-32 '>
                    <h2 className='text-lg xl:text-3xl 2xl:text-[2.50rem] medium-text tracking-tighter bg-gradient-to-br sm:bg-gradient-to-r from-[#303030] via-[#32006C] via-[50%] to-[#4D4D4D] bg-clip-text text-transparent '>
                        How We Deliver Value!
                    </h2>
                    <div className='lg:mt-10 2xl:mt-12 mb-8'>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 border-b border-b-[#D4D4D4] '>
                            <Image src={Discovery} alt='Discovery & Assessment' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Discovery & Assessment</h3>
                        </div>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 border-b border-b-[#D4D4D4] '>
                            <Image src={Strategy} alt='Strategy Development' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Strategy Development</h3>
                        </div>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 border-b border-b-[#D4D4D4] '>
                            <Image src={Subject} alt='Subject Matter Experts' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Subject Matter Experts</h3>
                        </div>
                        <div className='pt-3 pb-4 flex flex-row items-center space-x-2 lg:space-x-6 '>
                            <Image src={Scale} alt='Scale & Support' className='' />
                            <h3 className='text-lg lg:text-xl medium-text tracking-tight '>Scale & Support</h3>
                        </div>
                    </div>
                    <p className='text-base lg:text-lg text-[var(--foreground)] leading-tight'>
                        We partner with you at every step, aligning strategy to execution for real results.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;