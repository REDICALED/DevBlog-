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
            <div className=" hidden lg:block">
            <div className="text-right h-[25vh]">
                    <span className=" font-semibold text-[25vh] leading-[25vh] flex">
                    <Pirate_logo/>
                    Redicaled
                    </span>
                </div>
            </div>
            <div className="lg:hidden">
                <div className="text-right h-[10vh]">
                    <span className=" font-semibold text-[10vh] leading-[10vh] flex">
                    <Pirate_logo/>
                        Redicaled
                    </span>
                </div>
            </div>
        </>
    );
}
