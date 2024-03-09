import React from 'react'
import tokenomics from '../assets/tokenomics.svg'
import lp from '../assets/lp.svg'
import tax from '../assets/tax.svg'
import supply from '../assets/supply.svg'
import boomnowblack from '../assets/boomnowblack.svg'


function Tokenomics() {
    return (
        <div className='flex flex-col items-center'>
            <img src={tokenomics} alt="" />

            <div className="overflow-clip relative black bg-black/50 w-10/12 flex flex-col  rounded-xl items-center">
                <img src={supply} className='my-5' alt="" />

                <div className="together flex flex-col lg:flex-row justify-between">
                    <img src={tax} alt="" className='m-5' />
                    <img src={lp} alt="" className='m-5' />
                </div>
                <img src={boomnowblack} alt="" className='my-5' />
            </div>
        </div>
    )
}

export default Tokenomics