import { json } from '@remix-run/node'
import { type LoaderFunction, useLoaderData } from 'react-router'
import { z } from 'zod'
import { createZodFetcher } from 'zod-fetch'

import Card from '~/components/Card'

import { type Province } from '~/types'

const fetcher = createZodFetcher()

const schema = z.object({
  province: z.object({
    nameEn: z.string().min(1),
    sourceEn: z.string().min(1),
    holidays: z.array(
      z.object({
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
          )
      })
    ),
    nextHoliday: z.object({
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
        )
    })
  })
})

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { province } = await fetcher(
      schema,
      `https://canada-holidays.ca/api/v1/provinces/${params.id?.toUpperCase()}`
    )

    return json(province)
  } catch (error) {
    return error
  }
}

const checkNextHoliday = (date: string): Boolean => {
  const today = new Date()
  const holidaydate = new Date(date)

  console.log(today)
  console.log(holidaydate)

  return holidaydate.getTime() <= today.getTime()
}

export default function ProvincialId() {
  const province = useLoaderData() as Province

  return (
    <>
      <div className='pb-4 text-2xl font-semibold text-center uppercase drop-shadow-md'>
        {province.nameEn}
      </div>
      <div className='grid grid-cols-12 gap-12 mt-8 content'>
        {province.holidays.map(holiday => (
          <Card
            key={holiday.date}
            width='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'
            aspect='aspect-video'
          >
            <div className='transition-all group-hover:-rotate-2 group-hover:scale-125'>
              <h2 className='mb-2 text-2xl font-medium leading-none text-white drop-shadow-md'>
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

              {holiday.date === province.nextHoliday.date && (
                <p className='p-1 mt-6 text-sm font-medium tracking-wide uppercase transition-all bg-black/5 group-hover:mt-2 group-hover:bg-yellow-200 group-hover:text-zinc-900'>
                  Next Holiday!
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
