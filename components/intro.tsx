import Image from 'next/image'
import authorImage from '@/public/images/authors/man.webp'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m James.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in United States. I&#39;m passionate
          about learning new technologies and sharing knowledge with others.
          <Link
            href='/about'
            className='mx-1 underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
          >
            <span>Learn more about me</span>
          </Link>
          or check out my latest resume
          <Link
            href='/resume'
            className='mx-1 underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
          >
            <span>here</span>
          </Link>
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
    </section>
  )
}
