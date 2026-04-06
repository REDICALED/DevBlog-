'use client';

import { NodeViewWrapper } from '@tiptap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type SwiperImageItem = {
  src: string;
  caption?: string;
};

export default function ImageSwiperView(props: any) {
  const images: SwiperImageItem[] = props.node?.attrs?.images ?? [];
  const selected = props.selected;
  const updateAttributes = props.updateAttributes;

  if (!images.length) {
    return null;
  }

  const updateCaption = (index: number, caption: string) => {
    const nextImages = images.map((image, imageIndex) => {
      if (imageIndex !== index) {
        return image;
      }

      return {
        ...image,
        caption,
      };
    });

    updateAttributes({
      images: nextImages,
    });
  };

  return (
    <NodeViewWrapper className="my-4" data-drag-handle>
      <div className={`border p-2 bg-white ${selected ? 'border-black' : 'border-black/40'}`}>
        <Swiper slidesPerView={1} spaceBetween={12} autoHeight={true}>
          {images.map((image: SwiperImageItem, index: number) => (
            <SwiperSlide key={`${image.src}-${index}`} className="h-auto">
              <div className="flex h-auto flex-col items-center overflow-visible">
                <img
                  src={image.src}
                  alt={`swiper-image-${index}`}
                  className="block w-auto max-w-full h-auto max-h-[600px] mx-auto object-contain"
                  draggable={false}
                />

                <textarea
                  value={image.caption || ''}
                  onChange={(e) => updateCaption(index, e.target.value)}
                  placeholder="캡션 입력"
                  className="mt-3 min-h-[44px] w-full max-w-[600px] resize-y overflow-visible border border-black px-3 py-2 text-center outline-none"
                  contentEditable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </NodeViewWrapper>
  );
}