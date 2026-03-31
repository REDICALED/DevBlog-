import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Image from 'next/image';
import AddPhoto from '@/assets/icons/AddPhoto.png';
import { resizeFile } from '@/utils/ResizeFile';

export function PostImageModal(props: any) {
  const [opened, { open, close }] = useDisclosure(false);

  const handleUploadPhoto = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }

    const uploadedImages: { src: string }[] = [];

    for (const originFile of Array.from(files)) {
      const file = await resizeFile(originFile);

      const formData = new FormData();
      const ext = file.type.split('/')[1];
      const timestamp = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, '');
      const randomKey = Math.random().toString(36).slice(2, 8);
      const filename = `${timestamp}_${randomKey}.${ext}`;

      formData.append('path', `${props.uuidstate}/${filename}`);
      formData.append('caldate', props.calDate.toISOString().slice(0, 10));
      formData.append('file', file);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.data) {
        uploadedImages.push({
          src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${result.data.path}`,
        });
      } else {
        console.error(result.error);
      }
    }

    if (!uploadedImages.length) {
      return;
    }

    if (uploadedImages.length === 1) {
      props.editor.commands.setImage({
        src: uploadedImages[0].src,
      });
    } else {
      props.editor.commands.insertContent({
        type: 'imageSwiper',
        attrs: {
          images: uploadedImages,
        },
      });
    }

    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="이미지 업로드" centered>
        <button
          type="button"
          className="relative cursor-pointer border border-black p-[10px] hover:bg-gray-200"
        >
          <input
            type="file"
            multiple
            className="absolute top-0 left-0 w-full h-full outline-none opacity-0 file:cursor-pointer"
            accept="image/*"
            onChange={(e) => {
              handleUploadPhoto(e.target.files);
            }}
          />
          <Image alt="" src={AddPhoto} className="w-5 h-5" />
        </button>
      </Modal>

      <Button className="w-5 h-5" variant="default" onClick={open}>
        <Image alt="" src={AddPhoto} className="w-5 h-5" />
      </Button>
    </>
  );
}