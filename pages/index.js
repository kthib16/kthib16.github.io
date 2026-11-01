import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

const name = 'Kevin Thibodeaux'

const description = "Hi, I'm Kevin Thibodeaux, a software engineer in Washington, D.C. I build web applications with React, TypeScript, Vue, Angular and Node.js, and I came to engineering from a background in journalism, design and data visualization."



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className=' text-center md:text-left px-2 mx-auto mt-2 mb-4'>
        <Image
          priority="true"
          src="/images/profile.jpg"
          className='inline-block rounded-full  md:mr-6'
          height='130'
          width='130'
          alt={name}
        />


        <p className='max-w-md inline-block text-base font-light pl-6 '><em>{description}</em>
        <Link href={'/experience'}><p className='cursor-pointer text-sm text-purple-300 hover:text-purple-500 font-bold'>Learn more about my experience &raquo;</p></Link></p>
        </div>


      <div className='flex grid grid-cols-2 gap-4 my-16'>

      <Link href={'/word-guess'}>
       <a className='cursor-pointer hover:animate-pulse hover:drop-shadow-md'>
       <div className='h-24 flex mb-0 pb-0'>
          <img src='/images/Word-Guess.png' alt='Word Guess game screenshot' className='object-cover object-top w-full rounded-t-lg' />
        </div>
        <div className=' bg-purple-300 hover:bg-purple-500 text-white  p-4  rounded-b-lg '>
          <h4 className="text-xl">Word Guess</h4>
          <p className='hidden md:contents'>You've got six chances to guess the right word. Can you do it?</p>
        </div>
      </a>
      </Link>

        <Link href={'/mortgage-map'}>
          <a className='cursor-pointer hover:animate-pulse hover:drop-shadow-md'>
            <div className='h-24 flex mb-0 pb-0'>
              <img src='/images/mortgage-market-map.png' alt='Nonbank mortgage lending map' className='object-cover w-full rounded-t-lg' />
            </div>
            <div className=' bg-purple-300 hover:bg-purple-500 text-white  p-4  rounded-b-lg '>
              <h4 className="text-xl">Mortgage Map</h4>
              <p className='hidden md:contents'>Interactive map created using D3.js while at the Brookings Institution.</p>
            </div>
          </a>
        </Link>

          <a className='cursor-pointer  hover:animate-pulse hover:drop-shadow-md ' href="https://github.com/kthib16/react-calendar-app">
              <div className='h-24 flex mb-0 pb-0'>
                <img src='/images/MyCalendar-App/my-calendar-welcome.png' alt='MyCalendar welcome screen' className='object-cover w-full rounded-t-lg border border-gray-100' />
              </div>
              <div  className=' bg-purple-300 hover:bg-purple-500 text-white rounded p-4 rounded-b-lg'>
                <h4 className='text-xl '>MyCalendar</h4>
                <p className="hidden md:contents">Event tracker built with React, Firebase and the Ticketmaster API. View the code on GitHub.</p>
              </div>
          </a>


      </div>




    </Layout>
  )
}
