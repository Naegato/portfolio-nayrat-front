import styles from './layout.module.scss';
import React from 'react';
import { Navigation } from '@/components/common/Navigation';
import { Contact } from '@/components/common/Contact';


const Layout = ({ children }) => {
  return <main>
    <h1 className={styles.title}>Emeline NAYRAT</h1>
    <Navigation />
    <Contact />
    {children}
  </main>
}

export default Layout;