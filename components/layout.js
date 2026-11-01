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
      <header className="relative h-12 w-full block sticky top-0 bg-white z-50 pt-1 px-2 object-right shadow-xl">
      <div className='absolute hover:animate-pulse hover:cursor-pointer'>

          <button className='bg-purple-300 hover:bg-purple-500 rounded pl-2 pr-2 h-8 text-white font-bold'><a href='/thibodeaux-resume.pdf' download='thibodeaux-resume.pdf'>Resume</a>

          </button></div>


      <div className='absolute right-0 pt-1 pr-2 bottom-0'>


      <Link href="https://github.com/kthib16" passHref>
        <a className='pr-4'>
          <Image
            src='/github.png'
            alt='GitHub'
            height='25px'
            width='25px'

                />
        </a>
        </Link>
        <Link href="https://www.linkedin.com/in/thibodeauxkevin/" passHref>
          <a>
            <Image
              src='/linkedin.png'
              alt='LinkedIn'
              height='25px'
              width='29px'
            />
          </a>
          </Link>
        </div>
      </header>
      <div className='container mx-auto bg-white h-screen pt-4 max-w-3xl px-10'>
      <main>{children}</main>
      {!home && (
        <div className='mt-12 mb-4 text-purple-300 hover:text-purple-500 font-bold'>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <hr />
      <footer className=" bottom-0 w-full">
        <p className='text-purple-300'>Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>

    </>
  )
}
