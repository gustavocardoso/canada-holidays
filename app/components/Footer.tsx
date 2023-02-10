export default function Footer() {
  return (
    <>
      <div className='container flex flex-col items-center justify-center py-12 px-4 mx-auto footer text-zinc-200'>
        <p className='p-4 text-sm md:text-base rounded-lg font-extralight bg-zinc-900/30 text-center'>
          Developed - <span className='text-[#f61793]'>just for fun</span> - by{' '}
          <span className='font-semibold'>Gustavo Cardoso</span>, using{' '}
          <a
            className='underline text-[#f61793] hover:text-white transition-colors'
            href='https://remix.run/'
          >
            Remix
          </a>{' '}
          ,{' '}
          <a
            className='underline text-[#f61793] hover:text-white transition-colors'
            href='https://tailwindcss.com/'
          >
            Tailwindcss
          </a>
          , and{' '}
          <a
            className='underline text-[#f61793] hover:text-white transition-colors'
            href='https://canada-holidays.ca/api'
          >
            Canada Holidays API
          </a>
          .
        </p>
      </div>
    </>
  )
}
