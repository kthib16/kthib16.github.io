import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

export default function Experience(){

return(
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <h1 className="text-xl text-purple-500 font-bold">Experience</h1>

    <h2 className="text-lg text-purple-500 font-bold">Work</h2>
    <ul className='list-disc ml-6 mb-4'>
      <li><strong>Capital One</strong> - Software engineer working in React, TypeScript, Vue, Angular and Node.js, with AWS (ECS/Fargate) deployments.</li>
      <li><strong>Federal Reserve Board</strong> - Public communications strategist: web content, CMS administration and SEO.</li>
      <li><strong>Brookings Institution</strong> - Web content and digital media specialist, including data visualization and interactive graphics built with D3.js.</li>
    </ul>

    <h2 className="text-lg text-purple-500 font-bold">Training</h2>
    <p>Below are some of the trainings and courses I've taken. I'm constantly looking to learn more, so this list will continue to update:</p>

    <h2>Bootcamps</h2>
    <p>
    <ul className='list-disc'>
      <li><strong>Bloc</strong> - Frontend Fundamentals
        <ul ><li>Learned Angular, JQuery, and vanilla Javascript</li></ul>
      </li>
      <li><strong>General Assembly</strong> - <a href='https://drive.google.com/file/d/1jJsNC1mGrQY6xqoxakWchHHPQwP9tTMF/view?usp=sharing' className='text-purple-300 hover:text-purple-500'>Javascript Development</a>
        <ul><li>Learned React, Bootstrap, Databases like Firebase, APIs</li></ul>
      </li>
    </ul>
    </p>

    <h2>React</h2>
    <p><ul><li><strong>React</strong> - <a href="https://reactjs.org/docs/hooks-intro.html" className='text-purple-300 hover:text-purple-500'>Introducing React Hooks</a></li></ul></p>

    <h2>NextJS</h2>
      <p><ul><li><a href="https://nextjs.org/learn/basics/create-nextjs-app" className='text-purple-300 hover:text-purple-500'>NextJS tutorial</a></li></ul></p>

    <h2>Kotlin</h2>
    <p><ul><li><strong>Google</strong> - <a href="https://grow.google/certificates/android-developer/" className='text-purple-300 hover:text-purple-500'>Android Development</a></li></ul></p>

    <h2>Javascript</h2>
    <p><ul><li><strong>Free Code Camp</strong> - <a href="https://www.freecodecamp.org/certification/kthib16/javascript-algorithms-and-data-structures" className='text-purple-300 hover:text-purple-500'>Javascript Algorithms and Data Structures</a> (300 hours)</li></ul></p>

  </Layout>
)

}
