import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const linkClass = 'text-purple-300 hover:text-purple-500 font-bold'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact | ${siteTitle}`}</title>
      </Head>
      <h1 className="text-2xl font-bold text-purple-500">Get in touch</h1>
      <p className="mt-4">The best way to reach me is by email or LinkedIn.</p>
      <ul className="list-disc ml-6">
        <li><a className={linkClass} href="mailto:kthib16@gmail.com">kthib16@gmail.com</a></li>
        <li><a className={linkClass} href="https://www.linkedin.com/in/thibodeauxkevin/">LinkedIn</a></li>
        <li><a className={linkClass} href="https://github.com/kthib16">GitHub</a></li>
      </ul>
    </Layout>
  )
}
