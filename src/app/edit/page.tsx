// 'use client';
import Tiptap from "@/components/Tiptap/Tiptap";
import Link from "next/link";

export default function edit() {

    return (
        <div>
            <Link className=" m-2 cursor-pointer hover:bg-white transition-colors duration-300 " href="/">Home</Link>
            <div className="border-2 border-black">
                <Tiptap/>
            </div>
        </div>
    );
}
