import { json } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { type LoaderFunction, useLoaderData } from 'react-router'
import { z } from 'zod'
import { createZodFetcher } from 'zod-fetch'
import Card from '~/components/Card'

import { type Province } from '~/types'

const fetcher = createZodFetcher()

const schema = z.object({
  provinces: z.array(
    z.object({
      id: z.string().min(1),
      nameEn: z.string().min(1),
      nameFr: z.string().min(1)
    })
  )
})

export const loader: LoaderFunction = async () => {
  try {
    const { provinces } = await fetcher(schema, 'https://canada-holidays.ca/api/v1/provinces')

    return json(provinces)
  } catch (error) {
    return error
  }
}

export default function Provincial() {
  const provinces = useLoaderData() as Province[]

  return (
    <>
      <div className='md:grid md:grid-cols-12 md:gap-12 mt-8 content'>
        {provinces.map(province => (
          <Card
            key={province.id}
            width='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'
            margin='mb-8 md:mb-0'
          >
            <span className='transition-all group-hover:-rotate-2 group-hover:scale-125'>
              <h2 className='text-2xl font-semibold leading-none text-white drop-shadow-md'>
                <Link to={`/holidays/provincial/${province.id?.toLowerCase()}`} prefetch='intent'>
                  {province.nameEn}
                </Link>
              </h2>
            </span>
          </Card>
        ))}
      </div>
    </>
  )
}
