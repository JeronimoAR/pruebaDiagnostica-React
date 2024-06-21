import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './views/Home.jsx'
import NotFound from './views/NotFound.jsx'
import books from "./assets/books.json"
import Verify from './views/Verify.jsx'
import Popular from './views/Popular.jsx'
import Search from './views/Search.jsx'
import Manage from "./views/Manage.jsx"

function App() {
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
    const online = localStorage.getItem("online")

    if (online == null) {
      localStorage.setItem("online", false)
    }

  },)

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/verify", element: <Verify /> },
    {path: "/manage", element: <Manage />},
    { path: "/popular", element: <Popular /> },
    { path: "/search", element: <Search /> },
    { path: "/*", element: <NotFound /> }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
