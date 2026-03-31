'use client';

import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ImageSwiperView from './ImageSwiperView';

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
            return JSON.parse(value);
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
  const images = node.attrs.images ?? [];

  return [
    'div',
    mergeAttributes(HTMLAttributes, {
      'data-type': 'image-swiper',
      class: 'swiper image-swiper-html',
    }),
    [
      'div',
      { class: 'swiper-wrapper' },
      ...images.map((image: { src: string }, index: number) => [
        'div',
        { class: 'swiper-slide image-swiper-html__slide' },
        [
          'img',
          {
            src: image.src,
            alt: `swiper-image-${index}`,
            class: 'image-swiper-html__image',
          },
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