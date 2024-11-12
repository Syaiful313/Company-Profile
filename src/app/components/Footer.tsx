import { PiAsterisk, PiFacebookLogo, PiInstagramLogo, PiTiktokLogo, PiYoutubeLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-20 px-20 pb-20">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12 mt-0">
        <div>
          <div className="text-[125px] font-semibold mb-12">LET’S GET STRATEGIK</div>
        </div>
        <div>
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
            <div className="icon-center text-normal text-7xl"><PiAsterisk /></div>
          </div>
        </div>
      </div>
      {/* Footer Main Content */}
      <div className="flex justify-between items-start mt-16">
        {/* Left Side: Logo and Social Media Icons */}
        <div className="flex flex-col mt-10">
          <div className="text-3xl mb-4">Strategik</div>
          <div className="flex space-x-4 text-[#e33a07]">
            <PiFacebookLogo size={30} />
            <PiInstagramLogo size={30} />
            <PiTiktokLogo size={30} />
            <PiYoutubeLogo size={30} />
          </div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex space-x-24 ">
          <div>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Services</li>
              <li>Social Media</li>
              <li>E-commerce</li>
              <li>Websites</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Circular "Book a Call" Element */}
    </div>
  );
};

export default Footer;
