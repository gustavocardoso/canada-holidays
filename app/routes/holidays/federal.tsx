import { json } from '@remix-run/node'
import { type LoaderFunction, useLoaderData } from 'react-router'
import { z } from 'zod'
import { createZodFetcher } from 'zod-fetch'
import Card from '~/components/Card'

import { type Holiday } from '~/types'

const fetcher = createZodFetcher()

const schema = z.object({
  holidays: z.array(
    z
      .object({
        id: z.number(),
        nameEn: z.string().min(1),
        nameFr: z.string().min(1),
        date: z
          .string()
          .min(1)
          .transform(date =>
            new Date(date).toLocaleDateString('en-CA', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })
          ),
        federal: z.number()
      })
      .transform(({ nameEn, nameFr, date, federal }) => ({ nameEn, nameFr, date, federal }))
  )
})

export const loader: LoaderFunction = async () => {
  try {
    const { holidays } = await fetcher(schema, 'https://canada-holidays.ca/api/v1/holidays')
    const filteredHolidays = holidays.filter(holiday => holiday.federal === 1)

    return json(filteredHolidays)
  } catch (error) {
    return error
  }
}

export default function Federal() {
  const holidays = useLoaderData() as Holiday[]

  return (
    <>
      <div className='grid grid-cols-12 gap-12 mt-8 content'>
        {holidays.map(holiday => (
          <Card
            key={holiday.date}
            width='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'
            aspect='aspect-video'
          >
            <span className='transition-all group-hover:-rotate-2 group-hover:scale-125'>
              <h2 className='mb-2 text-2xl font-semibold leading-none text-white drop-shadow-md'>
                {holiday.nameEn}
              </h2>

              <span className='flex items-center justify-center gap-1 font-sans text-zinc-300 group-hover:text-[#f61793] transition-all'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-calendar-event'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                  <path d='M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
                  <path d='M16 3l0 4'></path>
                  <path d='M8 3l0 4'></path>
                  <path d='M4 11l16 0'></path>
                  <path d='M8 15h2v2h-2z'></path>
                </svg>
                {holiday.date}
              </span>
            </span>
          </Card>
        ))}
      </div>
    </>
  )
}
