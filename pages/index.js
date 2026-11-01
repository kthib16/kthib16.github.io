import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'

const name = 'Kevin Thibodeaux'

const bio = "Software engineer with 3+ years of professional experience building customer-facing financial web applications at Capital One in React, TypeScript, Vue and Angular, with Node.js and Go back ends. Before engineering I worked in journalism, design and data visualization, which shapes how I think about the people using what I build."

const btnPrimary = 'inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md px-5 py-2'
const btnSecondary = 'inline-block bg-white hover:bg-slate-100 text-slate-800 font-medium rounded-md px-5 py-2 border border-slate-300'

const skills = [
  { group: 'Front end', items: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'Angular', 'Redux', 'HTML & CSS', 'Sass', 'Tailwind CSS', 'D3.js', 'React Native'] },
  { group: 'Back end', items: ['Node.js', 'Express', 'Go', 'Python', 'REST APIs', 'PostgreSQL'] },
  { group: 'Cloud & delivery', items: ['AWS (Lambda, API Gateway, ECS/Fargate)', 'CloudFormation', 'Docker', 'nginx', 'CI/CD', 'Git'] },
  { group: 'Practices', items: ['Jest', 'Component libraries', 'Figma-to-code', 'Code review', 'Agile', 'On-call & incident response'] },
]

const projects = [
  {
    title: 'Word Guess',
    href: '/word-guess',
    image: '/images/Word-Guess.png',
    alt: 'Word Guess game screenshot',
    imageClass: 'object-top',
    description: 'A six-letter word game with six chances to guess. Play it in the browser.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Mortgage Map',
    href: '/mortgage-map',
    image: '/images/mortgage-market-map.png',
    alt: 'Nonbank mortgage lending map',
    imageClass: '',
    description: 'Interactive county-level map of nonbank mortgage lending, built for the Brookings Institution.',
    tags: ['D3.js', 'JavaScript', 'Data visualization'],
  },
  {
    title: 'MyCalendar',
    href: 'https://github.com/kthib16/react-calendar-app',
    image: '/images/MyCalendar-App/my-calendar-welcome.png',
    alt: 'MyCalendar welcome screen',
    imageClass: '',
    description: 'Event tracker with sign-in, event creation and nearby-event search. Source on GitHub.',
    tags: ['React', 'Firebase', 'Ticketmaster API'],
    external: true,
  },
]

const roles = [
  { title: 'Software Engineer', org: 'Capital One', dates: '2023 – Present' },
  { title: 'Public Communications Strategist', org: 'Federal Reserve Board', dates: '2019 – 2023' },
  { title: 'Senior Web Content & Digital Media Specialist', org: 'Brookings Institution', dates: '2016 – 2019' },
]

function ProjectCard({ project }) {
  const card = (
    <a
      className='flex flex-col h-full bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition'
      href={project.external ? project.href : undefined}
    >
      <div className='h-32 flex shrink-0 bg-slate-100'>
        <img
          src={project.image}
          alt={project.alt}
          className={`object-cover w-full ${project.imageClass}`}
        />
      </div>
      <div className='p-4 flex-1'>
        <h3 className='text-lg font-semibold text-slate-900 mb-1'>{project.title}</h3>
        <p className='text-sm text-slate-600 mb-3'>{project.description}</p>
        <p className='text-xs text-blue-700 font-medium mb-0'>{project.tags.join(' · ')}</p>
      </div>
    </a>
  )
  return project.external ? card : <Link href={project.href} passHref>{card}</Link>
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className='flex flex-col md:flex-row items-center md:items-start gap-8 mb-14'>
        <div className='shrink-0'>
          <Image
            priority={true}
            src='/images/profile.jpg'
            className='rounded-full'
            height={150}
            width={150}
            alt={name}
          />
        </div>
        <div className='text-center md:text-left'>
          <h1 className='text-4xl font-bold text-slate-900 mb-1'>{name}</h1>
          <p className='text-lg text-blue-700 font-medium mb-4'>Software Engineer · Washington, D.C.</p>
          <p className='text-slate-700'>{bio}</p>
          <div className='flex flex-wrap justify-center md:justify-start gap-3'>
            <a className={btnPrimary} href='/thibodeaux-resume.pdf'>Download resume</a>
            <Link href='/contact'><a className={btnSecondary}>Get in touch</a></Link>
          </div>
        </div>
      </section>

      <section className='mb-14'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-4'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {skills.map((s) => (
            <div key={s.group} className='bg-white rounded-lg border border-slate-200 p-4'>
              <h3 className='text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2'>{s.group}</h3>
              <ul className='flex flex-wrap gap-2'>
                {s.items.map((item) => (
                  <li key={item} className='text-sm bg-slate-100 text-slate-700 rounded px-2 py-1'>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-14'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-4'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-semibold text-slate-900 mb-4'>Experience</h2>
        <ul className='bg-white rounded-lg border border-slate-200 divide-y divide-slate-200 mb-3'>
          {roles.map((r) => (
            <li key={r.org} className='p-4 flex flex-col sm:flex-row sm:justify-between'>
              <span><strong className='text-slate-900'>{r.title}</strong>, {r.org}</span>
              <span className='text-sm text-slate-500'>{r.dates}</span>
            </li>
          ))}
        </ul>
        <Link href='/experience'><a className='text-blue-700 hover:text-blue-900 font-medium'>Full experience and education &rarr;</a></Link>
      </section>
    </Layout>
  )
}
