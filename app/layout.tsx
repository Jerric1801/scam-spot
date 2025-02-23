import '@/app/styles/globals.css' 
import { Merriweather, Work_Sans, Roboto, Roboto_Condensed } from 'next/font/google'; 

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-merriweather', 
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'], 
  variable: '--font-work-sans', 
});

const roboto = Roboto({ 
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Example weights
    variable: '--font-roboto',
  });
  
  const robotoCondensed = Roboto_Condensed({ 
    subsets: ['latin'],
    weight: ['400', '700'], // Example weights
    variable: '--font-roboto-condensed',
  });

export const metadata = {
  title: 'Scam-Spot',
  description: 'Voucher redemption and scam education community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${workSans.variable} ${roboto.variable} ${robotoCondensed.variable}`}>
      <body>{children}</body>
    </html>
  )
}