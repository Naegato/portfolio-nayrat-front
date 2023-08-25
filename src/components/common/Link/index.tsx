'use client'

import React from 'react';
import NextLink from 'next/link';
import * as yup from 'yup';
import "yup-phone";

export const Link = ({ href, children = null, ...props }) => {
  const isEmail = yup.string().email().isValidSync(href);
  const isPhone = yup.string().phone().isValidSync(href);
  
  return <NextLink href={isEmail ? `mailto:${href}` : isPhone ? `tel:${href}` : href} {...props}>
    {children}
  </NextLink>
}