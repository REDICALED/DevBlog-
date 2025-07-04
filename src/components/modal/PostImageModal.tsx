import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useRecoilState } from 'recoil';
import { PostImageModalState } from '@/Atoms/ModalsAtom';
import { useEffect } from 'react';
import Image from 'next/image';
import AddPhoto from '@/assets/icons/AddPhoto.png'
import {resizeFile} from '@/utils/ResizeFile';

export function PostImageModal(props: any) {
  const [opened, { open, close }] = useDisclosure(false);

  const handleUploadPhoto = async ( files: FileList | null) => {
    if (!files) {
      return;
    }
  
    const file = await resizeFile(files[0]);
    const formData = new FormData();
    const ext = file.type.split('/')[1];
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, '');
    const filename = `${timestamp}.${ext}`;
    formData.append('path', `${props.uuidstate}/${filename}`);
    formData.append('caldate', props.calDate.toISOString().slice(0, 10));
    formData.append('file', file);
    if (file) {
      const reader = new FileReader();
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.data) {
        props.editor.commands.setImage({ src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${result.data.path}` });
      } else {
        console.error(result.error);
      }
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
      <button
        type="button"
        className="relative cursor-pointer border border-black p-[10px] hover:bg-gray-200 "
      >
        <input
          type="file"
          className="absolute top-0 left-0 w-8 h-8 outline-none opacity-0 file:cursor-pointer"
          accept="image/*"
          onChange={(e) => {
            handleUploadPhoto(e.target.files);
          }}
        />
        <Image alt="" src={AddPhoto} className="w-5 h-5"/>
  
      </button>
      </Modal>

      <Button className="w-5 h-5" variant="default" onClick={open}>
        <Image alt="" src={AddPhoto} className="w-5 h-5"/>
      </Button>
    </>
  );
}