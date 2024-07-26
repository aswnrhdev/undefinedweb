import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { FaUpwork } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";

export const Footer = () => {
    return (
        <div className="flex flex-col items-center w-dvw  bg-black text-white px-10 py-5">
            <hr className="bg-gray-800 w-full my-4"/>
            <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
                <Link href={"/"} className="md:self-start max-md:mb-5">
                    <Image
                        src={`/image.png`}
                        alt="logo"
                        width={200}
                        height={50}
                        className="bg-blend-multiply"
                    />
                </Link>

                <div className="flex flex-col max-md:mb-5">
                    <p>Follow us on</p>
                    <div className="flex mt-3">
                        <div className="p-1 bg-black border-primary border-[2px] text-primary rounded-md me-2 cursor-pointer" style={{boxShadow: "2px 2px 0px 0px #EEE4B1"}}>
                            <IoLogoInstagram size={24} />
                        </div>
                        <div className="p-1  bg-black border-primary border-[2px] text-primary rounded-md me-2 cursor-pointer" style={{boxShadow: "2px 2px 0px 0px #EEE4B1"}}>
                            <IoLogoGithub size={24} />
                        </div>
                        <div className="p-1 bg-black border-primary border-[2px] text-primary rounded-md me-2 cursor-pointer" style={{boxShadow: "2px 2px 0px 0px #EEE4B1"}}>
                            <FaUpwork size={24} />
                        </div>
                        <div className="p-1  bg-black border-primary border-[2px] text-primary rounded-md me-2 cursor-pointer" style={{boxShadow: "2px 2px 0px 0px #EEE4B1"}}>
                            <GrLinkedinOption size={24} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr className="bg-gray-800 w-full my-4"/> */}
            <p className="text-center text-sm">
                Undefined, All rights reserved 2024
            </p>
        </div>
    );
};
