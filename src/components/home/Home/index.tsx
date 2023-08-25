import React from 'react';
import Image from 'next/image';

import { getStrapiAbsoluteMediaUrl } from '@/tools/tools';
import styles from './home.module.scss';
import Link from 'next/link';

export const Home = ({ title, study, bgImage }) => {
  
  return <div className={styles.container}>
    {bgImage && <div className={styles.bgImageContainer}>
      <Image
        src={getStrapiAbsoluteMediaUrl(bgImage.url)}
        alt={bgImage.alternativeText}
        priority
        fill
        className={styles.bgImage}
      />
    </div>}
    {title && <h1 className={styles.title}>{title}</h1>}
    {study && <p className={styles.study}>{study}</p>}
    <Link className={styles.next}  href="/cv" />
  </div>
}
