import { Inter } from 'next/font/google'
import ErrorBoundary from '../components/errorBoundary'
import Head from 'next/head'
import NavBar from '../components/navBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs Starter app by Rahad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`mx-auto ${inter.className}`}>
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
        <div className="flex mt-20 justify-center">
          <a
            className="underline text-sky-400"
            href="https://github.com/rahadkc/nextjs-typescript-redux-jest-cypress-starter"
          >
            Give a ⭐️ if you like this project! <strong className="text-orange-400 text-2xl">&#9755;</strong>
          </a>
        </div>
      </main>
    </>
  )
}
