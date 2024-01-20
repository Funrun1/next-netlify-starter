import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> "Infinity Games" </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title=" Please Enter the password." />

        </p>
      </main>

      <Footer />
    </div>
  )
}
