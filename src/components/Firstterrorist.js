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

function Firstterrorist() {
    return (
        <div className='flex flex-col items-center justify-center z-[3]'>

            <div className="black bg-black/90 w-10/12 flex flex-col  rounded-xl justify-start align-top items-start">
                <img src={chains} alt="" />

                <div className="divide flex lg:flex-row flex-col justify-start align-top items-start">
                    <div className="firsthalf">
                        <img src={bazooka} className='mt-[-230px]' alt="" />
                        <img src={grenade} alt="" />
                        <img src={ak47} className='mt-[-230px]' alt="" />
                    </div>

                    <div className="secondhalf p-4 ">
                        <img src={thefirst} className='mb-14' alt="" />
                        <img src={terrorist} className='mb-14' alt="" />
                        <img src={blockchain} className='mb-14' alt="" />
                        <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=3mHRcFGPwXexeKjneCRPzjsB9L4uiKJntyRcG6kUhiYR&fixed=in" target="_blank" rel="noopener noreferrer">
                            <img src={boomnow2} alt="" />
                        </a>
                    </div>
                </div>

            </div>
            <img src={chainss} className='sw-[400px] ' alt="" />
        </div>
    )
}

export default Firstterrorist