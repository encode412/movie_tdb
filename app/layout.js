
import './globals.css'
import { DM_Sans } from 'next/font/google'

const DMSans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Database',
  description: 'HNG_Stage_2_Frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <main>{children}</main>
        </body>
    </html>
  )
}
