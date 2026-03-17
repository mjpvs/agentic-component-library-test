import styles from './Video.module.css';

export interface VideoProps {
  videoId: string;
  className?: string;
  aspectRatio?: '16-9' | '4-3' | '1-1';
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  rel?: boolean;
  title?: string;
}

const aspectClasses: Record<'16-9' | '4-3' | '1-1', string> = {
  '16-9': styles['aspect-169'],
  '4-3': styles['aspect-43'],
  '1-1': styles['aspect-11'],
};

export function Video({
  videoId,
  className = '',
  aspectRatio = '16-9',
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  rel = false,
  title = 'YouTube video',
}: VideoProps) {
  const params = new URLSearchParams({
    ...(autoplay && { autoplay: '1' }),
    ...(controls && { controls: '1' }),
    ...(loop && { loop: '1' }),
    ...(muted && { muted: '1' }),
    ...(!rel && { rel: '0' }),
  });

  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <div className={`${styles.video} ${aspectClasses[aspectRatio]} ${className}`}>
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
