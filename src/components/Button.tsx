import React from "react"

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className='bg-white mb-10 px-4 rounded-full py-2 hover:scale-105 text-black transition'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
