import Image from 'next/image'
import upperTexture from '/public/home/upper-texture.png'
import upperCircle from '/public/home/upper-circle.png'
import ins from '/public/home/mockup/ins.svg'
import youtube from '/public/home/mockup/youtube.svg'
import linkedin from '/public/home/mockup/linkedin.svg'
import twitter from '/public/home/mockup/twitter.svg'

const UpperPart = () => {
  return (
<div className="relative w-full flex items-start justify-center h-[550px]">
        <Image className='absolute bottom-0 left-0 w-full h-[400px] opacity-0' src={upperTexture} alt=''/>
        <Image className='absolute bottom-0 w-auto h-[189px]' src={upperCircle} alt=''/>

        <Image className='absolute top-[0%] left-[60%] w-[260px] h-auto'  src={youtube} alt=''/>
        <Image className='absolute top-[10%] left-[50%] w-[260px] h-auto'  src={ins} alt=''/>

        <Image className='absolute top-[0%] left-[10%] w-[260px] h-auto'  src={linkedin} alt=''/>
        <Image className='absolute top-[10%] left-[20%] w-[260px] h-auto'  src={twitter} alt=''/>

    </div>
  )
}

export default UpperPart