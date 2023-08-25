import { fetchStrapi } from '@/tools/fetchStrapi';
import cn from 'classnames';
import styles from './contact.module.scss';
import { Link } from '@/components/common/Link';

export const Contact = async ({ className = null }) => {
  const settings = await fetchStrapi('single', 'setting');
  
  const {
    email = null,
    linkedin = null,
    instagram = null,
    behance = null,
    phone = null
  } = settings?.data?.attributes;
  
  return <div className={cn(styles.container, {[className]: className})}>
    {email && <Link href={email} className={styles.email} />}
    {phone && <Link href={phone} className={styles.phone} />}
    {linkedin && <Link href={linkedin} className={styles.linkedin} />}
    {instagram && <Link href={instagram} className={styles.instagram} />}
    {behance && <Link href={behance} className={styles.behance} />}
  </div>
}