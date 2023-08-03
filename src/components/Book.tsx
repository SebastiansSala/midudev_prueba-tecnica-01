import { useState } from "react"

type BookProps = {
  title: string
  cover: string
  children: React.ReactNode
}
const Book = ({ children, title, cover }: BookProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li
      key={title}
      className='relative w-40'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={cover} alt={title} className='w-full h-full' />
      {isHovered && (
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-end'>
          {children}
        </div>
      )}
    </li>
  )
}

export default Book
