'use client';

import { NodeViewWrapper } from '@tiptap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ImageSwiperView(props: any) {
  const images = props.node?.attrs?.images ?? [];

  if (!images.length) {
    return null;
  }

  return (
    <NodeViewWrapper className="my-4" data-drag-handle>
      <div className="border border-black p-2 bg-white">
        <Swiper slidesPerView={1} spaceBetween={12}>
          {images.map((image: { src: string }, index: number) => (
            <SwiperSlide key={`${image.src}-${index}`}>
              <img
                src={image.src}
                alt={`swiper-image-${index}`}
    className="block w-auto max-w-full h-auto max-h-[70vh] mx-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </NodeViewWrapper>
  );
}