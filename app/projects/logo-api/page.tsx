'use client'
import { useState } from 'react'

interface Logo {
  name: string
  ticker: string
  image: string
}

export default function LogoAPI() {
  const [query, setQuery] = useState('')
  const [logos, setLogos] = useState<Logo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchLogos = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/logo?name=${query}`,
        {
          headers: { 'X-Api-Key': '/qdMXB5MMWHJT1ory0UFIg==UZQFgsiIjXtMK87w' }
        }
      )
      const data = await response.json()
      setLogos(data)
    } catch (err) {
      setError('Failed to fetch logos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>Company Logos</h1>
        <div className='mt-6'>
          <div className='mb-4'>
            <label className='mb-2 block'>Company Name or Ticker:</label>
            <input
              type='text'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='w-full rounded border p-2'
              placeholder='e.g. Microsoft or MSFT'
            />
          </div>
          <button
            onClick={fetchLogos}
            className='rounded bg-blue-500 p-2 text-white'
          >
            Get Logos
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>{error}</p>}
        {logos.length > 0 && (
          <div className='mt-6'>
            <h2 className='text-xl font-semibold'>Logos</h2>
            <ul className='mt-4'>
              {logos.map((logo, index) => (
                <li key={index} className='mb-4 flex items-center'>
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className='mr-4 h-16 w-16'
                  />
                  <div>
                    <p className='font-semibold'>{logo.name}</p>
                    <p className='text-sm text-gray-600'>{logo.ticker}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
