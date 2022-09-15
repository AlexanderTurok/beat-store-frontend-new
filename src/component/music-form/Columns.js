

// components
import Column from "./Column";

function Columns() {
  return (
    <div className="columns">
      <Column name={"TITLE"}/>
      <Column name={"KEY"}/>
      <Column name={"BPM"}/>
      <Column name={"KEY"}/>
      <Column name={"TAGS"}/>
      <Column name={"OPTIONS"}/>
    </div>
  )
}

export default Columns