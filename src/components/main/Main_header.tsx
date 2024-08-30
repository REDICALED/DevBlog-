import Pirate_circle from "/pirate_circle.svg";
import Image from 'next/image'
import { motion } from 'framer-motion';
import Pirate_logo from "@/components/main/Pirate_logo";

export default function Main_header() {
    const LgimageStyle = {
        width: '25vh',
        height: '25vh',
        Animation: 'spin 8s linear infinite',
        spin: 'spin 8s linear infinite',
    }

    const imageStyle = {
        width: '10vh',
        height: '10vh',
    }
    return (
        <>
            <div className="">
            <span className=" h-[20vw] mt-10 flex flex-row justify-center items-center">
                    <span className="">
                    <Pirate_logo/>
                    </span>
                    <span className="font-semibold text-[11vw]">
                        Redi Blog
                    </span>
                </span>
            </div>
        </>
    );
}
