import Image from 'next/image'

const ul = ['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE']
const imgs = [
  {
    src: '/images/brand1.svg',
    alt: 'brand1',
  },
  {
    src: '/images/brand2.svg',
    alt: 'brand2',
  },
  {
    src: '/images/brand3.svg',
    alt: 'brand3',
  },
  {
    src: '/images/brand4.svg',
    alt: 'brand4',
  },
  {
    src: '/images/brand5.svg',
    alt: 'brand5',
  },
  {
    src: '/images/brand6.svg',
    alt: 'brand6',
  },
]

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center p-24 overflow-hidden mt-[-80px]">
      <div className="sm:w-[800px] h-[600px] bg-[#FFFFFF] sm:relative overflow-visible ">
        <div className="sm:absolute left-[3.88%] top-[4.33%] font-['Roboto'] text-[12px] sm:text-[20px]">
          www.nickelfox.com
        </div>
        <div className=" absolute top-[10px] right-[-100px] hidden sm:block">
          <Image
            src="/images/bgtop.svg"
            alt="bgtop"
            width={1600}
            height={417}
            priority
          />
        </div>
        <div className="w-[900px] h-[271px] absolute bottom-[-250px] right-[-500px] hidden sm:block">
          <Image
            src="/images/bgbottom.svg"
            alt="bgbottom"
            width={1077}
            height={271}
            priority
          />
        </div>
        <div className="w-screen h-screen sm:h-[600px] bg-[#FFFFFF] sm:absolute sm:right-[-50px] sm:top-[85px] sm:w-[800px]">
          <div className="flex flex-row items-center justify-between w-full h-[80px] px-[20px] sm:px-[40px] py-[20px]">
            <div className="flex flex-row items-center">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={25}
                height={23}
                priority
              />
              <div className="font-['Poppins'] text-[30px] font-[900] ml-[10px]">
                FASHION
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex max-h-[20px] hover:overflow-visible overflow-hidden sm:overflow-visible sm:flex-row flex-col items-center">
                {ul.map((item, index) => (
                  <div className="font-['Poppins'] text-[12px] font-[500] mx-[10px]">
                    {item}
                  </div>
                ))}
              </div>
              <div className="w-[50px] h-[30px] sm:w-[80px] sm:h-[37px] text-[10px] sm:text-[12px] bg-[#000000] rounded-[5px] text-[#FFFFFF] text-center leading-[30px] sm:leading-[37px]">
                SIGN UP
              </div>
            </div>
          </div>
          <div className="w-full h-[220px] sm:min-h-[420px] bg-[url('/images/bgcenter.svg')] bg-no-repeat bg-[length:100%_100%] px-[10%] pt-[20px] sm:px-[10px] sm:pt-[40px]">
            <div className="flex flex-row justify-between">
              <div className="font-['Poppins'] text-[20px] sm:text-[50px] font-[900]">
                <div className="w-full pl-[10px] sm:w-[300px] sm:h-[65px] bg-[url('/images/fontbg1.svg')] bg-no-repeat bg-[length:100%_100%] sm:pl-[40px] sm:leading-[65px]">
                  LET'S
                </div>
                <div className="pl-[10px] sm:pl-[40px]  sm:leading-[65px]">
                  EXPLORE
                </div>
                <div className="w-full pl-[10px] sm:w-[300px] sm:h-[65px] bg-[url('/images/fontbg2.svg')] bg-no-repeat bg-[length:100%_100%] sm:pl-[40px] sm:leading-[65px]">
                  UNIQUE
                </div>
                <div className="pl-[10px] sm:pl-[40px]  sm:leading-[65px]">
                  CLOTHES.
                </div>
                <div className="text-[8px] pl-[10px] sm:text-[18px] font-[400] sm:pl-[40px] sm:mt-[10px]">
                  Live for Influential and Innovative fashion!
                </div>
                <div className="w-[60px] h-[30px] mt-[10px] sm:w-[100px] sm:h-[37px] text-[8px] sm:text-[12px] bg-[#000000] rounded-[5px] text-[#FFFFFF] text-center leading-[30px] sm:leading-[37px]  ml-[20px] sm:ml-[50px] sm:mt-[10px]">
                  SHOP NOW
                </div>
              </div>
              <div className="w-full h-190 sm:w-[370px] sm:h-[368px] relative">
                <Image
                  className="absolute bottom-0 w-full h-full sm:w-[380px] sm:h-[330px]"
                  src="/images/girl.svg"
                  alt="girl"
                  width={380}
                  height={330}
                  priority
                />
                <Image
                  className="absolute bottom-[0.105%] left-[-10px]"
                  src="/images/star1.svg"
                  alt="star1"
                  width={30}
                  height={30}
                  priority
                />
                <Image
                  className="absolute bottom-[30px] right-[115px]"
                  src="/images/star2.svg"
                  alt="star2"
                  width={30}
                  height={30}
                  priority
                />
                <Image
                  className="absolute bottom-[50px] right-[20px]"
                  src="/images/star1.svg"
                  alt="star1"
                  width={25}
                  height={25}
                  priority
                />
                <Image
                  className="absolute bottom-[180px] right-[10px]"
                  src="/images/star2.svg"
                  alt="star2"
                  width={30}
                  height={30}
                  priority
                />
                <Image
                  className="absolute top-0 right-[350px]"
                  src="/images/star2.svg"
                  alt="star2"
                  width={25}
                  height={25}
                  priority
                />
                <Image
                  className="absolute top-[5px] right-[200px]"
                  src="/images/star2.svg"
                  alt="star2"
                  width={25}
                  height={25}
                  priority
                />
                <Image
                  className="absolute top-[12px] right-[365px]"
                  src="/images/star1.svg"
                  alt="star1"
                  width={30}
                  height={30}
                  priority
                />
                <Image
                  className="absolute top-[15px] right-[90px]"
                  src="/images/star1.svg"
                  alt="star1"
                  width={25}
                  height={25}
                  priority
                />
              </div>
            </div>
          </div>
          <div className=" w-full h-[130px] sm:h-[80px] flex flex-wrap sm:flex-row items-center justify-center">
            {imgs.map((img, index) => (
              <Image
                className="mx-[20px] my-[5px]"
                src={img.src}
                alt={img.alt}
                width={80}
                height={40}
                priority
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
