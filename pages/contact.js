import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const link = 'text-blue-700 hover:text-blue-900 font-medium'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`Contact | ${siteTitle}`}</title>
      </Head>
      <h1 className='text-3xl font-bold text-slate-900 mb-4'>Get in touch</h1>
      <p className='text-slate-700'>I'm open to new opportunities, remote or in New Orleans, Austin or Chicago. Email or LinkedIn is the best way to reach me.</p>
      <ul className='bg-white rounded-lg border border-slate-200 divide-y divide-slate-200 max-w-md'>
        <li className='p-4'><span className='block text-sm text-slate-500'>Email</span><a className={link} href='mailto:kthib16@gmail.com'>kthib16@gmail.com</a></li>
        <li className='p-4'><span className='block text-sm text-slate-500'>LinkedIn</span><a className={link} href='https://www.linkedin.com/in/thibodeauxkevin/'>linkedin.com/in/thibodeauxkevin</a></li>
        <li className='p-4'><span className='block text-sm text-slate-500'>GitHub</span><a className={link} href='https://github.com/kthib16'>github.com/kthib16</a></li>
      </ul>
    </Layout>
  )
}
