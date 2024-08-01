import React from 'react';
import Jd from '../../assets/images/JD_img.png';
import brewheel from '../../assets/images/Brewheel.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import FeatureSection from '../Features/FeatureSection';
const HeroSection = () => {
    return (
        <>
            <div className='p-6 ' id='home'>
                <div className='py-8 lg:py-1 rounded-lg' style={{
                    background: 'linear-gradient(to bottom right, #cb7601, #552c00, #422e15)',
                    boxShadow: '0 0 10px 5px rgb(255, 178, 0,0.7)' // Gold glow shadow
                }}>
                    <div className='grid grid-cols-1 sm:grid-cols-12 gap-4'>
                        <div className='col-span-1 lg:col-span-6 flex justify-center items-center'>
                            <img src={Jd} className='mx-auto' />
                        </div>
                        <div className='col-span-1 lg:col-span-6 flex flex-col justify-center items-center'>
                            <h1 className=' text-3xl lg:text-5xl font-bold text-white'>The Brew Factory</h1>
                            <p className='text-justify p-5'><h2 className='text-1xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h2></p>
                            <img src={brewheel} width={200} style={{
                                animation: 'rotate 15s linear infinite'
                            }} />

                        </div>

                    </div>
                </div>
            </div>
            <FeatureSection /></>

    );
}

export default HeroSection;
