type FilterPages = {
  handlePages: (pages: number) => void
  pages: number
  maxPages: number
}
const FilterPages = ({ handlePages, pages, maxPages }: FilterPages) => {
  return (
    <div className='grid grid-cols-1'>
      <label>Filter by pages</label>
      <p>{pages}</p>
      <input
        type='range'
        className='w-min'
        min={0}
        max={maxPages}
        onChange={(e) => handlePages(+e.target.value)}
      />
    </div>
  )
}

export default FilterPages
