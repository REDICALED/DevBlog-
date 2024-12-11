import styles from '../../app/post/[id]/styles.module.css';

export default function PostHtmlContent({ content }: { content: string }) {
    return (
        <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }