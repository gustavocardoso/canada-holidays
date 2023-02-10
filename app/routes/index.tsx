import { Link } from '@remix-run/react'
import Card from '~/components/Card'

export default function Index() {
  return (
    <>
      <div className='container grid grid-cols-12 mx-auto mt-8 content'>
        <div className='w-full md:grid md:grid-cols-12 col-span-12 md:col-span-6 md:col-start-4 gap-8'>
          <Card width='col-span-12 md:col-span-6' aspect='aspect-none' margin='mb-8 md:mb-0'>
            <Link
              className='text-xl font-semibold hover:text-white drop-shadow-md'
              to='/holidays/federal'
              prefetch='intent'
            >
              Federal Holidays
            </Link>
          </Card>

          <Card width='col-span-12 md:col-span-6'>
            <Link
              className='text-xl font-semibold hover:text-white drop-shadow-md'
              to='/holidays/provincial'
              prefetch='intent'
            >
              Provincial Holidays
            </Link>
          </Card>
        </div>
      </div>
    </>
  )
}
