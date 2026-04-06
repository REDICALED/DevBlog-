'use client';

import { NodeViewWrapper } from '@tiptap/react';
import { useEffect, useRef, useState } from 'react';

export default function ResizableImageView(props: any) {
  const { node, updateAttributes, selected } = props;
  const src = node?.attrs?.src;
  const alt = node?.attrs?.alt || '';
  const title = node?.attrs?.title || '';
  const width = node?.attrs?.width || '50vw';

  const [currentWidth, setCurrentWidth] = useState(width);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setCurrentWidth(width);
  }, [width]);

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const startX = event.clientX;
    const wrapperWidth = wrapperRef.current?.offsetWidth || 0;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const diffX = moveEvent.clientX - startX;
      const nextWidth = Math.max(120, wrapperWidth + diffX);
      setCurrentWidth(`${nextWidth}px`);
    };

    const onMouseUp = (moveEvent: MouseEvent) => {
      const diffX = moveEvent.clientX - startX;
      const nextWidth = Math.max(120, wrapperWidth + diffX);

      updateAttributes({
        width: `${nextWidth}px`,
      });

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  if (!src) {
    return null;
  }

  return (
    <NodeViewWrapper
      as="span"
      className="inline-block align-middle my-2"
      data-drag-handle
    >
      <span
        ref={wrapperRef}
        className={`relative inline-block max-w-full ${selected ? 'ring-1 ring-black' : ''}`}
        style={{ width: currentWidth, minWidth: '120px' }}
      >
        <img
          src={src}
          alt={alt}
          title={title}
          draggable={false}
          className="block w-full max-w-full h-auto object-contain select-none"
        />

        {selected && (
          <button
            type="button"
            onMouseDown={handleMouseDown}
            className="absolute bottom-0 right-0 z-10 h-4 w-4 cursor-se-resize border border-black bg-white"
            contentEditable={false}
            tabIndex={-1}
            aria-label="resize image"
          />
        )}
      </span>
    </NodeViewWrapper>
  );
}