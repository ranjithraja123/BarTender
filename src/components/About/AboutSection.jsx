import React from 'react'
import about from '../../assets/images/aboutBeer.png'

const AboutSection = () => {
    return (
        <div className='p-6' id='about'>
            <div className='py-8 lg:py-1 rounded-lg' style={{
                background: 'linear-gradient(to bottom right, #cb7601, #552c00, #422e15)',
                boxShadow: '0 0 10px 5px rgb(255, 178, 0,0.7)' // Gold glow shadow
            }}>
                <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>

                <div className='col-span-1 lg:col-span-6 flex justify-center items-center'>
                        <img src={about} className='mx-auto' />
                    </div>
                    <div className='col-span-1 lg:col-span-6 flex flex-col justify-center items-center'>
                        <h1 className=' text-3xl lg:text-5xl font-bold text-white'>About us</h1>
                        <p className='text-justify p-5'><h2 className='text-1xl'>
                        Welcome to 𝔉𝔬𝔯𝔦𝔢𝔤𝔫 𝔩𝔦𝔮𝔬𝔲𝔯 𝔰𝔶𝔫𝔡𝔦𝔠𝔞𝔱𝔢, where style meets sophistication. Our bar boasts a unique [themed decor] ambiance, blending [rustic/modern/vintage/industrial] elements to create an inviting atmosphere. Enjoy expertly crafted cocktails, a wide selection of beers, wines, and spirits, complemented by delicious bites from our food menu. With comfortable seating and attentive service, we strive to provide an exceptional experience for every guest. Join us for a memorable night out in a setting designed to reflect our passion for great drinks and good times.                        </h2></p>


                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default AboutSection
