import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import Projects from '@/components/projects'
import RecentPosts from '@/components/recent-posts'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <Projects />
        <NewsletterForm />
      </div>
    </section>
  )
}
