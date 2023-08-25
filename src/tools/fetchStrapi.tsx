import { noCache, strapiUrl } from '@/tools/tools';
import * as qs from 'qs';

export type FilterOperator = '$eq' | '$eqi' | '$ne' | '$lt' | '$lte' | '$gt' | '$gte' | '$in' | '$notIn' | '$notContains' | '$containsi' | '$notContainsi' | '$null' | '$notNull' | '$between' | '$startsWith' | '$startsWithi' | '$endsWith' | '$endsWithi' | '$or' | '$and' | '$not'

export type StrapiQuery = {
  populate?: string | {
    [key: string]: StrapiQuery,
  };
  fields?: string | string[],
  sort?: string | string[],
  publicationState?: 'live' | 'preview',
  pagination?: {
    page?: number,
    pageSize?: number,
  },
  filters?: {
    [key: string]: {
      [key in FilterOperator]?: any;
    }
  }
}

export type StrapiAttributes = {
  [key: string]: any,
}

export type StrapiObject = {
  id: string,
  attributes: StrapiAttributes,
}

export type StrapiResponse = {
  data: StrapiObject,
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number,
    }
  }
}

export type fetchStrapiType = (collection: 'single' | string, id?: string, query?: StrapiQuery) => Promise<StrapiResponse>;
export const fetchStrapi: fetchStrapiType = async (collection, id = null, query = null) => {
  const url = `${strapiUrl}/api/${collection === 'single' ? id : `${collection}${id ? `/${id}` : ''}`}`;
  
  const queryString = query ? `?${qs.stringify(query, { encodeValuesOnly: true })}` : '';
  
  return await fetch(url + queryString, noCache ? { cache: 'no-store' } : { cache: "force-cache", next : { revalidate: 600 } }).then(res => res.json());
}