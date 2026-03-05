import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Nordmaster Group',
  description: 'Industrial welding and metalwork services in Finland.',
  metadataBase: new URL('https://www.nordmastergroup.com'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
