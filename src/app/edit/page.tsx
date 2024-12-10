// 'use client';
import Tiptap from "@/components/Tiptap/Tiptap";
import Link from "next/link";
import '@mantine/dropzone/styles.css';

export default function edit() {

    return (
        <div>
            <div className="border-2 border-black">
                <Tiptap/>
            </div>
        </div>
    );
}
