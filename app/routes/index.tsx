import { Link } from '@remix-run/react'
import Card from '~/components/Card'

export default function Index() {
  return (
    <>
      <div className='container grid grid-cols-12 gap-12 mx-auto mt-8 content'>
        <div className='grid grid-cols-12 col-span-6 col-start-4 gap-8'>
          <Card width='col-span-12 md:col-span-6'>
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
