'use client';

import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ImageSwiperView from './ImageSwiperView';

type SwiperImageItem = {
  src: string;
  caption?: string;
};

export const ImageSwiper = Node.create({
  name: 'imageSwiper',

  group: 'block',

  atom: true,

  selectable: true,

  draggable: true,

  addAttributes() {
    return {
      images: {
        default: [],
        parseHTML: (element) => {
          const value = element.getAttribute('data-images');

          if (!value) {
            return [];
          }

          try {
            const parsed = JSON.parse(value);

            if (!Array.isArray(parsed)) {
              return [];
            }

            return parsed.map((image: any) => ({
              src: image?.src || '',
              caption: image?.caption || '',
            }));
          } catch (error) {
            console.error(error);
            return [];
          }
        },
        renderHTML: (attributes) => {
          return {
            'data-images': JSON.stringify(attributes.images ?? []),
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="image-swiper"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    const images: SwiperImageItem[] = node.attrs.images ?? [];

    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'image-swiper',
        class: 'swiper image-swiper-html',
      }),
      [
        'div',
        { class: 'swiper-wrapper' },
        ...images.map((image: SwiperImageItem, index: number) => [
          'div',
          { class: 'swiper-slide image-swiper-html__slide' },
          [
            'div',
            { class: 'image-swiper-html__inner' },
            [
              'img',
              {
                src: image.src,
                alt: `swiper-image-${index}`,
                class: 'image-swiper-html__image',
              },
            ],
            ...(image.caption
              ? [
                  [
                    'div',
                    {
                      class: 'image-swiper-html__caption',
                    },
                    image.caption,
                  ],
                ]
              : []),
          ],
        ]),
      ],
      ['div', { class: 'swiper-pagination' }],
      ['div', { class: 'swiper-button-prev' }],
      ['div', { class: 'swiper-button-next' }],
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageSwiperView);
  },
});