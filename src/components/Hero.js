import React from 'react'
import boxish from '../assets/boxish.svg'
import bottomhero from '../assets/bottomhero.svg'
import mainhero from '../assets/mainhero.svg'
import tophero from '../assets/tophero.svg'
import hero from '../assets/hero.svg'
import rightgun from '../assets/rightgun.svg'
import leftgun from '../assets/leftgun.svg'
import osama from '../assets/osama.svg'
import boomnow from '../assets/boomnow.svg'
import telegram from '../assets/telegram.svg'
import cave from '../assets/cave.svg'
import chains from '../assets/2chains.svg'


function Hero() {
    return (
        <div className='flex flex-col items-center'>

            <img src={boxish} className='sw-[900px] absolute' alt="" />
            <img src={cave} className='w-[1500px] absolute' alt="" />

            <div className="hero flex flex-col items-center relative">


                <img src={hero} className='w-[900px]' alt="" />
                <img src={osama} className='w-[400px] mt-[-280px]' alt="" />
                <div className="gun flex w-[1200px] justify-between ">
                    <img src={leftgun} className='w-[400px] mt-[-240px]' alt="" />
                    <img src={rightgun} className='w-[400px] mt-[-240px]' alt="" />
                </div>

                <div className="gun flex w-[800px] justify-between ">
                    <img src={boomnow} className='sw-[400px] ' alt="" />
                    <img src={telegram} className='sw-[400px] ' alt="" />
                </div>

                <img src={chains} className='sw-[400px] ' alt="" />

            </div>
        </div>
    )
}

export default Hero