import parse, { Element, HTMLReactParserOptions } from 'html-react-parser';
import { Image } from '../../media/Image/Image';
import { Link } from '../../navigation/Link/Link';
import { Video } from '../../media/Video/Video';
import { CodeBlock } from '../../content/CodeBlock/CodeBlock';
import { Blockquote } from '../../content/Blockquote/Blockquote';
import styles from './RichText.module.css';

export interface RichTextProps {
  html: string;
  className?: string;
}

function extractYouTubeId(src: string): string | null {
  const match = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function getTextContent(element: Element): string {
  const children = element.children;
  if (!children) return '';
  
  return children
    .map((child) => {
      if ('data' in child) {
        return (child as { data: string }).data;
      }
      if ('name' in child) {
        return getTextContent(child as Element);
      }
      return '';
    })
    .join('');
}

const parserOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element)) {
      return;
    }

    const { name, attribs } = domNode;

    if (name === 'img' && attribs?.src) {
      return (
        <Image
          src={attribs.src}
          alt={attribs.alt || ''}
          caption={attribs.caption}
          width={attribs.width}
          height={attribs.height}
        />
      );
    }

    if (name === 'a' && attribs?.href) {
      const text = getTextContent(domNode);
      return (
        <Link href={attribs.href}>
          {text}
        </Link>
      );
    }

    if (name === 'video' && attribs?.src) {
      const youtubeId = extractYouTubeId(attribs.src);
      if (youtubeId) {
        return <Video videoId={youtubeId} title={attribs.title} />;
      }
      return <video src={attribs.src} title={attribs.title} controls />;
    }

    if (name === 'pre') {
      const children = domNode.children;
      if (children && children.length > 0) {
        const codeElement = children[0];
        if (codeElement && 'name' in codeElement && (codeElement as Element).name === 'code') {
          const codeEl = codeElement as Element;
          const codeContent = getTextContent(codeEl);
          const languageClass = codeEl.attribs?.class || '';
          const language = languageClass.replace('language-', '').replace('lang-', '') || undefined;

          return <CodeBlock code={codeContent} language={language} />;
        }
      }
    }

    if (name === 'blockquote') {
      const text = getTextContent(domNode);
      return <Blockquote cite={attribs?.cite}>{text}</Blockquote>;
    }

    return;
  },
};

export function RichText({ html, className = '' }: RichTextProps) {
  const parsed = parse(html, parserOptions);

  return (
    <div className={`${styles.richText} ${className}`}>
      {parsed}
    </div>
  );
}
