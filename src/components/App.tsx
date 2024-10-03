import { useState } from "react"
import classes from "./App.module.scss"

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Clicked {count}</p>
      <button className={classes.button} onClick={() => setCount((prev) => prev + 1)}>
        Inc
      </button>
    </div>
  )
}
