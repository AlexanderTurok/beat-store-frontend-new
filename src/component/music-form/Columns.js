
// style
import "../../style/css/music-form/music-columns.css"

function Columns() {
  return (
    <div className="columns">
      <strong className='column title'> TITLE </strong>
      <strong className='column bpm'> BPM </strong>
      <strong className='column key'> KEY </strong>
      <strong className='column tags'> TAGS </strong>
      <strong className='column options'> OPTIONS </strong>
    </div>
  )
}

export default Columns