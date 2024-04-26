import '@/app/ui/global.css';
import { inter, lusitana } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dhairya - Learn',
  // description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
