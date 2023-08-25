'use client'

import React, { useEffect } from 'react';
import styles from './navigation.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { NavigateOptions } from 'next/dist/shared/lib/app-router-context';

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    console.log(window.location.hash)
    console.log('router', router)
    console.log('pathname', pathname)
    console.log('searchParams', searchParams)
    if ( window.location.hash === '#navigation' ) {
      document.getElementById('navigation').scrollIntoView({behavior: "smooth"});
    }
  }, [])
  
  return <div className={styles.container}>
    Nav
  </div>
}