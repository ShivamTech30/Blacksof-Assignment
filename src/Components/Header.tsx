import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import EandH from "../assets/EandH.png"

const Header: React.FC = () => {


    const [visible, setVisible] = useState(true);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setVisible(currentScrollY < lastScrollY || currentScrollY === 0);
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    


    return (

        <header
            className={` bg-gray-100 py-2 px-[10px]   h-[80px] pt-[20px] lg:px-[125px] md:px-[100px] sm:px-[34px] xs:px-[34px]  fixed top-0 left-0 w-full bg-white shadow-md  transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
                }`}
        >


            <div className="grid grid-cols-3 items-center ">
                {/* Logo Section */}
                <div>
                    <img src={Logo} alt="Supreme Group" className="h-8 md:h-10" />
                </div>

                {/* Right Section */}
                <div className="col-span-2 flex justify-end items-center space-x-4">
                    <button className="bg-[#5CD6FF] text-black px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition">
                        Contact Us
                    </button>
                    <span className="font-semibold">in</span>
                    <span className="flex items-center">
                        <img src={EandH} alt="Language" className="h-4 w-4 mr-1 w-[100%]" />
                        {/* <span className="text-sm font-semibold">ENG</span> */}
                    </span>
                </div>
            </div>
        </header>

        // </div>
    );
};

export default Header;
