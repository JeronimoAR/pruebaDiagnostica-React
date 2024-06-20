import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './views/Home.jsx'
import NotFound from './views/NotFound.jsx'
import books from "./assets/books.json"

function App() {
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, )

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NotFound /> }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
