'use client'
import { useState } from 'react'

interface PropertyTax {
  region: string
  property_tax_25th_percentile: number
  property_tax_50th_percentile: number
  property_tax_75th_percentile: number
  state?: string
  county?: string
  city?: string
  zip?: string
}

export default function PropertyTaxApp() {
  const [state, setState] = useState('')
  const [county, setCounty] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [propertyTaxes, setPropertyTaxes] = useState<PropertyTax[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPropertyTaxes = async () => {
    if (loading) return
    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams()
      if (state) params.append('state', state)
      if (county) params.append('county', county)
      if (city) params.append('city', city)
      if (zip) params.append('zip', zip)

      const response = await fetch(
        `https://api.api-ninjas.com/v1/propertytax?${params.toString()}`,
        {
          headers: { 'X-Api-Key': '/qdMXB5MMWHJT1ory0UFIg==UZQFgsiIjXtMK87w' }
        }
      )
      const data = await response.json()
      console.log('API Response:', data) // Log the response data to verify its structure

      if (Array.isArray(data) && data.length > 0) {
        setPropertyTaxes(
          data.map(item => ({
            region: `${item.city}, ${item.county}, ${item.state}`,
            property_tax_25th_percentile: item.property_tax_25th_percentile,
            property_tax_50th_percentile: item.property_tax_50th_percentile,
            property_tax_75th_percentile: item.property_tax_75th_percentile,
            state: item.state,
            county: item.county,
            city: item.city,
            zip: item.zip
          }))
        )

        // Set form fields with data from the first object in the response
        const firstResult = data[0]
        setState(firstResult.state)
        setCounty(firstResult.county)
        setCity(firstResult.city)
        setZip(firstResult.zip)
      } else {
        setError('No data found for the given query')
      }
    } catch (err) {
      setError('Failed to fetch property tax data')
      console.error('Fetch Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>Property Tax Rates</h1>
        <div className='mt-6'>
          <div className='mb-4'>
            <label className='mb-2 block'>State:</label>
            <input
              type='text'
              value={state}
              onChange={e => setState(e.target.value.toUpperCase())}
              className='w-full rounded border p-2'
              placeholder='e.g. CA'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block'>County:</label>
            <input
              type='text'
              value={county}
              onChange={e => setCounty(e.target.value)}
              className='w-full rounded border p-2'
              placeholder='e.g. Los Angeles'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block'>City:</label>
            <input
              type='text'
              value={city}
              onChange={e => setCity(e.target.value)}
              className='w-full rounded border p-2'
              placeholder='e.g. Los Angeles'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block'>ZIP Code:</label>
            <input
              type='text'
              value={zip}
              onChange={e => setZip(e.target.value)}
              className='w-full rounded border p-2'
              placeholder='e.g. 90001'
            />
          </div>
          <button
            onClick={fetchPropertyTaxes}
            className='rounded bg-blue-500 p-2 text-white'
          >
            Get Property Tax Rates
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>{error}</p>}
        {propertyTaxes.length > 0 && (
          <div className='mt-6'>
            <h2 className='text-xl font-semibold'>Property Tax Rates</h2>
            <table className='mt-4 w-full border-collapse'>
              <thead>
                <tr>
                  <th className='border p-2'>Region</th>
                  <th className='border p-2'>25th Percentile</th>
                  <th className='border p-2'>50th Percentile (Median)</th>
                  <th className='border p-2'>75th Percentile</th>
                </tr>
              </thead>
              <tbody>
                {propertyTaxes.map((tax, index) => (
                  <tr key={index}>
                    <td className='border p-2'>{tax.region}</td>
                    <td className='border p-2'>
                      {tax.property_tax_25th_percentile}%
                    </td>
                    <td className='border p-2'>
                      {tax.property_tax_50th_percentile}%
                    </td>
                    <td className='border p-2'>
                      {tax.property_tax_75th_percentile}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
