'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Image from 'next/image';
import AddPhoto from '@/assets/icons/AddPhoto.png';
import { resizeFile } from '@/utils/ResizeFile';

type SwiperImageItem = {
  src: string;
  caption?: string;
};

export function PostImageModal(props: any) {
  const [opened, { open, close }] = useDisclosure(false);
  const [imageUrlText, setImageUrlText] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const insertImagesToEditor = (images: SwiperImageItem[]) => {
    if (!images.length) {
      return;
    }

    if (images.length === 1) {
      props.editor.commands.setImage({
        src: images[0].src,
      });
    } else {
      props.editor.commands.insertContent({
        type: 'imageSwiper',
        attrs: {
          images,
        },
      });
    }

    setImageUrlText('');
    close();
  };

  const uploadFiles = async (files: File[]) => {
    if (!files.length) {
      return;
    }

    const uploadedImages: SwiperImageItem[] = [];

    for (const originFile of files) {
      const resizedFile = await resizeFile(originFile);

      const formData = new FormData();
      const ext = resizedFile.type?.split('/')[1] || 'jpg';
      const timestamp = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, '');
      const randomKey = Math.random().toString(36).slice(2, 8);
      const filename = `${timestamp}_${randomKey}.${ext}`;

      formData.append('path', `${props.uuidstate}/${filename}`);

      if (props.calDate) {
        formData.append('caldate', props.calDate.toISOString().slice(0, 10));
      }

      formData.append('file', resizedFile, filename);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.data) {
        uploadedImages.push({
          src: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${result.data.path}`,
          caption: '',
        });
      } else {
        console.error(result.error);
      }
    }

    insertImagesToEditor(uploadedImages);
  };

  const handleUploadPhoto = async (files: FileList | null) => {
    if (!files || files.length === 0) {
      return;
    }

    setIsUploading(true);

    try {
      await uploadFiles(Array.from(files));
    } finally {
      setIsUploading(false);
    }
  };

  const handleInsertExternalUrls = () => {
    const urls = imageUrlText
      .split('\n')
      .map((value) => value.trim())
      .filter(Boolean);

    if (!urls.length) {
      return;
    }

    const externalImages: SwiperImageItem[] = urls.map((url) => ({
      src: url,
      caption: '',
    }));

    insertImagesToEditor(externalImages);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="이미지 업로드" centered>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="relative cursor-pointer border border-black p-[10px] hover:bg-gray-200 disabled:opacity-50"
            disabled={isUploading}
          >
            <input
              type="file"
              multiple
              className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
              accept="image/*"
              onChange={(e) => {
                handleUploadPhoto(e.target.files);
                e.currentTarget.value = '';
              }}
            />
            <div className="flex items-center justify-center gap-2">
              <Image alt="" src={AddPhoto} className="h-5 w-5" />
              <span>로컬 이미지 업로드</span>
            </div>
          </button>

          <textarea
            value={imageUrlText}
            onChange={(e) => setImageUrlText(e.target.value)}
            placeholder={`외부 이미지 URL을 한 줄에 하나씩 붙여넣으세요
https://example.com/a.jpg
https://example.com/b.png`}
            className="min-h-[140px] w-full resize-y border border-black p-3 focus:outline-none"
            disabled={isUploading}
          />

          <button
            type="button"
            onClick={handleInsertExternalUrls}
            className="cursor-pointer border border-black p-[10px] hover:bg-gray-200 disabled:opacity-50"
            disabled={isUploading || !imageUrlText.trim()}
          >
            외부 이미지 URL 바로 삽입
          </button>
        </div>
      </Modal>

      <Button className="w-5 h-5" variant="default" onClick={open}>
        <Image alt="" src={AddPhoto} className="w-5 h-5" />
      </Button>
    </>
  );
}