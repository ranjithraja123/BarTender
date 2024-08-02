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
                    <div className='grid grid-cols-1 sm:col-span-12 sm:grid-cols-12 gap-4'>
                        <div className='col-span-1 sm:col-span-12 md:col-span-12 lg:col-span-6 flex justify-center items-center'>
                            <img src={Jd} className='mx-auto' />
                        </div>
                        <div className='col-span-1 sm:col-span-12 md:col-span-12 lg:col-span-6 flex flex-col justify-center items-center'>
                            <h1 className=' text-3xl lg:text-5xl font-bold text-white'>The Brew Factory</h1>
                            <p className='text-justify p-5'><h2 className='text-1xl'>Alcohol creation, known as fermentation, is a natural process where sugars in fruits, grains, or vegetables are converted into ethanol and carbon dioxide by yeast or bacteria. This age-old technique begins by harvesting the base ingredient, such as grapes for wine, barley for beer, or potatoes for vodka. The sugars are extracted and then fermented in a controlled environment, allowing yeast to metabolize the sugars into alcohol over days or weeks. The resulting liquid is then distilled or aged, depending on the desired final product, to enhance flavors and increase alcohol content. This process has been refined over centuries, combining science and tradition to produce a wide variety of alcoholic beverages enjoyed worldwide.</h2></p>
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
