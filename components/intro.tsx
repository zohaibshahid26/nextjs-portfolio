import Image from 'next/image'
import authorImage from '@/public/images/authors/profile.jpg'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Guneet</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m an international student currently studying abroad, navigating
          a new culture and academic system. I focus on adapting to my
          surroundings while balancing my studies and personal life. I engage
          with diverse perspectives and experiences, which enriches my
          education.
          <Link
            href='/about'
            className='mx-1 underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
          >
            <span>Learn more about me</span>
          </Link>
          or check out my latest resume
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Guneet kaur'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
