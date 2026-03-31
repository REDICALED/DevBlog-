'use client';

import { useEffect, useRef } from 'react';
import styles from '../../app/post/[id]/styles.module.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  html: string;
};

export default function PreviewHtml({ html }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const swiperElements = containerRef.current.querySelectorAll('.image-swiper-html');
    const swiperInstances: Swiper[] = [];

    swiperElements.forEach((element) => {
      (element as HTMLElement).style.setProperty('--swiper-theme-color', 'var(--text-color)');
    (element as HTMLElement).style.setProperty('--swiper-navigation-color', 'var(--text-color)');
    (element as HTMLElement).style.setProperty('--swiper-pagination-color', 'var(--text-color)');

    const swiper = new Swiper(element as HTMLElement, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 12,
        pagination: {
          el: element.querySelector('.swiper-pagination') as HTMLElement,
          clickable: true,
        },
        navigation: {
          nextEl: element.querySelector('.swiper-button-next') as HTMLElement,
          prevEl: element.querySelector('.swiper-button-prev') as HTMLElement,
        },
      });

      swiperInstances.push(swiper);
    });

    return () => {
      swiperInstances.forEach((swiper) => swiper.destroy(true, true));
    };
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={`${styles.wrapper}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}