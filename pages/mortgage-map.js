import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

const link = 'text-blue-700 hover:text-blue-900 underline'

export default function MortgageMap() {
  return (
    <Layout>
      <Head>
        <title>{`Mortgage Map | ${siteTitle}`}</title>
      </Head>
      <h1 className='text-3xl font-bold text-slate-900 mb-4'>Nonbank Mortgage Lending Map</h1>
      <p className='text-slate-700'>
        As part of a retrospective event on the 10-year anniversary of the financial crisis, the Economic Studies program at Brookings produced a series of research pieces on its causes. I built an{' '}
        <a className={link} href='https://www.brookings.edu/blog/up-front/2018/09/10/mapping-the-boom-in-nonbank-mortgage-lending-and-understanding-the-risks/'>interactive map</a>{' '}
        with D3.js to accompany one of them. It shows where nonbank lenders hold the greatest share of mortgages in the U.S.; hovering over a county shows its name and the percentage of all mortgages.
      </p>
      <div className='my-6 rounded-lg overflow-hidden border border-slate-200 bg-white'>
        <Image
          priority={true}
          src='/images/mortgage-market-map.png'
          alt='Map of the United States showing the share of nonbank mortgages by county'
          width={799}
          height={544}
        />
      </div>

      <h2 className='text-xl font-semibold text-slate-900 mb-2'>Challenge</h2>
      <p className='text-slate-700'>
        It was the first time I shipped code to production, and the Brookings environment behaved differently from my local server. The interactive lived in a frame on the page, so I had to work around the frame to get the tooltip positioned correctly.
      </p>

      <h2 className='text-xl font-semibold text-slate-900 mb-2'>Outcome</h2>
      <p className='text-slate-700'>
        It took a lot of trial and error, but it was good practice in building for a site I did not control and debugging inside someone else&apos;s environment.
      </p>
    </Layout>
  )
}
