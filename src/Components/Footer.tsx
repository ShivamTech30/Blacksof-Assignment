import React from "react";
import Logo from "../assets/logo.png";


const Footer: React.FC = () => {
    return (
        
        <footer className="  from-white to-blue-100 text-black px-20 pt-[30px] md:px-[200px]  main-footer  h-[650px]  ">
            <div>
                <div className="mb-[70px]">
                    <img src={Logo} alt="Supreme Group" className="w-[226px] h-[63px] mb-4" />
                </div>
                <div className="  mx-auto grid grid-cols-1 md:grid-cols-4 grid-cols-2  gap-8">
                    {/* Logo Section */}


                    {/* Applications Section */}
                    <div>
                        <h3 className="font-[700] mb-3 text-[20px]">APPLICATIONS</h3>
                        <ul className="space-y-2 bootom-hight-spacing  ">
                            <li >Apparel</li>
                            <li>Automotive</li>
                            <li>Filtration</li>
                            <li>Customised Nonwoven</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="font-[700] mb-3 text-[20px]">COMPANY</h3>
                        <ul className="space-y-2 bootom-hight-spacing">
                            <li>Who We Are</li>
                            <li>Global Competency</li>
                            <li>Innovation</li>
                            <li>ESG Impact</li>
                        </ul>
                    </div>

                    {/* More & Follow Us Section */}
                    <div>
                        <h3 className="font-[700] mb-3 text-[20px]">MORE</h3>
                        <ul className="space-y-2 bootom-hight-spacing">
                            <li>Contact Us</li>
                            <li>Careers</li>
                        </ul>

                    </div>

                    <div>
                        <h3 className="font-[700] mb-3 text-[20px]">FOLLOW US</h3>
                        <ul className="bootom-hight-spacing">
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="lg:mt-[100px]  sm:mt-[40px]     text-[16px] text-[black] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:text-center   md:text-left lg:text-left  ">
                    <p className=" ">©2024. All Rights Reserved.</p>
                    <p className=" hidden lg:block md:block">Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</p>
                </div>
            </div>
        </footer>
       
    );
};

export default Footer;
