import { type ReactElement } from 'react'

type CardProps = {
  children: ReactElement
  width: string
  aspect?: string
}

export default function Card({ children, width, aspect }: CardProps) {
  return (
    <>
      <div
        className={`flex flex-col ${width} ${aspect} items-center justify-center p-8 overflow-hidden text-center transition-all bg-white rounded-lg group bg-opacity-20 backdrop-blur-lg drop-shadow-lg hover:drop-shadow-bright hover:bg-opacity-80 hover:bg-zinc-900`}
      >
        {children}
      </div>
    </>
  )
}
