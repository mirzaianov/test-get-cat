import { type CatData } from '../types';

import styles from './image.module.css';

type ImageProps = {
  catData: CatData;
  isEnabled: boolean;
};

export default function Image({ catData, isEnabled }: ImageProps) {
  return (
    <div className={styles.wrapper}>
      {isEnabled && (
        <img
          className={styles.image}
          src={catData.url}
          alt={catData.id}
        />
      )}
    </div>
  );
}
