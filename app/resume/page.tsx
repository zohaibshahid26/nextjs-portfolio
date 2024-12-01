import Image from 'next/image'
import authorImage from '@/public/images/authors/man.webp'

export default function Resume() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>Resume</h1>
        <div className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
          <div className='mt-2 flex-1 md:mt-0'>
            <h2 className='text-2xl font-semibold'>James Perkins</h2>
            <p className='mt-3 font-light text-muted-foreground'>
              Software Engineer based in the United States with a passion for
              learning new technologies and sharing knowledge with others. Over
              the years, I have worked on various projects ranging from web
              development to mobile applications. I enjoy solving complex
              problems and building efficient solutions.
            </p>
            <h3 className='mt-6 text-xl font-semibold'>Experience</h3>
            <ul className='mt-3 list-inside list-disc'>
              <li className='mt-2'>
                <strong>Senior Software Engineer</strong> at Tech Company (2020
                - Present)
                <p className='font-light text-muted-foreground'>
                  Leading a team of developers to build scalable web
                  applications. Implemented new features and optimized existing
                  ones to improve performance and user experience.
                </p>
              </li>
              <li className='mt-2'>
                <strong>Software Engineer</strong> at Another Tech Company (2017
                - 2020)
                <p className='font-light text-muted-foreground'>
                  Developed and maintained various web applications and
                  services. Collaborated with cross-functional teams to define,
                  design, and ship new features.
                </p>
              </li>
              <li className='mt-2'>
                <strong>Junior Developer</strong> at Startup Inc. (2015 - 2017)
                <p className='font-light text-muted-foreground'>
                  Assisted in the development of web applications and gained
                  valuable experience in full-stack development.
                </p>
              </li>
            </ul>
            <h3 className='mt-6 text-xl font-semibold'>Education</h3>
            <ul className='mt-3 list-inside list-disc'>
              <li className='mt-2'>
                <strong>Bachelor of Science in Computer Science</strong> from
                University of Somewhere (2013 - 2017)
                <p className='font-light text-muted-foreground'>
                  Graduated with honors, focusing on software development and
                  data structures.
                </p>
              </li>
            </ul>
            <h3 className='mt-6 text-xl font-semibold'>Skills</h3>
            <ul className='mt-3 list-inside list-disc'>
              <li className='mt-2'>JavaScript, TypeScript, React, Next.js</li>
              <li className='mt-2'>Node.js, Express, MongoDB</li>
              <li className='mt-2'>HTML, CSS, Tailwind CSS</li>
              <li className='mt-2'>Git, Docker, CI/CD</li>
              <li className='mt-2'>Agile Methodologies, Team Leadership</li>
            </ul>
            <h3 className='mt-6 text-xl font-semibold'>Certifications</h3>
            <ul className='mt-3 list-inside list-disc'>
              <li className='mt-2'>Certified Kubernetes Administrator (CKA)</li>
              <li className='mt-2'>AWS Certified Solutions Architect</li>
            </ul>
          </div>
          <div className='relative'>
            <Image
              className='flex-1 rounded-lg grayscale'
              src={authorImage}
              alt='James Perkins'
              width={175}
              height={175}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
