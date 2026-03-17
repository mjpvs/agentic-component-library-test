import styles from './CodeBlock.module.css';

export interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = false,
  className = '',
}: CodeBlockProps) {
  const lines = code.split('\n');

  return (
    <div className={`${styles.container} ${className}`}>
      {language && <div className={styles.language}>{language}</div>}
      <pre className={styles.pre}>
        <code className={styles.code}>
          {lines.map((line, index) => (
            <span key={index} className={styles.line}>
              {showLineNumbers && (
                <span className={styles.lineNumber}>{index + 1}</span>
              )}
              <span className={styles.lineContent}>{line}</span>
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
