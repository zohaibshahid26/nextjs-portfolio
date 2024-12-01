import Image from 'next/image'
import authorImage from '@/public/images/authors/man.webp'

export default function About() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>About Me</h1>
        <div className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
          <div className='mt-2 flex-1 md:mt-0'>
            <p className='mt-3 font-light text-muted-foreground'>
              I&#39;m James Perkins, a software engineer based in the United
              States. I have a passion for learning new technologies and sharing
              knowledge with others. Over the years, I have worked on various
              projects ranging from web development to mobile applications. I
              enjoy solving complex problems and building efficient solutions.
            </p>
            <p className='mt-3 font-light text-muted-foreground'>
              In my free time, I love to read tech blogs, contribute to
              open-source projects, and explore new programming languages and
              frameworks. I believe in continuous learning and strive to keep
              myself updated with the latest trends in the tech industry.
            </p>
            <p className='mt-3 font-light text-muted-foreground'>
              Feel free to reach out to me if you want to discuss technology,
              collaborate on a project, or just have a chat!
            </p>
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
