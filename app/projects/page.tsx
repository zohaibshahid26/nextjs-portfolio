import Projects from '@/components/projects'

export default async function ProjectsPage() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects />
      </div>
    </section>
  )
}
