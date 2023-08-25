import { fetchStrapi } from '@/tools/fetchStrapi';

const Page = async () => {
  const page = await fetchStrapi('single', 'contact-page');
  
  const title = page?.data?.attributes?.title;
  
  return <div>
    <h1>{title}</h1>
  </div>
}

export default Page