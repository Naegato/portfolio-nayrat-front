import React from 'react';
import { fetchStrapi } from '@/tools/fetchStrapi';
import styles from './home.module.scss';
import Image from 'next/image';
import { getStrapiAbsoluteMediaUrl } from '@/tools/tools';
import Link from 'next/link';
const Page = async () => {
  
  const homePageDate = await fetchStrapi('single', 'home-page', {
    populate: {
      background_image: {
        populate: '*',
      },
    },
    fields: ['title', 'study'],
  });
  
  const bgImage = homePageDate?.data?.attributes?.background_image?.data?.attributes;
  const title = homePageDate?.data?.attributes?.title;
  const study = homePageDate?.data?.attributes?.study;
  
  return <main className={styles.container}>
    {bgImage && <div className={styles.bgImageContainer}>
      <Image
        src={getStrapiAbsoluteMediaUrl(bgImage?.url)}
        alt={bgImage?.alternativeText}
        priority
        className={styles.bgImage}
        width={454}
        height={480}
      />
    </div>}
    {title && <h1 className={styles.title}>{title}</h1>}
    {study && <p className={styles.study}>{study}</p>}
    <Link className={styles.next}  href="/cv">
      Go home !
    </Link>
  </main>
}

export default Page;