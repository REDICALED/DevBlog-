import '@mantine/dropzone/styles.css';
import dynamic from 'next/dynamic';

const Editmodal = dynamic(() => import('@/components/edit/edit_modal'), {
    ssr: false
})

export default function Edit() {



      
    return (
        <>
        <Editmodal/>
            
        </>
    );
}
