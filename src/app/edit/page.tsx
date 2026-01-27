'use client';

import { MantineProvider } from '@mantine/core';
import Tiptap from '@/components/Tiptap/Tiptap';

import '@mantine/dropzone/styles.css';


export default function Edit() {

      
    return (
        <>
        <MantineProvider>      
                    <div className="border-2 border-black">
                    <Tiptap/>
                </div>
        </MantineProvider>
        </>
    );
}
