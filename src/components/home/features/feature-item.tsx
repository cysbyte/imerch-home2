import Image from 'next/image'
import React from 'react'
import featureIcon1 from '/public/home/feature-icon1.svg'
import featureIcon2 from '/public/home/feature-icon2.svg'
import featureIcon3 from '/public/home/feature-icon3.svg'
import { div } from 'framer-motion/client'
import { motion } from 'framer-motion'

const FeatureItem = ({ id, title, desc }: { id: number, title: string, desc: string }) => {
    const getFeatureIcon = (id: number) => {
        if (id === 1) {
            return featureIcon1
        } else if (id === 2) {
            return featureIcon2
        } else {
            return featureIcon3
        }
    }

    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                color: '#f8e112'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='bg-gradient-to-b from-[#FFFFFF4D] to-[#FFFFFF33] border-grad flex flex-col items-center justify-center gap-3 text-center rounded-2xl backdrop-blur-[1px] h-[220px] flex-1 p-1'>
            <Image className='w-[66px] h-auto' src={getFeatureIcon(id)} alt='' />
            <h3 className='text-[1.4rem] font-semibold text-white '>{title}</h3>
            <p className='text-[0.7rem] text-white'>{desc}</p>
        </motion.div>

    )
}

export default FeatureItem