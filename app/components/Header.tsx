import { Link, useMatches } from '@remix-run/react'

export default function Header() {
  const matches = useMatches()

  return (
    <>
      <header className='container flex flex-col items-center justify-center py-8 mx-auto'>
        <Link to='/' title='Home'>
          <svg
            className='w-24 h-24'
            enableBackground='new 0 0 64 64'
            viewBox='0 0 64 64'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='CANADA'>
              <g>
                <g fill='#f6cd2a'>
                  <path d='m42.888 25.98c-.014-.035-.035-.068-.042-.103l-.241-.866.237.865c.008.036.031.069.046.104z' />
                  <path d='m47.063 31.592c-.155-.291-.002-.719.181-1.449l1.264-4.785-.006.001-1.262 4.778c-.185.729-.334 1.162-.177 1.455z' />
                  <path d='m40.502 25.637-2.084 2.426c-.066.089-.143.167-.223.232.081-.065.157-.143.225-.231z' />
                  <path d='m47.113 31.679c.082.098.21.178.398.248-.189-.072-.317-.152-.398-.248z' />
                  <path d='m40.537 40.615c.008-.158.057-.31.124-.451-.067.141-.116.292-.124.451z' />
                  <path d='m38.746 18.137-.953.522.952-.517z' />
                  <path d='m31.998 13.254 3.01 5.846c.068.128.15.221.238.295-.086-.074-.166-.166-.23-.293l-3.018-5.854-3.014 5.854c-.043.08-.09.148-.141.207.051-.06.099-.128.143-.209z' />
                  <path d='m49.219 32.757-1.707-.831 1.704.834z' />
                  <path d='m22.698 43.422-.001.004c2.855-.342 5.41-.654 8.246-.996.162 0 .39.098.538.243-.145-.148-.371-.249-.534-.249-2.843.347-5.4.658-8.249.998z' />
                  <path d='m32.408 42.974.223 9.054h-1.389v.002h1.396l-.225-9.049c0-.297.373-.55.625-.55 2.854.341 5.408.653 8.262.996v-.004c-2.853-.341-5.405-.652-8.261-.997-.246 0-.631.253-.631.548z' />
                  <path d='m41.031 42.506-.459-1.562c-.022-.083-.025-.167-.027-.251.002.084.004.168.025.251z' />
                  <path d='m16.771 30.209c.258 1.019.443 1.44-.3 1.717l-1.709.831.006.005 1.71-.836c.734-.273.558-.703.293-1.717z' />
                  <path d='m25.916 18.505-.678-.368.267 1.467-.265-1.463z' />
                  <path d='m23.338 40.169c.11.239.154.513.072.776l-.511 1.778.519-1.778c.075-.266.032-.539-.08-.776z' />
                </g>
                <path
                  d='m31.998 7.231c-7.83 0-14.797 3.625-19.314 9.287v30.965c4.518 5.661 11.484 9.287 19.314 9.287 7.832 0 14.801-3.625 19.318-9.287v-30.965c-4.517-5.662-11.486-9.287-19.318-9.287zm8.547 33.462c.002.084.005.169.027.251l.459 1.562.27.917h-.001l.001.004c-2.854-.342-5.408-.654-8.262-.996-.252 0-.625.252-.625.55l.225 9.049h-1.396v-.002h-.003l.381-9.074c0-.107-.061-.198-.14-.279-.148-.145-.375-.243-.538-.243-2.836.341-5.391.653-8.246.996l.001-.004c-.001 0-.002 0-.003 0l.204-.7.511-1.778c.082-.263.039-.537-.072-.776-.071-.152-.165-.292-.292-.396l-8.283-7.009.004-.002-.006-.005 1.709-.831c.743-.277.559-.699.3-1.717-.007-.025-.012-.046-.019-.072l-1.264-4.785 4.809 1.059c.471.074.785-.242.852-.534l.621-2.249 3.803 4.436c.539.709 1.639.709 1.293-.934l-1.36-7.525-.267-1.468.678.369 1.508.814c.459.262.916.365 1.259.133.052-.035.1-.08.146-.13.004-.005.01-.008.015-.013.051-.059.098-.127.141-.207l3.014-5.854 3.018 5.854c.064.127.145.219.23.293.35.295.839.204 1.33-.076l1.217-.661.953-.522-.001.005.003-.001-1.621 8.989c-.299 1.438.502 1.618 1.068 1.166.08-.065.156-.143.223-.232l2.084-2.426 1.723-2.009.38 1.384.241.866c.007.035.028.068.042.103.112.256.392.495.808.43l4.809-1.059-.002.007.006-.001-1.264 4.785c-.183.729-.336 1.158-.181 1.449.017.029.027.061.05.087.081.097.209.177.398.248l1.707.831-.003.002.011.005-8.279 7.009c-.123.103-.215.241-.286.391-.067.142-.116.293-.124.451-.003.023.006.049.006.075z'
                  fill='#f3f3f3'
                />
                <path
                  d='m7.23 32c0 5.854 2.035 11.232 5.453 15.482v-30.964c-3.417 4.249-5.453 9.628-5.453 15.482z'
                  fill='#e91e26'
                />
                <path
                  d='m51.316 16.518v30.965c3.416-4.25 5.451-9.628 5.451-15.482.001-5.855-2.035-11.234-5.451-15.483z'
                  fill='#e91e26'
                />
                <path
                  d='m40.947 39.773 8.279-7.009-.011-.005-1.704-.833c-.188-.07-.316-.15-.398-.248-.022-.026-.033-.058-.05-.087-.157-.293-.009-.726.177-1.455l1.262-4.778.002-.007-4.809 1.059c-.416.065-.695-.174-.808-.43-.015-.035-.038-.069-.046-.104l-.237-.865-.38-1.384-1.723 2.009-2.082 2.427c-.067.089-.144.167-.225.231-.566.452-1.367.272-1.068-1.166l1.621-8.989-.003.001-.952.517-1.217.661c-.491.279-.98.371-1.33.076-.088-.074-.17-.167-.238-.295l-3.01-5.846-3.011 5.847c-.043.081-.091.15-.143.209-.005.005-.01.008-.015.013-.046.05-.094.095-.146.13-.343.231-.8.128-1.259-.133l-1.508-.814-.676-.365.265 1.464 1.36 7.525c.346 1.644-.754 1.644-1.293.934l-3.803-4.436-.621 2.249c-.066.292-.381.607-.852.534l-4.809-1.059 1.264 4.785c.007.026.012.047.019.072.265 1.014.441 1.444-.292 1.717l-1.71.836-.004.002 8.283 7.009c.126.104.22.244.292.396.111.237.155.51.08.776l-.519 1.778-.204.7h.003c2.849-.34 5.406-.652 8.249-.997.163 0 .389.1.534.249.079.081.141.172.14.279l-.381 9.074h.002 1.389l-.223-9.054c0-.295.385-.548.631-.548 2.855.345 5.408.656 8.261.997h.001l-.27-.917-.461-1.562c-.021-.083-.023-.167-.025-.251 0-.026-.009-.052-.008-.078.008-.159.057-.31.124-.451.071-.149.163-.287.286-.39z'
                  fill='#e81d26'
                />
                <path
                  d='m32 4.259c-15.296 0-27.741 12.445-27.741 27.741s12.445 27.741 27.741 27.741c15.297 0 27.741-12.445 27.741-27.741s-12.444-27.741-27.741-27.741zm0 52.511c-13.685 0-24.77-11.084-24.77-24.77s11.085-24.77 24.77-24.77c13.686 0 24.77 11.085 24.77 24.77s-11.084 24.77-24.77 24.77z'
                  fill='#c1c1c0'
                />
              </g>
            </g>
          </svg>
        </Link>

        <h2 className='font-bold leading-tight tracking-tight text-center text-white font-oswald text-7xl drop-shadow-lg'>
          Canadian Holidays{' '}
          <span className='block text-6xl font-extralight'>in {new Date().getFullYear()}</span>
        </h2>

        {matches[1].pathname !== '/' && (
          <div className='grid w-1/3 grid-cols-2 px-4 py-2 mt-8 divide-x rounded divide-white/20 bg-zinc-900/30'>
            <Link
              className='text-lg text-center transition-colors text-zinc-300 hover:text-white'
              to='/holidays/federal'
              prefetch='intent'
            >
              Federal Holidays
            </Link>

            <Link
              className='text-lg text-center transition-colors text-zinc-300 hover:text-white'
              to='/holidays/provincial'
              prefetch='intent'
            >
              Provincial Holidays
            </Link>
          </div>
        )}
      </header>
    </>
  )
}