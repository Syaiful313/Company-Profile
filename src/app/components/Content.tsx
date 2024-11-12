import Image from "next/image";
import { PiAsterisk } from "react-icons/pi";

const Content = () => {
  return (
    <div className="bg-black">
      <div className="grid contenir text-center mx-20">
        <div className="mx-20 my-20 ">
          <p className="text-9xl font-bold text-white text-start flex flex-col">
            TIME TO GET
          </p>
          <div className="text-[#e33a07] text-9xl text-start">
            <span>STRATEGIK</span>
          </div>
        </div>
        <div className="bg-black text-white mt-28 mx-20">
          {/* Navigation Bar */}
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex flex-col items-start space-y-6 ">
              <a href="#" className="text-3xl font-bold hover:text-[#e33a07]">
                SOCIAL MEDIA
              </a>
              <a href="#" className="text-3xl font-bold hover:text-[#e33a07]">
                E-COMMERCE
              </a>
              <a href="#" className="text-3xl font-bold hover:text-[#5a4038]">
                WEBSITES
              </a>
            </div>

            <div className="flex-1 flex justify-center items-end">
              <div className="text-start">
                <p className="text-2xl font-bold leading-snug ">
                  Strategik is a small digital marketing 
                  <br />
                  agency with big and award-winning 
                  <br />
                  ideas for creative brands.
                </p>
              </div>
            </div>

            <div className="circular-container">
              {/* Teks melingkar */}
              <div className="circular-text">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[11px] font-medium fill-white">
                    <textPath href="#circlePath" startOffset="0">
                      BOOK A CALL BOOK A CALL BOOK A CALL
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Ikon di tengah */}
              <div className="icon-center text-normal text-7xl font-serif">
              <PiAsterisk />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-12">
            <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3 gap-8">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-800/20 transform -skew-y-12"
                  ></div>
                ))}
              </div>

              <div className="relative p-8 flex justify-center items-center">
                <div className="w-2/3">
                  <Image
                    src="/assets/qqq.jpg"
                    alt="Laptop displaying 3D cube"
                    width={800}
                    height={500}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Content;
