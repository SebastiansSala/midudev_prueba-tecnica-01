import { useState } from "react"
import libraryBooks from "./data/books.json"
import Book from "./components/Book"
import FilterGenre from "./components/FilterGenre"
import FilterPages from "./components/FilterPages"
import { BookType } from "./libs/types"
import ListOfBooks from "./components/LIstOfBooks"
import Button from "./components/Button"

function App() {
  const [books, setBooks] = useState(libraryBooks.library)
  const [list, setList] = useState<BookType[]>([])
  const [currentGenre, setCurrentGenre] = useState("All")
  const [pages, setPages] = useState(0)

  const genres = Array.from(new Set(books.map(({ book }) => book.genre)))
  const maxPages = Math.max(...books.map(({ book }) => book.pages))

  const filteredBooks =
    currentGenre === "All"
      ? books
      : books.filter(({ book }) => book.genre === currentGenre)

  const filteredByPages = filteredBooks.filter(({ book }) => {
    return (
      book.pages >= pages &&
      !list.some((bookToAdd) => bookToAdd.title === book.title)
    )
  })

  const handleAddToList = (title: string) => {
    const bookToAdd = books.find(({ book }) => book.title === title)
    if (!bookToAdd) return

    const findBookInList = list.find((book) => book.title === title)

    if (!findBookInList) {
      setList((list) => [...list, bookToAdd.book])
    }
  }

  const handleRemoveFromList = (title: string) => {
    const bookToAdd = list.find((book) => book.title === title)
    if (!bookToAdd) return

    const filterList = list.filter((book) => book.title !== title)

    setList(filterList)
  }

  const handleGenre = (genre: string) => {
    setCurrentGenre(genre)
  }

  const handlePages = (pages: number) => {
    setPages(pages)
  }

  return (
    <main className='container mx-auto border p-6 flex gap-10'>
      <section className='w-4/6'>
        <h1 className='text-7xl font-bold py-10'>
          {filteredByPages.length} libros disponibles
        </h1>
        <h3>{list.length} libros en lista</h3>
        <div className='grid grid-cols-2 py-10'>
          <FilterPages
            pages={pages}
            maxPages={maxPages}
            handlePages={handlePages}
          />
          <FilterGenre
            currentGenre={currentGenre}
            genres={genres}
            handleGenre={handleGenre}
          />
        </div>
        <ul className='flex flex-wrap gap-8'>
          {filteredByPages.map(({ book }) => {
            const { title, cover } = book
            return (
              <Book title={title} cover={cover} key={title}>
                <Button onClick={() => handleAddToList(title)}>
                  Add To List
                </Button>
              </Book>
            )
          })}
        </ul>
      </section>
      <ListOfBooks books={list} onClick={handleRemoveFromList} />
    </main>
  )
}

export default App
