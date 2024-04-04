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
            text = "First class entertainment speakers!"
          />
    
        </div>

        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="Second Prize"
            width="450"
            height="450"
            text = "Best in class mouse!"
          />
        </div>

        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="Third Prize"
            width="450"
            height="450"
            text = "Hacker approved mousepad!"
          />

        </div>
      </div>
    </div>
  )
}