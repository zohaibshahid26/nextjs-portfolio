import Link from 'next/link'

const projects = [
  {
    name: 'Recipe Finder',
    description: 'Find recipes based on ingredients you have.',
    link: '/projects/recipe-finder'
  },
  {
    name: 'Property Tax Rates',
    description:
      'Retrieve property tax rates for different locations in the US.',
    link: '/projects/property-tax'
  },
  {
    name: 'Company Logos',
    description: 'Get logo images for different companies.',
    link: '/projects/logo-api'
  }
]

export default function Projects() {
  return (
    <div className='mb-5 mt-5'>
      <h2 className='text-2xl font-semibold'>Portfolio</h2>
      <div className='mt-4 grid gap-6 md:grid-cols-2'>
        {projects.map(project => (
          <div key={project.name} className='rounded-lg border p-4 shadow-md'>
            <h3 className='text-xl font-semibold'>{project.name}</h3>
            <p className='mt-2 font-light text-muted-foreground'>
              {project.description}
            </p>
            <Link
              href={project.link}
              className='mt-4 inline-block text-blue-500 underline'
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
