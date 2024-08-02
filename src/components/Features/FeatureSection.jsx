import React from 'react'
import wisky from '../../assets/images/wisky.png'

const FeatureSection = () => {
    return (
        <div className='p-6' id='features'>
            <div className='py-8 lg:py-1 rounded-lg' style={{
                background: 'linear-gradient(to bottom right, #cb7601, #552c00, #422e15)',
                boxShadow: '0 0 10px 5px rgb(255, 178, 0,0.7)' // Gold glow shadow
            }}>
                <div className='grid grid-cols-1 sm:col-span-12 sm:grid-cols-12 gap-4'>

                    <div className='col-span-1 sm:col-span-12 md:col-span-12 lg:col-span-6 flex flex-col justify-center items-center'>
                        <h1 className=' text-3xl lg:text-5xl font-bold text-white'>Our Features</h1>
                        <p className='text-justify p-5'><h2 className='text-1xl'>
                        To create a captivating bar environment, focus on a distinct theme that reflects the bar's identity, whether rustic, modern, vintage, or industrial. Use a combination of ambient, task, and accent lighting to foster a welcoming atmosphere, with dim lighting for a cozy feel. Offer comfortable seating options, including bar stools, tables, booths, and lounge areas. Design a spacious and functional bar counter and back bar with an organized display of alcohol, glassware, and tools. Ensure there is ample storage for alcohol, mixers, and bar equipment. Craft a diverse drink menu featuring cocktails, beers, wines, and spirits, with seasonal specials and signature drinks. Include non-alcoholic options like mocktails, sodas, and juices for those who don’t drink, and consider a food menu with appetizers and meals to complement the drink offerings.
                        </h2></p>


                    </div>
                    <div className='col-span-1 sm:col-span-12 md:col-span-12 lg:col-span-6 flex justify-center items-center'>
                        <img src={wisky} className='mx-auto' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeatureSection
