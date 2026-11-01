import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

const jobs = [
  {
    title: 'Software Engineer',
    org: 'Capital One',
    dates: 'Feb 2023 – Present',
    bullets: [
      'Build customer-facing financial web applications in React and TypeScript, plus products in Vue.js (Composition API) and Angular, with Jest test coverage and peer-reviewed releases.',
      'Implement UI from Figma designs and contribute to shared component libraries that other engineering teams build on.',
      'Work on back-end APIs in Go and Node.js within larger platforms, combining data from multiple upstream systems.',
      'Led multiple production migrations from ECS on EC2 to ECS on Fargate; use nginx for microfrontend routing.',
      'Take part in regular on-call rotations, troubleshooting production incidents to root cause.',
    ],
  },
  {
    title: 'Public Communications Strategist',
    org: 'Federal Reserve Board',
    dates: 'Feb 2019 – Jan 2023',
    bullets: [
      'Ran secure, precisely timed web publication of FOMC rate decisions, coordinating policy, legal, communications and engineering teams.',
      'Worked with engineering teams on testing and releases, and administered CMS governance.',
      'Led SEO work, including adding metadata fields to research publications so they could be found in Google and Google Scholar.',
    ],
  },
  {
    title: 'Senior Web Content & Digital Media Specialist',
    org: 'Brookings Institution',
    dates: 'Dec 2016 – Feb 2019',
    bullets: [
      'Managed web content for the Economic Studies program, whose section of brookings.edu drew more than 7 million views from 5 million visitors in a year.',
      'Built interactive data visualizations with HTML, CSS, JavaScript and D3.js to accompany published research.',
      'Ran the Brookings Econ Twitter feed and managed five newsletters, including creating two new ones.',
    ],
  },
  {
    title: 'Designer',
    org: 'The Washington Examiner',
    dates: 'Oct 2015 – Nov 2016',
    bullets: [
      'Designed and laid out the weekly print magazine and created marketing and online graphics.',
    ],
  },
]

const link = 'text-blue-700 hover:text-blue-900 underline'

export default function Experience() {
  return (
    <Layout>
      <Head>
        <title>{`Experience | ${siteTitle}`}</title>
      </Head>
      <h1 className='text-3xl font-bold text-slate-900 mb-8'>Experience</h1>

      <div className='space-y-8 mb-12'>
        {jobs.map((job) => (
          <section key={job.org} className='bg-white rounded-lg border border-slate-200 p-6'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3'>
              <h2 className='text-xl font-semibold text-slate-900 mb-0'>
                {job.title}<span className='font-normal text-slate-600'>, {job.org}</span>
              </h2>
              <span className='text-sm text-slate-500'>{job.dates}</span>
            </div>
            <ul className='list-disc ml-5 space-y-1 text-slate-700'>
              {job.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </section>
        ))}
      </div>

      <h2 className='text-2xl font-semibold text-slate-900 mb-4'>Education and training</h2>
      <ul className='list-disc ml-5 space-y-2 text-slate-700'>
        <li><strong>Louisiana State University</strong>, B.A. in Mass Communications, 2014</li>
        <li>
          <strong>General Assembly</strong>, Software Engineering Immersive, 2021 (
          <a className={link} href='https://drive.google.com/file/d/1jJsNC1mGrQY6xqoxakWchHHPQwP9tTMF/view?usp=sharing'>certificate</a>)
        </li>
        <li>
          <strong>freeCodeCamp</strong>, <a className={link} href='https://www.freecodecamp.org/certification/kthib16/javascript-algorithms-and-data-structures'>JavaScript Algorithms and Data Structures</a> (300 hours)
        </li>
        <li><strong>Google</strong>, <a className={link} href='https://grow.google/certificates/android-developer/'>Android Development with Kotlin</a></li>
      </ul>
    </Layout>
  )
}
