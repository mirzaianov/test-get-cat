import { useState } from 'react';
import ImageSkeleton from './image-skeleton';
import useFetch from '../hooks/useFetch';
import { API_URL } from '../constants';
import Controls from './controls';
import Button from './button';
import Image from './image';

import styles from './card.module.css';

import { type CatData } from '../types';

export default function Card() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const { data, isLoading, error, fetchData } = useFetch<CatData[]>(API_URL);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Controls
          isEnabled={isEnabled}
          setIsEnabled={setIsEnabled}
          isRefreshing={isRefreshing}
          setIsRefreshing={setIsRefreshing}
        />
        <Button
          handleClick={fetchData}
          isEnabled={isEnabled}
        />
        {error && <div>Error: {error.message}</div>}
        {!isLoading && data && data.length > 0 ? (
          <Image
            catData={data[0]}
            isEnabled={isEnabled}
          />
        ) : (
          <ImageSkeleton />
        )}
      </div>
    </div>
  );
}
