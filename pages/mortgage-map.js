import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

export default function MortgageMap(){

return(
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <p>As part of a retrospective event on the 10-year anniversary of the financial crisis, the Economic Studies program at Brookings produced a number of research looking into the causes of the crisis. I created an <a href="https://www.brookings.edu/blog/up-front/2018/09/10/mapping-the-boom-in-nonbank-mortgage-lending-and-understanding-the-risks/" className='text-purple-600 hover:text-purple-800'>interactive map</a> using D3.js to accompany one such piece. The map shows where the share of nonbank mortgages are greatest in the U.S. On hover over a county, a tool tip displays both the percentage of all mortgages as well as the county name.</p>
    <div className="mt-4 mb-4">
    <Image
      priority="true"
        src='/images/mortgage-market-map.png'
        width='799'
        height = '544' />
        </div>

        <h1 className="text-xl text-purple-500 font-bold">Problems</h1>
<p>One problem I encountered while designing this interactive was getting the code to work on the Brookings site. It was my first time shipping code to production and I encountered a number of issues in Brookings dev environment compared with my local server such as with the placement of the tooltip on the map. The interactive lived in a frame on the webpage, meaning I had a number of problems to work around to get the tooltip to display correctly.</p>

<h1 className="text-xl text-purple-500 font-bold">Solutions</h1>
<p>Ultimately, it was a lot of trial and error to reach the finished product but it was a good exercise in designing for clients who’s websites I am unfamiliar with and finding solutions to those problems.</p>

  </Layout>
)

}
