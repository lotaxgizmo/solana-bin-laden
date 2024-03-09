
import React from 'react'
import ak47 from '../assets/ak47.svg'
import grenade from '../assets/grenade.svg'
import bazooka from '../assets/bazooka.svg'
import chains from '../assets/chains.svg'
import boomnow2 from '../assets/boomnow2.svg'
import terrorist from '../assets/terrorist.svg'
import thefirst from '../assets/thefirst.svg'
import blockchain from '../assets/blockchain.svg'
import chainss from '../assets/2chains.svg'
import twochainsinss from '../assets/twochains.svg'


function Fourpart() {
    return (
        <div className='flex flex-col items-center justify-center'>

            <div className="overflow-clip relative black bg-black/50 w-10/12 flex flex-col  rounded-xl justify-start align-top items-start">
                <img src={twochainsinss} className='absolute' alt="" />

                <div className="divide flex lg:flex-row flex-col justify-start align-top items-start z-10">
                    <div className="firsthalf p-4">
                        {/* <img src={bazooka} className='mt-[-230px]' alt="" /> */}
                        <img src={grenade} alt="" />
                        <img src={ak47} className='mt-[-130px]' alt="" />
                        <p className='text-3xl text-[#B0D99A] lg:ml-10 lg:w-[500px] mt-[-130px] '>
                            a cryptocurrency memecoin for aircraft and architecture enthusiasts. Join our cause and fly with us to new heights and beyond. The sky is the limit, and nothing will stop us, Allah willing.
                        </p>
                    </div>

                    <div className="secondhalf p-4">
                        <img src={thefirst} className='mb-14' alt="" />
                        <img src={terrorist} className='mb-14' alt="" />
                        <img src={blockchain} className='mb-14' alt="" />
                        <img src={boomnow2} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Fourpart