import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Kevin Thibodeaux | Software Engineer'

const navLink = 'text-slate-600 hover:text-blue-700 font-medium'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Kevin Thibodeaux — software engineer in Washington, D.C. building customer-facing web applications with React, TypeScript, Vue, Angular and Node.js."
        />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary" />
      </Head>

      <header className="w-full sticky top-0 bg-white/95 border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <nav className="flex items-center gap-4 sm:gap-6 whitespace-nowrap">
            <Link href="/"><a className={navLink}>Kevin Thibodeaux</a></Link>
            <Link href="/experience"><a className={navLink}>Experience</a></Link>
            <Link href="/contact"><a className={navLink}>Contact</a></Link>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/kthib16" aria-label="GitHub profile">
              <Image src='/github.png' alt='' height={24} width={24} />
            </a>
            <a href="https://www.linkedin.com/in/thibodeauxkevin/" aria-label="LinkedIn profile">
              <Image src='/linkedin.png' alt='' height={24} width={28} />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-10 pb-12 min-h-screen">
        <main>{children}</main>
        {!home && (
          <div className="mt-12 font-medium">
            <Link href="/"><a className="text-blue-700 hover:text-blue-900">&larr; Back to home</a></Link>
          </div>
        )}
        <footer className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kevin Thibodeaux. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </>
  )
}
