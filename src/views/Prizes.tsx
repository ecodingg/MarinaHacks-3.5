
import Link from 'next/link'
import Image from 'next/image'

export const Prizes = () => {
  return (
    <div id="prizes" className="flex flex-col justify-center items-center pt-16 gap-16">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-extrabold text-[#0F516F] mt-20 mb-2 ">
          Prizes
        </h1>
      </div>
      {/* Flex container for the jellyfish images and text */}
      <div className="flex justify-center items-center gap-10">
        {/* 2020 Winners */}
        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="First Prize"
            width="450"
            height="450"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <p className="text-white text-2xl font-bold">Speakers for Entertainment</p>
          </div>
          <Image
            src={"/images/prize_photos/speaker.png"}
            alt="Headphones"
            width="250"
            height="250"
          />
        </div>

        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="Second Prize"
            width="450"
            height="450"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <p className="text-white text-2xl font-bold">Mouse for Social Good</p>
          </div>
          <Image
            src={"/images/prize_photos/mouse2.png"}
            alt="Mouse"
            width="250"
            height="250"
          />
        </div>
      

        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="Third Prize"
            width="450"
            height="450"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <p className="text-white text-2xl font-bold">Mouse Pad for Hacker's Favorite</p>
          </div>
          <Image
            src={"/images/prize_photos/mousepad2.png"}
            alt="Mousepad"
            width="250"
            height="250"
          />
          </div>
      </div>
    </div>
  )
}