'use client';

import { MantineProvider } from '@mantine/core';
import Tiptap from '@/components/Tiptap/Tiptap';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

import '@mantine/dropzone/styles.css';
import { useEffect, useState } from 'react';

export default function Edit() {
    const [opened, { open, close }] = useDisclosure(true);
    const [validate, SetValidate] = useState(false);
    const [password, SetPassword] = useState('');
    useEffect(()=>{

    },[])

    return (
        <>
        
            <MantineProvider>
            
            {
                !validate &&
                <Modal
                opened={opened}
                onClose={close}
                title="관리자 외 출입금지"
                overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
                }}
            >
                {
                    <div>
                    <input type="text" placeholder="누구쇼" 
                    onChange={(e) => SetPassword(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if(password === process.env.NEXT_PUBLIC_PASSWORD){
                            SetValidate(true);
                            close();
                        }
                    }
                    }}
                    className=" focus:outline-none
                focus:border-[3px]
                transition-[background-color]
                duration-[0.45s]
                placeholder-[var(--text-color)] w-[300px] h-[40px] border-2 rounded-lg p-2 border-[var(--text-color)] text-[var(--text-color)] bg-[var(--bg-color)]" />
                
                </div>
                }
            </Modal>
            }
            {
                validate &&
                <div className="border-2 border-black">
                <Tiptap/>
            </div>
            }
            </MantineProvider>
        </>
    );
}
