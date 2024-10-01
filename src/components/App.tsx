import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Clicked {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
    </div>
  )
}
