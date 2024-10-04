import { Suspense } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { App } from "./components/App"
import { LazyAbout } from "./pages/About/About.lazy"
import { LazyShop } from "./pages/Shop/Shop.lazy"

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root not found")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        )
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyShop />
          </Suspense>
        )
      }
    ]
  }
])

const container = createRoot(root)
container.render(<RouterProvider router={router} />)
