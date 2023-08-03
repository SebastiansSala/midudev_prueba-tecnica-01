import Book from "./Book"
import { BookType } from "../libs/types"
import Button from "./Button"

type ListOfBooksProps = {
  books: BookType[]
  onClick: (title: string) => void
}
const ListOfBooks = ({ books, onClick }: ListOfBooksProps) => {
  return (
    <section className='flex-1'>
      <h2 className='text-5xl py-10'>Lecture List</h2>
      <ul className='grid grid-cols-2 gap-10'>
        {books.map(({ title, cover }) => (
          <Book title={title} cover={cover} key={title}>
            <Button onClick={() => onClick(title)}>Remove from list</Button>
          </Book>
        ))}
      </ul>
    </section>
  )
}

export default ListOfBooks
