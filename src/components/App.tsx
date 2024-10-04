import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import classes from "./App.module.scss"

export const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Link to={"/about"}>About</Link>
      <br></br>
      <Link to={"/shop"}>Shop</Link>
      <p>Clicked {count}</p>
      <button className={classes.button} onClick={() => setCount((prev) => prev + 1)}>
        Inc
      </button>
      <Outlet />
    </div>
  )
}
