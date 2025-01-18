import { useEffect, useState } from 'react';
import styles from '../../app/post/[id]/styles.module.scss';

export default function PostH3Id({ content, setLinkId }: { content: string, setLinkId: any }) {
  // h3 태그에 id 추가하는 함수
  const addIdToHeadings = (html: string) => {
    return html.replace(/<h3.*?>(.*?)<\/h3>/g, (match, p1) => {
      const id = p1.toLowerCase().replace(/\s+/g, '-'); // 공백을 -로 바꾸어 id로 사용
      console.log(id);
      return `<h3 id="${id}">${p1}</h3>`;
    });
  };
    // content가 변경될 때마다 id를 추가해서 상태에 저장
    const newContent = addIdToHeadings(content);

    // h3 태그의 id를 한 번만 추가하도록 setLinkId 호출
    const ids = content.match(/<h3.*?>(.*?)<\/h3>/g)?.map((match) => match.replace(/<h3.*?>(.*?)<\/h3>/, "$1").toLowerCase().replace(/\s+/g, '-')) || [];
    setLinkId(ids);

  return (
    newContent
  );
}
