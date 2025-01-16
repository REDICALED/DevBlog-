//edit 페이지 page 컴포넌트

import dynamic from 'next/dynamic'
import { MantineProvider } from '@mantine/core';

const Tiptap = dynamic(() => import('@/components/Tiptap/Tiptap'), {
    ssr: false, // 서버 사이드 렌더링 비활성화
  });
  
import '@mantine/dropzone/styles.css';

export default async function edit() {

    return (
        <div>
            <MantineProvider>
            <div className="border-2 border-black">
                <Tiptap/>
            </div>
            </MantineProvider>
        </div>
    );
}
