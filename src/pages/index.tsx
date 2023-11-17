import { Inter } from 'next/font/google'
import ErrorBoundary from '../components/errorBoundary'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Event Management App - Rahad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`mx-auto ${inter.className}`}>
        <ErrorBoundary>
          <Link className="button" href="/about">
            About
          </Link>
        </ErrorBoundary>
      </main>
    </>
  )
}
