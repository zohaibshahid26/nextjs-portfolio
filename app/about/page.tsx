import Image from 'next/image'
import authorImage from '@/public/images/authors/profile.jpg'

export default function About() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>About Me</h1>
        <div className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
          <div className='mt-2 flex-1 md:mt-0'>
            <p className='mt-3 font-light text-muted-foreground'>
              I &#39; m an international student currently studying abroad,
              navigating a new culture and academic system. I focus on adapting
              to my surroundings while balancing my studies and personal life. I
              engage with diverse perspectives and experiences, which enriches
              my education.
            </p>
            <p className='mt-3 font-light text-muted-foreground'>
              My journey has been filled with challenges and opportunities that
              have helped me grow both personally and professionally. I have
              developed strong problem-solving skills and the ability to work
              under pressure. These experiences have taught me the importance of
              resilience and adaptability.
            </p>
            <p className='mt-3 font-light text-muted-foreground'>
              In addition to my academic pursuits, I am passionate about
              technology and innovation. I enjoy exploring new tools and
              frameworks, and I am always eager to learn and apply new skills.
              My goal is to leverage my knowledge and experiences to make a
              positive impact in the tech industry.
            </p>
          </div>
          <div className='relative'>
            <Image
              className='flex-1 rounded-lg'
              src={authorImage}
              alt='Guneet Kaur'
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
