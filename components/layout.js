import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export const siteTitle = 'Kevin Thibodeaux | Software Engineer'


export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kevin Thibodeaux — software engineer in Washington, D.C. working with React, TypeScript, Vue, Angular and Node.js."
        />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <header className="w-full sticky top-0 bg-white z-50 py-2 px-4 shadow-md">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <nav className="flex items-center gap-5 font-bold text-purple-600">
            <Link href="/"><a className="hover:text-purple-800">Home</a></Link>
            <Link href="/experience"><a className="hover:text-purple-800">Experience</a></Link>
            <Link href="/contact"><a className="hover:text-purple-800">Contact</a></Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kthib16" aria-label="GitHub profile">
              <Image src='/github.png' alt='' height={25} width={25} />
            </a>
            <a href="https://www.linkedin.com/in/thibodeauxkevin/" aria-label="LinkedIn profile">
              <Image src='/linkedin.png' alt='' height={25} width={29} />
            </a>
          </div>
        </div>
      </header>
      <div className='container mx-auto bg-white min-h-screen pt-4 pb-8 max-w-3xl px-6'>
      <main>{children}</main>
      {!home && (
        <div className='mt-12 mb-4 text-purple-600 hover:text-purple-800 font-bold'>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <hr />
      <footer className=" bottom-0 w-full">
        <p className='text-gray-500'>Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>

    </>
  )
}
