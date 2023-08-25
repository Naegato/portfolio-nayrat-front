import React from 'react'
import type { Metadata } from 'next'
import { FC, ReactNode } from 'react';
import '@/styles/global.scss';


type RootLayoutProps = {
  children: ReactNode,
}

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Emeline Nayrat',
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
