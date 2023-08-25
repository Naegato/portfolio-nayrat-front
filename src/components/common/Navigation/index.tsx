'use client'

import cn from 'classnames';
import styles from './navigation.module.scss';
import { usePathname } from 'next/navigation';
import { Link } from '@/components/common/Link';

const links = [
  { href: '/projects', label: 'Projets' },
  { href: '/cv', label: 'Curriculum' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation = ({ className = null }) => {
  const pathname = usePathname();
  
  return <nav className={cn(styles.container, { [className]: className })}>
    {links.map(({ href, label }) => {
      const isActive = pathname === href;
      
      return <Link key={href} href={href} className={cn(styles.link, { [styles.active]: isActive })}>
        {label}
      </Link>
    })}
  </nav>;
}