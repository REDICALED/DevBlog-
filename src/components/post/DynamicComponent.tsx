import styles from '../../app/post/[id]/styles.module.css';

export default function DynamicComponent({ content }: { content: string }) {
    return (
        <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: content }} />
    );
  }