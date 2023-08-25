export const frontURL = process.env.NEXT_PUBLIC_FRONT_URL;
export const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

export const noCache = process.env.NEXT_PUBLIC_NO_CACHE;

export const getStrapiAbsoluteMediaUrl = (url: string) => {
  return `${strapiUrl}${url?.startsWith('/') ? url : `/${url}`}`;
}