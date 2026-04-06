'use client';

import Image from '@tiptap/extension-image';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ResizableImageView from './ResizableImageView';

export const ResizableImage = Image.extend({
  inline() {
    return true;
  },

  group() {
    return 'inline';
  },

  draggable: true,

  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: '50vw',
        parseHTML: (element) => element.getAttribute('data-width') || element.getAttribute('width') || '50vw',
        renderHTML: (attributes) => {
          return {
            'data-width': attributes.width,
            width: attributes.width,
          };
        },
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    const { width, ...rest } = HTMLAttributes;

    return [
      'img',
      {
        ...rest,
        'data-width': width || '50vw',
        style: `width:${width || '50vw'}; max-width:100%; height:auto; object-fit:contain; display:block; margin:0 auto;`,
      },
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageView);
  },
});