type FilterGenreProps = {
  currentGenre: string
  genres: string[]
  handleGenre: (genre: string) => void
}
const FilterGenre = ({
  currentGenre,
  genres,
  handleGenre,
}: FilterGenreProps) => {
  return (
    <div className='grid grid-cols-1'>
      <label>Filter by genre</label>
      <select
        value={currentGenre}
        onChange={(e) => handleGenre(e.target.value)}
        className='w-min'
      >
        <option value='All'>All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterGenre
