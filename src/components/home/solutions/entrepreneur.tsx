import Image from 'next/image'
import check from '/public/home/check.svg'
import icon from '/public/home/influencer-entrepreneur-icon.svg'
import whiteArrow from '/public/home/white-arrow.svg'

const Entrepreneur = () => {
  return (
    <div data-aos="fade-in" className='w-full md:w-[80%] max-h-80 flex-1 basis-0 bg-gradient-to-r from-[#CD97BC] to-[#9D84DC] flex flex-col items-center justify-center text-center gap-5 rounded-3xl p-4 backdrop-blur-md drop-shadow-lg shadow-xl'>
      <Image className='w-[66px] h-auto backdrop-blur-xl drop-shadow-sm' src={icon} alt='' />
      <div className='flex flex-col gap-3'>
        <h2 className='text-white font-bold text-2xl'>Entrepreneur</h2>
        <div className='pl-2 flex items-center gap-3 w-full'>
          <Image className='w-[20px] h-auto' src={check} alt='' />
          <p className='text-white text-[0.72rem] text-left grow'>SWAG website accessibility</p>
        </div>
        <div className='px-2 flex items-center  gap-3 w-full'>
          <Image className='w-[20px] h-auto' src={check} alt='' />
          <p className='text-white text-[0.72rem] text-left grow'>For more services under Entrepreneur, please contact us</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <p className='text-white text-sm'>Get Started</p>
        <Image className='w-[15px] h-auto' src={whiteArrow} alt='' />
      </div>
    </div>
  )
}

export default Entrepreneur